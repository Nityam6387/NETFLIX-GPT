import React from 'react'
import GptSearchBar from './GptSearchBar.js';
import GptMovieSuggestions from './GptMovieSuggetions.js'

const GptSearch = () => {
  return (
    <div className="relative min-h-screen text-white">
      <div className="absolute inset-0 -z-10">
        <img
          className="h-full w-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/a92a67ee-cd07-46a8-8354-c431a96a97b0/web/IN-en-20251103-TRIFECTA-perspective_8a65e995-9926-414c-83c5-f7cc9af10871_small.jpg"
          alt="background"
        ></img>
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <div className="relative pt-24 space-y-8 pb-16 sm:pt-28">
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </div>
  );
};

export default GptSearch;