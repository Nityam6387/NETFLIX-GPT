import React, { useRef } from 'react'
import lang from '../utils/languageConstant';
import { useSelector } from 'react-redux';
import openai from '../utils/openai.js';

const GptSearchBar = () => {

  const langKey = useSelector((store) => store?.config?.lang);
  const searchText = useRef(null);

  // const handleGptSearchClick = async () => {
  //         console.log(searchText.current.value);
  //         //Make an API call to get API for movie results

  //         const gptQuery = "Act as a Movie Recommendation System And Sugget some movies for the query :" + searchText.current.value + ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar,Sholey,War-2,Saiyaara,Masti-4";

  //         const gptResults = await openai.chat.completions.create({
  //           model: 'gpt-3.5-turbo' ,
  //           messages: [
  //                       { role: 'developer', content: 'Talk like a pirate.' },
  //                       { role: 'user', content: gptQuery },
  //                     ],
  //                                                                 });

  //            console.log(gptResults.choices[0].message.content);                                                     
  //                                           };


// const handleGptSearchClick = async () => {
//   try {
//     const response = await fetch("http://localhost:5000/api/test");
//     const data = await response.json();
//     console.log("Test API Result:", data);
//   } catch (err) {
//     console.error("Fetch Error:", err);
//   }
// };



  return (
    <div className="flex justify-center px-4 pt-28 md:pt-36">
      <form
        className="grid w-full max-w-3xl grid-cols-1 gap-3 rounded-lg bg-black/70 p-4 backdrop-blur md:grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          className="col-span-1 rounded-md border border-white/20 bg-black/60 p-4 text-sm text-white placeholder-gray-300 md:col-span-9 md:text-base"
          type="text"
          placeholder={lang[langKey]?.gptSearchPlaceholder}
        ></input>
        <button className="col-span-1 rounded-md bg-red-700 px-4 py-3 text-sm font-semibold text-white transition hover:bg-red-600 md:col-span-3 md:text-base">
          {lang[langKey]?.search}
        </button>
      </form>
    </div>
  );
}

export default GptSearchBar;