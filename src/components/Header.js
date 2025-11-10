import React from 'react'
import logo from "../assets/Netflix_Logo_RGB.png"

const Header = () => {
  return (
    <div className="absolute z-10 bg-gradient-to-b from-black">
    <img  className = "mx-32 h-20" src = {logo} alt = "logo"></img>
    </div>
  );
};

export default Header;