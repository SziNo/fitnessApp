import { BrowserRouter as Router } from 'react-router-dom'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

const root = createRoot(document.getElementById('root'))

root.render(
  <Router>
    <StrictMode>
      <App />
    </StrictMode>
  </Router>
)
