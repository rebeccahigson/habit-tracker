import { useState } from 'react'
import { Statistics } from "./components/Statistics"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <section>
      <Statistics />
    </section>
  )
}

export default App
