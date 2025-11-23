import React from "react";
import Header from "./Header";
import { useState , useRef } from "react";
import { checkValidData } from "../utils/validation";
import { createUserWithEmailAndPassword , signInWithEmailAndPassword  , updateProfile} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

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
  <div className="relative">

      <Header />

      <div className= "absolute z-0">
        <img className = "" src="https://assets.nflxext.com/ffe/siteui/vlv3/a92a67ee-cd07-46a8-8354-c431a96a97b0/web/IN-en-20251103-TRIFECTA-perspective_8a65e995-9926-414c-83c5-f7cc9af10871_small.jpg" alt = "bg"></img>
      </div>

      <form className="absolute p-12 my-36 mx-auto left-0 right-0 w-3/12 bg-black text-white bg-opacity-60 rounded-md" onSubmit={(e) => e.preventDefault()}>
      <h1 className="font-bold text-3xl py-4"> {isSignIn ? "Sign In" : "Sign Up"} </h1>
        { !isSignIn && <input ref={name} className="p-4 my-4 w-full rounded-md bg-black bg-opacity-60" type="text" placeholder="Full Name"></input>  }
        {/* { !isSignIn && <input className="p-4 my-4 w-full rounded-md bg-black bg-opacity-60" type="tel" placeholder="Mobile No."></input>  } */}
        <input ref={email} className="p-4 my-4 w-full rounded-md bg-black bg-opacity-60" type="text" placeholder="Email"></input>
        <input ref={password} className="p-4 my-4 w-full rounded-md  bg-black bg-opacity-60" type="password" placeholder="Password"></input>
        <button className="bg-red-800 rounded-md p-4 my-6 w-full" onClick={handleButtonClick}> {isSignIn ? "Sign In" : "Sign Up"} </button>
        <p className="text-red-800 font-bold font-2xl my-2">{errorMessage}</p>
        <p className="cursor-pointer" onClick = {toggleSignIn}> { isSignIn ?  "New to Netflix?Sign up now." : "Already Registered! Sign in now." } </p>
      </form>
    </div>
    );
};

export default Login;
