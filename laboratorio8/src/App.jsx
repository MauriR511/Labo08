import { BrowserRouter, Routes, Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './assets/components/header/Header'
import Card from './assets/components/card/card'
import LoadingOverlay from './assets/components/loading/loading'
import Range from './assets/pages/range/RangePage'
import Random from './assets/pages/random/Random'
import Date from './assets/pages/date/Date'
import Description from './assets/pages/description/Description'
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Range />} />
          <Route path="/random" element={<Random />} />
          <Route path="/date" element={<Date />} />
          <Route path="/description" element={<Description />} />
          <Route path="/description/:id" element={<Description />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
