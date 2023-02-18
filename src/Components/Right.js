import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios'
// import { objectdata } from '../test.js'
// import objectdata from '../test.txt'


// const options = {
//   method: 'GET',
//   url: 'https://esportapi1.p.rapidapi.com/api/esport/matches/18/2/2023',
//   headers: {
//     'X-RapidAPI-Key': '794bdf6fd2mshfdefe85d9c592e0p1293d9jsnf25ae765086e',
//     'X-RapidAPI-Host': 'esportapi1.p.rapidapi.com'
//   }
// };



function Right() {
  const [dotaMatches, setDotaMatches] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.request('http://localhost:3000/file.txt');
        // console.log(response.data.events);
        const dotaMatches = response.data.events.filter((game) => {
          return game.tournament.category.flag === 'dota-2';
        });

        // setDotaMatches(dotaMatches);
        // console.log(dotaMatches);

        dotaMatches.sort((a, b) => {
          return a.startTimestamp - b.startTimestamp;
        });
        setDotaMatches(dotaMatches);
        console.log(dotaMatches); 

        const timestamp = new Date().getTime();
        console.log(timestamp);

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
    <div>
      {dotaMatches.map((game) => (
        <div key={game.customId}>{game.eventType}</div>
      ))}
    </div>
  );
}

export default Right;