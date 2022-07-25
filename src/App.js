import { Route, Routes } from 'react-router-dom'
import { FeedbackProvider } from './context/FeedbackContext'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'

const App = () => {
  return (
    <FeedbackProvider>
      <Header title='Feedback App' />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </FeedbackProvider>
  )
}

export default App
