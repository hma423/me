import React, { useEffect } from 'react';
import wii_homescreen from "../assets/audio/wii_home_startup.mp3";
import "./loginscreen.css";

const HomeScreen: React.FC = () => {
    const homescreen_delay = 2000; 
    useEffect(()=> {
        new Audio (wii_homescreen).play()
    })
  return (
    <div className="justify-center text-black">
      <div className="wii-menu grid grid-cols-4 grid-rows-4 gap-3 pt-14">
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
      <div className="absolute bottom-0 left-0 right-0 bg-gray-200 p-2 flex justify-between z">
        <span>Wii Menu</span>
        <span>Sat 19/09</span>
      </div>
    </div>
  );
};

export default HomeScreen;