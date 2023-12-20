import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
        const [isDarkMode, setIsDarkMode] = useState(false);

        const toggleDarkMode = () => {
                setIsDarkMode((prevMode) => !prevMode);
        };

        return (
                <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
                        {children}
                </ThemeContext.Provider>
        );
};

export const useTheme = () => {
        return useContext(ThemeContext);
};


// let advantages = [
//         {
//                 imageUrl:
//                         "https://s3.amazonaws.com/sireprinting.com/images/perks/design-min.webp",
//                 label: "Eco-Friendly",
//         },
//         {
//                 imageUrl:
//                         "https://s3.amazonaws.com/sireprinting.com/images/perks/eco-min.webp",
//                 label: "Eco-Friendly",
//         },
//         {
//                 imageUrl:
//                         "https://s3.amazonaws.com/sireprinting.com/images/perks/ink-min.webp",
//                 label: "Environmental Friendly Ink",
//         },
//         {
//                 imageUrl:
//                         "https://s3.amazonaws.com/sireprinting.com/images/perks/short-run-min.webp",
//                 label: "Short Run",
//         },
//         {
//                 imageUrl:
//                         "https://s3.amazonaws.com/sireprinting.com/images/perks/size-min.webp",
//                 label: "Custom Size & Style",
//         },
//         {
//                 imageUrl:
//                         "https://s3.amazonaws.com/sireprinting.com/images/perks/price-min.webp",
//                 label: "Competitive Price",
//         },
//         {
//                 imageUrl:
//                         "https://s3.amazonaws.com/sireprinting.com/images/perks/time-min.webp",
//                 label: "Fast Turnaround",
//         },
//         {
//                 imageUrl:
//                         "https://s3.amazonaws.com/sireprinting.com/images/perks/delivery-min.webp",
//                 label: "Free Delivery",
//         },
// ];
