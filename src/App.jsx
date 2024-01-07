import { useState } from 'react'
import '../styles/globals.css'
import AnimationControls from './components/AnimationControls'
import BasicOfMotion from './components/BasicOfMotion'
import Gestures from './components/Gestures'
import ScrollAnimations from './components/ScrollAnimation'
import ViewBasedAnimations from './components/viewBasedAnimations'

function App() {

  return (
    <>
      <BasicOfMotion />
      <Gestures />
      <AnimationControls />
      <ViewBasedAnimations />
      <ScrollAnimations />
    </>
  )
}

export default App
