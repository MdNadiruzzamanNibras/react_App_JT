import  { useState, useEffect } from 'react';
import axios from 'axios';

function SingleShow() {
  const [showData, setShowData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('https://api.tvmaze.com/shows/42181');
        setShowData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      {showData ? (
        <div>
          <h1>{showData.name}</h1>
          <img src={showData.image.original} alt={showData.name} />
          <p>{showData.summary}</p>
         
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default SingleShow;
