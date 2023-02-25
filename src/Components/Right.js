import React from 'react'
import { useEffect, useState } from 'react';
// import axios from 'axios'




const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '794bdf6fd2mshfdefe85d9c592e0p1293d9jsnf25ae765086e',
		'X-RapidAPI-Host': 'esportapi1.p.rapidapi.com'
	}
};


const local_url = 'http://localhost:3000/file.txt'

function Right() {
  const [dotaMatches, setDotaMatches] = useState([]);
  const [currentTime, setCurrentTime] = useState(new Date());
  let intervalId;

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await axios.request(options);

        const response = await fetch('https://esportapi1.p.rapidapi.com/api/esport/matches/23/2/2023', options)
        const data = await response.json(); 

        const intervalId = setInterval(() => {
          setCurrentTime(new Date())}, 5000)

        const dotaMatches = data.events.filter((game) => {
          return game.tournament.category.flag === 'dota-2';
        });

        dotaMatches.sort((a, b) => {
          return a.startTimestamp - b.startTimestamp;
        });
        setDotaMatches(dotaMatches);
        console.log(dotaMatches); 

        // const timestamp = new Date().getTime();
        // console.log(timestamp);

      } catch (error) {
        console.error(`There is an error: ${error}`);
      }
    };

    fetchData();

    return () => clearInterval(intervalId);
  }, []);


  return (
    <div>
      {dotaMatches.map((game) => (
        <div key={game.customId} className='flex justify-start items-center border border-gray-700 '>
          <div className='flex max-w-xs items-center'>logo</div>
          <div className='flex justify-center flex-grow flex flex-col '>
            <div>{game.homeTeam.name} vs {game.awayTeam.name}</div>
            <div>{game.tournament.uniqueTournament.name} {game.status.description}</div>
          </div>
          <div className='flex'>
            {Math.floor((game.startTimestamp-(new Date().getTime()/1000))/3600) >= 1 && <p>{Math.floor((game.startTimestamp-(new Date().getTime()/1000))/3600)} H </p>} <p>{Math.round(((game.startTimestamp-(new Date().getTime()/1000))%3600)*(60/3600))} M</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Right;