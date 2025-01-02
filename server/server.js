/* eslint-disable no-undef */
import express from 'express';
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import cors from 'cors';
import bodyParser from 'body-parser';
import path from 'path';
import dotenv from 'dotenv';
import { MongoClient } from 'mongodb';

dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(cors());

const __dirname = new URL('.', import.meta.url).pathname;

 
const mongoURI = process.env.MONGO_URI;
const jwtSecret = process.env.JWT_SECRET;

const client = new MongoClient(mongoURI);
let database;

async function connectToMongoDB() {
  try {
    await client.connect();
    database = client.db('GoPredict');
    console.log('Connected to MongoDB!');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
}

mongoose.connect(mongoURI).then(() => {
  console.log('MongoDB connected to Atlas for user authentication');
  app.listen(5001, () => {
    console.log('Server running on port 5001');
  });
}).catch((err) => {
  console.error('MongoDB connection error:', err);
});

app.use(express.static(path.join(__dirname, 'client/build')));

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

const User = mongoose.model('User', userSchema);

const generateToken = (id) => {
  return jwt.sign({ id }, jwtSecret, { expiresIn: '1h' });
};

app.post('/api/auth/register', async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const newUser = new User({ name, email, password });
    await newUser.save();
    const token = generateToken(newUser._id);

    res.status(201).json({ message: 'User registered successfully', token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

app.post('/api/auth/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'Invalid email' });

    const isPasswordMatch = await user.matchPassword(password);
    if (!isPasswordMatch) return res.status(400).json({ message: 'Invalid password' });

    const token = generateToken(user._id);
    res.json({ message: 'Login successful', token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

const protect = (req, res, next) => {
  let token;
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, jwtSecret);
      req.user = decoded.id;
      next();
    } catch {
      res.status(401).json({ message: 'Not authorized, token failed' });
    }
  } else {
    res.status(401).json({ message: 'Not authorized, no token' });
  }
};

const teamsSchema = new mongoose.Schema({
  team_name: String,
  data: {
    color: String,
    batters: Array,
    allRounders: Array,
    bowlers: Array,
  },
});

const Teams = mongoose.model('players', teamsSchema);

app.get('/players', async (req, res) => {
  try {
    const data = await Teams.find();
    res.json(data);
  } catch {
    res.status(500).json({ error: 'Failed to fetch items' });
  }
});

// const tablesSchema = new mongoose.Schema({
//   year: String,
//   src: String,
// });

// const Tables = mongoose.model('tables', tablesSchema);

app.get('/api/tables', async (req, res) => {
  try {
    if (!database) {
      return res.status(500).json({ message: 'Database not connected' });
    }

    const collection = database.collection('tables');
    const tables = await collection.find({}).toArray();
    res.json(tables);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.get('/api/protected', protect, (req, res) => {
  res.json({ message: 'This is a protected route' });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

process.on('SIGINT', async () => {
  if (client) {
    await client.close();
    console.log('MongoDB connection closed.');
  }
  process.exit(0);
});

connectToMongoDB();
