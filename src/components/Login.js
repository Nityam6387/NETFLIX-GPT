import React from "react";
import Header from "./Header.js";
import { useState , useRef } from "react";
import { checkValidData } from "../utils/validation.js";
import { createUserWithEmailAndPassword , signInWithEmailAndPassword  , updateProfile} from "firebase/auth";
import { auth } from "../utils/firebase.js";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice.js";

const Login = () => {

 const [isSignIn , setIsSignIn] = useState(true);
 const [errorMessage , setErrorMessage] = useState(null);
 const name = useRef(null);
 const email = useRef(null);
 const password = useRef(null);
//  const navigate = useNavigate();
 const dispatch = useDispatch();
 

 const handleButtonClick = () => {  
  //validating the form
    
      //  console.log(email.current.value);
      //  console.log(password.current.value);
 
       const message = checkValidData(email.current.value,password.current.value);
       setErrorMessage(message);

       if(message) return;  //it means the email and password is not valid


       // Sign In/Sign Up logic

       if(!isSignIn){
    //Sign Up Logic

   createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed up 

    const user = userCredential.user;
    console.log("signed up user is:" , user);
    // ...

    updateProfile(user, {
   displayName: name.current.value ,
   photoURL: "https://example.com/jane-q-user/profile.jpg"
}).then(() => {
  // Profile updated!
  // ...

   const {uid, email , displayName} = auth.currentUser;
      // ...
      dispatch(addUser(
      {   uid: uid ,
          email: email,
          displayName: displayName
      }));

  // navigate("/browse");

}).catch((error) => {
  // An error occurred
  // ...
  setErrorMessage(error.message)
});
  
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("signed up error" , errorCode + "-" + errorMessage);
    setErrorMessage( errorCode + "-" + errorMessage);
    // ..
  });
       } 
       else{
   //Sign In Logic

    signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log("signed in user is:" , user);
    // navigate("/browse");



    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("signed in error is:" , errorCode + "-" + errorMessage);
    setErrorMessage(errorCode + "-" + errorMessage);
  });

       }


       
 }

 const toggleSignIn = () => {
      setIsSignIn(!isSignIn);
 }

  return (
    <div className="relative min-h-screen text-white">
      <Header />

      <div className="absolute inset-0 -z-10">
        <img
          className="h-full w-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/a92a67ee-cd07-46a8-8354-c431a96a97b0/web/IN-en-20251103-TRIFECTA-perspective_8a65e995-9926-414c-83c5-f7cc9af10871_small.jpg"
          alt="background"
        ></img>
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative flex min-h-screen items-center justify-center px-4 py-20 sm:px-6 lg:px-8">
        <form
          className="w-full max-w-md rounded-lg bg-black/70 p-6 backdrop-blur md:max-w-lg md:p-10"
          onSubmit={(e) => e.preventDefault()}
        >
          <h1 className="py-4 text-2xl font-bold sm:text-3xl">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignIn && (
            <input
              ref={name}
              className="my-3 w-full rounded-md border border-white/20 bg-black/60 p-4"
              type="text"
              placeholder="Full Name"
            ></input>
          )}
          <input
            ref={email}
            className="my-3 w-full rounded-md border border-white/20 bg-black/60 p-4"
            type="text"
            placeholder="Email"
          ></input>
          <input
            ref={password}
            className="my-3 w-full rounded-md border border-white/20 bg-black/60 p-4"
            type="password"
            placeholder="Password"
          ></input>
          <button
            className="my-6 w-full rounded-md bg-red-700 py-3 font-semibold transition hover:bg-red-600"
            onClick={handleButtonClick}
          >
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>
          <p className="my-2 text-sm font-semibold text-red-400">{errorMessage}</p>
          <p className="cursor-pointer text-center text-sm text-gray-300 hover:underline" onClick={toggleSignIn}>
            {isSignIn ? "New to Netflix? Sign up now." : "Already Registered! Sign in now."}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
