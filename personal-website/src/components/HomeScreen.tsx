import React, { useEffect } from 'react';
import wii_homescreen from "../assets/audio/wii_home_startup.mp3";


const HomeScreen: React.FC = () => {
    const homescreen_delay = 2000; 
    useEffect(()=> {
        new Audio (wii_homescreen).play()
    })
  return (
    <div className="min-h-screen bg-gray-100 text-black">
      <div className="grid grid-cols-5 gap-4 p-4">
        <div className="bg-gray-300 p-4 rounded"></div>
        <div className="bg-blue-500 text-white p-4 rounded">the homebrew channel</div>
        <div className="bg-gray-300 p-4 rounded"></div>
        <div className="bg-gray-300 p-4 rounded"></div>
        <div className="bg-gray-300 p-4 rounded"></div>
        {[...Array(10)].map((_, i) => (
          <div key={i} className="bg-gray-300 p-4 rounded"></div>
        ))}
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-gray-200 p-2 flex justify-between">
        <span>Wii Menu</span>
        <span>Sat 19/09</span>
      </div>
    </div>
  );
};

export default HomeScreen;