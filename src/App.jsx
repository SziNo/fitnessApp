import './App.css'
import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Box } from '@mui/material'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
const Home = lazy(() => import('./pages/Home'))
const ExerciseDetail = lazy(() => import('./pages/ExerciseDetail'))

const App = () => {
  return (
    <div className='App'>
      <Box width='400px' sx={{ width: { xl: '1488' } }} m='auto'>
        <Navbar />
        <Suspense fallback={null}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/exercise/:id' element={<ExerciseDetail />} />
          </Routes>
        </Suspense>
        <Footer />
      </Box>
    </div>
  )
}

export default App
