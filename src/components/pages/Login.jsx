import { useState } from "react";
import { SimpleRegistrationForm } from "../SignUp";
import { SimpleRegistrationFormSignIn } from "../SignIn";
import { CoverText } from "../LoginText";
import { useNavigate } from 'react-router-dom';

export function Login() {
  const [isSignup, setIsSignup] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem('isLoggedIn', 'true');
    navigate('/home');
  };

  return (
    <div className="h-[120vh] w-full bg-gradient-to-b from-black to-blue-gray-900 flex flex-col justify-around items-center">
      <CoverText />
      <div className="bg-gradient-to-b from-blue-gray-900 to-black p-11 rounded-lg">
        {isSignup ? (
          <SimpleRegistrationForm setIsSignup={setIsSignup} />
        ) : (
          <SimpleRegistrationFormSignIn setIsSignup={setIsSignup} />
        )}
      </div>
    </div>
  );
}
