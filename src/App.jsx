import { Routes, Route } from 'react-router-dom'

import HomePage from './pages/HomePage.jsx'
import SessionPage from './pages/SessionPage.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/sessions/:id" element={<SessionPage />} />
    </Routes>
  )
}

export default App
