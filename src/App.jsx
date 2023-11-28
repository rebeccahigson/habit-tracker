import { useState } from 'react'
import { Statistics } from "./components/Statistics"
import { LottieFood } from './components/LottieAnimations/LottieFood'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <section>
      <Statistics />
      <LottieFood />
    </section>
  )
}

export default App
