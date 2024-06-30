import React, { useState, useEffect } from 'react';
import LoginScreen from './components/LoginScreen';
import HomeScreen from './components/HomeScreen';

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  const handleLogin = () => {
    setFadeOut(true);
    setTimeout(() => setIsLoggedIn(true), 500);
  };

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key.toLowerCase() === 'a' && !isLoggedIn) {
        handleLogin();
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [isLoggedIn]);

  return (
    <div className="relative">
      <div
        className={`absolute inset-0 transition-opacity duration-500 ${
          fadeOut ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <LoginScreen onLogin={handleLogin} />
      </div>
      <div
        className={`absolute inset-0 transition-opacity duration-500 ${
          isLoggedIn ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <HomeScreen />
      </div>
    </div>
  );
};

export default App;