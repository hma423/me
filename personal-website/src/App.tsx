import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { animated } from '@react-spring/web'
import Drag from "./components/Drag.tsx";
import "./components/Drag.css";

function App() {

  return (
    <>
    <div>
      <h1 className="text-3xl font-bold ">
        Fill in the _____
      </h1>
      <h1 className = "text-3xl ">
        My name is Henry Ma
      </h1>
    </div>
    <Drag description = "drag me around!"/>
    <Drag description = "welcome to my website"/>

    </>
  )
}

export default App
