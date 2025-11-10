import React from "react";
import Header from "./Header";
import { useState } from "react";

const Login = () => {

 const [isSignIn , setIsSignIn] = useState(true);

 const toggleSignIn = () => {
      setIsSignIn(!isSignIn);
 }

  return (
  <div className="relative">

      <Header />

      <div className= "absolute z-0">
        <img className = "" src="https://assets.nflxext.com/ffe/siteui/vlv3/a92a67ee-cd07-46a8-8354-c431a96a97b0/web/IN-en-20251103-TRIFECTA-perspective_8a65e995-9926-414c-83c5-f7cc9af10871_small.jpg" alt = "bg"></img>
      </div>

      <form className="absolute p-12 my-36 mx-auto left-0 right-0 w-3/12 bg-black text-white bg-opacity-60 rounded-md">
      <h1 className="font-bold text-3xl py-4"> {isSignIn ? "Sign In" : "Sign Up"} </h1>
        { !isSignIn && <input className="p-4 my-4 w-full rounded-md bg-black bg-opacity-60" type="text" placeholder="Full Name"></input>  }
        { !isSignIn && <input className="p-4 my-4 w-full rounded-md bg-black bg-opacity-60" type="tel" placeholder="Mobile No."></input>  }
        <input className="p-4 my-4 w-full rounded-md bg-black bg-opacity-60" type="text" placeholder="Email"></input>
        <input  className="p-4 my-4 w-full rounded-md  bg-black bg-opacity-60" type="password" placeholder="Password"></input>
        <button className="bg-red-800 rounded-md p-4 my-6 w-full"> {isSignIn ? "Sign In" : "Sign Up"} </button>
        <p className="cursor-pointer" onClick = {toggleSignIn}> { isSignIn ?  "New to Netflix?Sign up now." : "Already Registered! Sign in now." } </p>
      </form>
    </div>
    );
};

export default Login;
