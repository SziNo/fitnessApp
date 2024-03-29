import { useState, useEffect, lazy, Suspense } from 'react'
import Pagination from '@mui/material/Pagination'
import { Box, Stack, Typography } from '@mui/material'
import { exerciseOptions, fetchData } from '../utils/fetchData'

const ExerciseCard = lazy(() => import('./ExerciseCard'))

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const exercisesPerPage = 9

  const indexOfLastExercise = currentPage * exercisesPerPage
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage
  const currentExercises = exercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  )

  const paginate = (e, value) => {
    setCurrentPage(value)
    window.scrollTo({ top: 1600, behavior: 'smooth' })
  }

  useEffect(() => {
    const fetchExercisesData = async () => {
      const url =
        bodyPart === 'all'
          ? 'https://exercisedb.p.rapidapi.com/exercises'
          : `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`

      const exercisesData = await fetchData(url, exerciseOptions)
      setExercises(exercisesData)
    }

    fetchExercisesData()
  }, [bodyPart, setExercises])

  return (
    <Box id='exercises' sx={{ mt: { lg: '110px' } }} mt='50px' p='20px'>
      <Typography variant='h3' mb='46px'>
        Showing Results
      </Typography>
      <Stack
        direction='row'
        sx={{ gap: { lg: '110px', xs: '50px' } }}
        flexWrap='wrap'
        justifyContent='center'
      >
        <Suspense fallback={null}>
          {currentExercises.map((exercise) => (
            <ExerciseCard key={exercise.id} exercise={exercise} />
          ))}
        </Suspense>
      </Stack>
      <Stack mt='100px' alignItems='center'>
        {exercises.length > 9 && (
          <Pagination
            color='standard'
            shape='rounded'
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size='large'
          />
        )}
      </Stack>
    </Box>
  )
}

export default Exercises
