import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'

const FeedbackStats = () => {
  const { feedback } = useContext(FeedbackContext)

  let avg = feedback.reduce((acc, cur) => acc + cur.rating, 0) / feedback.length
  avg = avg.toFixed(1).replace(/[.,]0$/, '')

  return (
    <div className='feedback-stats'>
      <h3>{feedback.length} Reviews</h3>
      <h3>Average Rating: {isNaN(avg) ? 0 : avg}</h3>
    </div>
  )
}

export default FeedbackStats
