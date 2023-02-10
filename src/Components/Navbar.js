import React from "react";
import logo from '../assets/logo192.png'


const Navbar = () => {

  return (
    <div className="flex text-white bg-gray-800 max-w-[1240px] justify-between max-h-20 mx-auto">
      <div className="flex-shrink-0">
        <img className="max-h-20 p-3"  src={logo} alt="okayy" />
      </div>
      <div className="flex flex-col justify-center flex-grow">
        <div>
          <ul className="flex justify-start space-x-4">
            <li className="px-2">All Esports</li>
            <li className="px-2">Dota 2</li>
            <li className="px-2">CS:GO</li>
            <li className="px-2">League of Legends</li>
            <li className="px-2">Valorant</li>
            <li className="px-2">Mobile Legends</li>
            <li className="px-2">Brawhalla</li>
          </ul>
        </div>
        <div>
          <ul className="flex space-x-4">
            <li className="px-2">News</li>
            <li className="px-2">Tournaments</li>
            <li className="px-2">Match Schedules</li>
            <li className="px-2">Statistics</li>
            <li className="px-2">Lounge</li>
          </ul>
        </div>
      </div>
      <div className="flex md:space-x-3 md:p-4 items-center">  
        <button className= "px-2 bg-red-600">Login</button>
        <button className="">Register</button>
      </div>
    </div>
  );
}

export default Navbar;