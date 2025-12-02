import { useEffect } from 'react'
import logo from "../assets/Netflix_Logo_RGB.png"
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase.js";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addUser, removeUser } from '../utils/userSlice.js';
import { toggleGptSearchView } from '../utils/gptSlice.js';
import { SUPPORTED_LANGUAGE } from '../utils/constant.js';
import { changeLanguage } from '../utils/configSlice.js';
// import { removeUser } from '../utils/userSlice';


const Header = () => {

  const user = useSelector((store)=> store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const showGptSearch = useSelector((store) => store?.gpt?.showGptSearch);

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


  const handleGptSearchClick = () => {
      dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };


  return (
    <div className="absolute z-10 w-full bg-gradient-to-b from-black/90 via-black/40 to-transparent">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-3 py-3 sm:gap-6 sm:px-8 sm:py-4">
        <img className="h-8 w-auto max-w-[90px] sm:h-10 sm:max-w-[120px] lg:h-16 lg:max-w-none" src={logo} alt="logo" />
        {user && (
          <div className="ml-auto flex flex-nowrap items-center gap-2">
            {showGptSearch && (
              <select
                className="rounded-md bg-gray-900/80 px-3 py-2 text-sm text-white outline-none sm:text-base"
                onChange={handleLanguageChange}
              >
                {SUPPORTED_LANGUAGE.map((lang) => (
                  <option key={lang?.identifier} value={lang?.identifier}>
                    {lang?.name}
                  </option>
                ))}
              </select>
            )}
            <button
              onClick={handleGptSearchClick}
              className="rounded-md bg-purple-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-purple-600 sm:text-base"
            >
              {showGptSearch ? "Home" : "GPT Search"}
            </button>
            <button
              onClick={handleSignOut}
              className="rounded-md border border-white/60 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10 sm:text-base"
            >
              Sign Out
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;