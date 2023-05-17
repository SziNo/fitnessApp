import { useState, lazy, Suspense } from 'react'
import { Box } from '@mui/material'

const HeroBanner = lazy(() => import('../components/HeroBanner'))
const SearchExercises = lazy(() => import('../components/SearchExercises'))
const Exercises = lazy(() => import('../components/Exercises'))

const Home = () => {
  const [exercises, setExercises] = useState([])
  const [bodyPart, setBodyPart] = useState('all')

  return (
    <Box>
      <Suspense fallback={null}>
        <HeroBanner />
        <SearchExercises
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
          setExercises={setExercises}
        />
        <Exercises
          exercises={exercises}
          setExercises={setExercises}
          bodyPart={bodyPart}
        />
      </Suspense>
    </Box>
  )
}

export default Home
