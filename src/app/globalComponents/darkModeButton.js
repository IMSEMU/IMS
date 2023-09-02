'use client'
import {RiSunFill, RiMoonFoggyFill} from "react-icons/ri";
import { useDarkMode } from "@/app/contexts/darkModeContext";

export const DarkModeButton = () => {
  const { darkMode, setDarkMode } = useDarkMode();
  
  return (
    <button className={'mx-3 p-2 rounded  text-sm md:text-md  bg-dark_2 dark:bg-white outline-0'} onClick={() => setDarkMode(prevMode => !prevMode)}>
      {
        darkMode ?
            <div className={'text-dark_2'}>
              <RiSunFill />
            </div>
              :
            <div className={'text-yellow'}>
              <RiMoonFoggyFill />
            </div>
      }
    </button>
  );
};

