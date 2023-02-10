import React from 'react'
import { useEffect,useState } from 'react';
import axios from 'axios'

// const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://movie-database-alternative.p.rapidapi.com/',
  params: {s: 'Avengers Endgame', r: 'json', page: '1'},
  headers: {
    'X-RapidAPI-Key': '794bdf6fd2mshfdefe85d9c592e0p1293d9jsnf25ae765086e',
    'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com'
  }
};



function Right() {
  const [MatchSchedule, setMatchSchedule] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.request(options);
        setMatchSchedule(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(`Error: ${error}`);
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