import { createContext, useContext, useState, useEffect } from 'react';

const StarsContext = createContext();

const StarsProvider = ({ children }) => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const fetchStars = async () => {
      try {
        const response = await fetch('path/to/your/stars.json');
        const data = await response.json();
        setStars(data.stars);
      } catch (error) {
        console.error('Error fetching star data:', error.message);
      }
    };

    fetchStars();
  }, []);

  return (
    <StarsContext.Provider value={stars}>{children}</StarsContext.Provider>
  );
};

const useStars = () => {
  const context = useContext(StarsContext);
  if (!context) {
    throw new Error('useStars must be used within a StarsProvider');
  }
  return context;
};

export { StarsProvider, useStars };
