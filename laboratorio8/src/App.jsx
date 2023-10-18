import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './assets/components/header/header'
import Range from './assets/components/range/range'
import Random from './assets/components/random/random'
import Date from './assets/components/date/date'
import Description from './assets/components/description/description'
import Card from './assets/components/card/card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Range  />
      <Card />
    </>
  )
}

export default App
