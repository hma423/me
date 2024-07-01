import React, { useEffect } from 'react';
import wii_homescreen from "../assets/audio/wii_home_startup.mp3";
import "./loginscreen.css";
import "./homescreen.css";

const HomeScreen: React.FC = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
        new Audio(wii_homescreen).play();
    }, 900);

    // Cleanup function to clear the timer if the component unmounts
    return () => clearTimeout(timer);
}, []);
  return (
    <div className = "min-h-screen homescreen">
    <div className=" justify-center text-black">
      <div className="wii-menu grid grid-cols-4 grid-rows-4 gap-3 pt-14 -mb-40 ">
        <div className="bg-gray-300 p-4 rounded-2xl"></div>
        <div className="bg-blue-500 text-white p-4 rounded-2xl">the homebrew channel</div>
        <div className="bg-gray-300 p-4 rounded-2xl"></div>
        <div className="bg-gray-300 p-4 rounded-2xl"></div>
        <div className="bg-gray-300 p-4 rounded-2xl"></div>
        <div className="bg-gray-300 p-4 rounded-2xl"></div>
        <div className="bg-gray-300 p-4 rounded-2xl"></div>
        <div className="bg-gray-300 p-4 rounded-2xl"></div>
        <div className="bg-gray-300 p-4 rounded-2xl"></div>
        <div className="bg-gray-300 p-4 rounded-2xl"></div>
        <div className="bg-gray-300 p-4 rounded-2xl"></div>
        <div className="bg-gray-300 p-4 rounded-2xl"></div>
      </div>
      <div className="flex justify-center">
        <h1>Wii Menu</h1>
      </div>
    </div>
    </div>
  );
};

export default HomeScreen;