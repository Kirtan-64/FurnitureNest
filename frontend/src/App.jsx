import { useState } from 'react'
import HomePage from './pages/HomePage'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <HomePage />
    </>
  )
}

export default App
