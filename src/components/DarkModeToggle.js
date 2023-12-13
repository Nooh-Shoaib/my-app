import React from 'react';
import { useTheme } from './ThemeContext';

const DarkModeToggle = () => {
        const { isDarkMode, toggleDarkMode } = useTheme();

        const toggleDarkModeHandler = () => {
                document.body.classList.toggle('dark-mode', !isDarkMode);
                toggleDarkMode();
        };

        return (
                <button onClick={toggleDarkModeHandler} className='bg-black text-white px-2 mx-4 my-3 py-1 rounded'>
                        {isDarkMode ? <i className="fa-solid fa-sun"></i> : <i className="fa-solid fa-moon"></i>}
                </button>
        );
};

export default DarkModeToggle;
