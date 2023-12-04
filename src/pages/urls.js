import React, { useState, useEffect } from 'react';

const URL = 'https://my-json-server.typicode.com/Nooh-Shoaib';

const Urls = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${URL}/your-endpoint`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect will run once when the component mounts

  return (
    <div>
      <h2>Data from JSON Server in Urls Component:</h2>
      <ul>
        {data.map(item => (
          <li key={item.id}>{/* Render your data properties here */}</li>
        ))}
      </ul>
    </div>
  );
};

export default Urls;

