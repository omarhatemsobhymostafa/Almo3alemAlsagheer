import React, { useEffect } from 'react'
import HeroSection from '../Components/HeroSection'
import Grades from '../Components/Grades'
import Mains from './../Components/Mains';

export default function Home() {
  
  return (
    <main>
    <HeroSection />
    <Grades />
    <Mains />
    </main>
   
  )
}
