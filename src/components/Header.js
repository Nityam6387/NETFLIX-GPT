import React, { useEffect } from 'react'
import logo from "../assets/Netflix_Logo_RGB.png"
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import {  useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addUser, removeUser } from '../utils/userSlice';
// import { removeUser } from '../utils/userSlice';


const Header = () => {

  const user = useSelector((store)=> store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignOut = () => {

signOut(auth).then(() => {
  // Sign-out successful.
  // navigate("/");
}).catch((error) => {
  // An error happened.
  // dispatch(removeUser); we use it in body component where we call onAuthStateChanged 
  navigate("/error");
});
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      // const uid = user.uid;
      const {uid, email , displayName , photoURL} = user;
      // ...
      dispatch(addUser(
      {   uid: uid ,
          email: email,
          displayName: displayName,
          photoURL: photoURL,
      }));
      navigate("/browse");
    } else {
      // User is signed out
      // ...
      dispatch(removeUser);
      navigate("/");
    }
  })
  return() =>  unsubscribe();
}
    , [] );

  return (
    <div className="absolute z-10 bg-gradient-to-b from-black w-full flex justify-between">
    <img  className = "mx-32 h-20" src = {logo} alt = "logo"></img>
   { user && (
    <div className="flex ">
      <button onClick = {handleSignOut} className=" text-white font-bold text-lg w-24 h-12 my-2 mx-2 rounded-md">Sign Out</button>
      {/* <img src="https://example.com/jane-q-user/profile.jpg"></img> */}
    </div> )
}
    </div>
  );
};

export default Header;