import { useState } from "react";
import axios from "axios";
import { Card, Input, Checkbox, Button, Typography } from "@material-tailwind/react";

export function SimpleRegistrationForm({ setIsSignup }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      name,
      email,
      password,
    };

    try {
      const response = await axios.post(
        "http://localhost:5001/api/auth/register",
        userData
      );

      if (response.data.message === "User registered successfully") {
        alert("User registered successfully!");
        setName("");
        setEmail("");
        setPassword("");
        setIsSignup(false);
      }
    } catch (error) {
      setErrorMessage(error.response?.data?.message || "An error occurred");
    }
  };

  return (
    <Card
      className="text-white w-full max-w-md mx-auto"
      color="transparent"
      shadow={false}
    >
      <Typography className="w-24" variant="h4">
        Sign Up
      </Typography>
      <Typography className="mt-1 w-25 font-normal">
        Nice to meet you! Enter your details to register.
      </Typography>
      <form
        className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
        onSubmit={handleSubmit}
      >
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" className="-mb-3">
            Your Name
          </Typography>
          <Input
            size="lg"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className=" !border-white focus:!border-white text-white"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" className="-mb-3">
            Your Email
          </Typography>
          <Input
            size="lg"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="name@mail.com"
            className=" !border-white focus:!border-white text-white"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" className="-mb-3">
            Password
          </Typography>
          <Input
            type="password"
            size="lg"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="********"
            className=" !border-white focus:!border-white text-white"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
        </div>
        <Checkbox
          label={
            <Typography
              variant="small"
              color="white"
              className="flex items-center font-normal"
            >
              I agree to the
              <a
                href="#"
                className="font-medium transition-colors hover:text-white"
              >
                &nbsp;Terms and Conditions
              </a>
            </Typography>
          }
          containerProps={{ className: "-ml-2.5" }}
        />
        <Button type="submit" className="mt-6" fullWidth>
          Sign Up
        </Button>
        <Typography className="mt-4 text-center font-normal">
          Already have an account?{" "}
          <a
            href="#"
            className="font-medium cursor-pointer text-blue-gray-500"
            onClick={() => setIsSignup(false)}
          >
            Sign In
          </a>
        </Typography>
      </form>
    </Card>
  );
}
