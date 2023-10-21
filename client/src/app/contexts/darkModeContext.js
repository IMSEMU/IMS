"use client"; 
// // DarkModeContext.js
// import React, { createContext, useContext, useEffect, useState } from 'react';

// const DarkModeContext = createContext();

// export const DarkModeProvider = ({ children }) => {
//   const [darkMode, setDarkMode] = useState(false);

//   useEffect(() => {
//     // Load dark mode preference from local storage
//     const savedMode = localStorage.getItem('darkMode') === 'true';
//     setDarkMode(savedMode);
//   }, []);

//   useEffect(() => {
//     // Apply dark mode to the whole document
//     if (darkMode) {
//       document.documentElement.classList.add('dark');
//     } else {
//       document.documentElement.classList.remove('dark');
//     }
//     // Update the preference in local storage
//     localStorage.setItem('darkMode', darkMode);
//   }, [darkMode]);

//   return (
//     <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
//       {children}
//     </DarkModeContext.Provider>
//   );
// };

// export const useDarkMode = () => {
//   const context = useContext(DarkModeContext);
//   if (context === undefined) {
//     throw new Error('useDarkMode must be used within a DarkModeProvider');
//   }
//   return context;
// };


import React, { createContext, useState, useEffect, useContext } from 'react';

const DarkModeContext = createContext();

export function useDarkMode() {
  return useContext(DarkModeContext);
}

export function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  // Effect to set the initial dark mode state
  useEffect(() => {
    // Check if the user has a preference stored in local storage
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark' || (!storedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setDarkMode(true);
    }
  }, []);

  // Effect to update the HTML element's dark class
  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    // Store the user's preference in local storage
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  const contextValue = {
    darkMode,
    toggleDarkMode,
  };

  return (
    <DarkModeContext.Provider value={contextValue}>
      {children}
    </DarkModeContext.Provider>
  );
}
