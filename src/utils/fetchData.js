export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
  },
}

export const youtubeOptions = {
  method: 'GET',
  params: { id: 'UCE_M8A5yxnLfW0KghEeajjw' },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
  },
}

export const fetchData = async (url, options) => {
  const cachedData = localStorage.getItem(url)
  if (cachedData) {
    return JSON.parse(cachedData)
  }

  const response = await fetch(url, options)
  if (!response.ok) {
    throw new Error('An error occurred while fetching data')
  }
  const data = await response.json()

  localStorage.setItem(url, JSON.stringify(data))

  return data
}
