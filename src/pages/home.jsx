import React, { useState } from 'react'
import Header from '../Components/header/Header'
import Slider from '../Components/slider/Slider'
import Feature from '../Components/feature/Feature'

export default function Home() {

  return (
    <div>
      <Header/>
      <Slider/>
      <Feature/>
    </div>
  )
}
