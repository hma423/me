import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { animated } from '@react-spring/web'
import Drag from "./components/Drag.tsx";
import "./components/Drag.css";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./components/ui/hero-highlight";
"use client";
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

    <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
      >
        With insomnia, nothing&apos;s real. Everything is far away. Everything
        is a{" "}
        <Highlight className="text-black dark:text-white">
          copy, of a copy, of a copy.
        </Highlight>
      </motion.h1>
    </HeroHighlight>
    </>
  )
}

export default App
