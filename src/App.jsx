import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home'
import PrivacyPolicy from './PrivacyPolicy'
import './App.css'

function App() {
  return (
    <Router basename="/website/">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </Router>
  )
}

export default App
