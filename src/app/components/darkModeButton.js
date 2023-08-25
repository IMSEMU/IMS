// components/DarkModeToggle.js
import { useDarkMode } from "@/app/contexts/darkModeContext";

export const DarkModeButton = () => {
  const { darkMode, setDarkMode } = useDarkMode();
  
  return (
    <button onClick={() => setDarkMode(prevMode => !prevMode)}>
      {darkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
};

