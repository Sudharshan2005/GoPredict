import { useState } from "react";
import axios from "axios";
import { Card, Input, Button, Typography } from "@material-tailwind/react";


// eslint-disable-next-line react/prop-types
export function SimpleRegistrationFormSignIn({ setIsSignup }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5001/api/auth/login", {
        email,
        password,
      });

      const { token } = response.data;

      // localStorage.setItem("token", token);
      sessionStorage.setItem("token", token);

      window.location.href = "/home";
    } catch (err) {
      alert(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <Card
      className="text-white w-full max-w-md mx-auto"
      color="transparent"
      shadow={false}
    >
      <Typography className="w-24" variant="h4">
        Sign In
      </Typography>
      <Typography className="mt-1 w-25 font-normal">
        Welcome Back, Enter Details to Login.
      </Typography>

      <form
        className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
        onSubmit={handleSignIn}
      >
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" className="-mb-3">
            Your Email
          </Typography>
          <Input
            size="lg"
            placeholder="name@mail.com"
            className="!border-white focus:!border-white text-white"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Typography variant="h6" className="-mb-3">
            Password
          </Typography>
          <Input
            type="password"
            size="lg"
            placeholder="password"
            className="!border-white focus:!border-white text-white"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button className="mt-6" type="submit" fullWidth>
          Sign in
        </Button>

        <Typography className="mt-4 text-center font-normal">
          New To This Site?{" "}
          <a
            href="#"
            className="font-medium cursor-pointer text-blue-gray-500"
            onClick={() => setIsSignup(true)}
          >
            Sign Up
          </a>
        </Typography>
      </form>
    </Card>
  );
}
