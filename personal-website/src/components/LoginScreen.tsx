import React from 'react';


interface LoginScreenProps {
  onLogin: () => void;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ onLogin }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-4">
      <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center">
        <span className="text-yellow-300 mr-2">⚠️</span>
        WARNING-HEALTH AND SAFETY
      </h1>
      <p className="text-3xl md:text-4xl text-center mb-8 leading-tight">
        BEFORE PLAYING, READ YOUR OPERATIONS<br />
        MANUAL FOR IMPORTANT INFORMATION<br />
        ABOUT YOUR HEALTH AND SAFETY.
      </p>
      <p className="text-2xl md:text-3xl text-center mb-8">
        Also online at<br />
        <a href="https://www.nintendo.com/healthsafety/" className="text-blue-400 hover:underline">
          www.nintendo.com/healthsafety/
        </a>
      </p>
      <p className="text-2xl md:text-4xl animate-pulse">Press A to continue.</p>
    </div>
  );
};

export default LoginScreen;