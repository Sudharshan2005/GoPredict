import express from 'express';
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import cors from 'cors';
import bodyParser from 'body-parser';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(cors());

const __dirname = new URL('.', import.meta.url).pathname;

app.use(express.static(path.join(__dirname, 'client/build')));

const mongoURI = process.env.MONGO_URI;
const jwtSecret = process.env.JWT_SECRET; // Store this in your .env file

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});


userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

const User = mongoose.model('User', userSchema);

const generateToken = (id) => {
  return jwt.sign({ id }, jwtSecret, { expiresIn: '1h' });
};

const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const newUser = new User({
      name,
      email,
      password,
    });

    await newUser.save();

    const token = generateToken(newUser._id);

    res.status(201).json({
      message: 'User registered successfully',
      token,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

app.post('/api/auth/register', registerUser);

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: 'Invalid email' });
    }

    const isPasswordMatch = await user.matchPassword(password);

    if (!isPasswordMatch) {
      return res.status(400).json({ message: 'Invalid password' });
    }

    const token = generateToken(user._id);

    res.json({
      message: 'Login successful',
      token,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

app.post('/api/auth/login', loginUser);

const protect = (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, jwtSecret);
      req.user = decoded.id;
      next();
    } catch  {
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

mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected to Atlas');
    app.listen(5001, () => {
      console.log('Server running on port 5001');
    });
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.get('/api/protected', protect, (req, res) => {
  res.json({ message: 'This is a protected route' });
});
