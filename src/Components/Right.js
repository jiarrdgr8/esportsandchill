import React from 'react'
import { useEffect } from 'react';
import axios from 'axios'



const options = {
  method: 'GET',
  url: 'https://esportapi1.p.rapidapi.com/api/esport/player/1078255',
  headers: {
    'X-RapidAPI-Key': '794bdf6fd2mshfdefe85d9c592e0p1293d9jsnf25ae765086e',
    'X-RapidAPI-Host': 'esportapi1.p.rapidapi.com'
  }
};



function Right() {

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.request(options);
        console.log(response.data);
      } catch (error) {
        console.error(`There is an error: ${error}`);
      }
    };

    fetchData();

    return () => {
      // cleanup logic goes here
    };
  }, []);

  return (
    <div>Right</div>
  );
}

export default Right;