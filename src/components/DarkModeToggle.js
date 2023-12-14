import React from 'react';
import { useTheme } from './ThemeContext';

const DarkModeToggle = () => {
        const { isDarkMode, toggleDarkMode } = useTheme();

        const toggleDarkModeHandler = () => {
                document.body.classList.toggle('dark-mode', !isDarkMode);
                toggleDarkMode();
        };

        return (
                <button onClick={toggleDarkModeHandler}>
                        {isDarkMode ? <i class="fa-regular fa-sun bg-white text-black px-3 py-2.5 rounded mx-1"></i> : <i class="fa-regular fa-moon bg-black text-white px-3.5 py-2.5 rounded mx-1"></i>}
                </button>
        );
};

export default DarkModeToggle;
