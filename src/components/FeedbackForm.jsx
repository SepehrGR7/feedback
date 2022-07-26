import { useState, useEffect, useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'
import Card from './shared/Card'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'

const FeedbackForm = () => {
  const [text, setText] = useState('')
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState('')

  const {
    feedbackEdit,
    addFeedback,
    updateFeedback,
    rating,
    updateRating,
    clearRating
  } = useContext(FeedbackContext)

  useEffect(() => {
    if (feedbackEdit.edit) {
      setBtnDisabled(false)
      setText(feedbackEdit.item.text)
      updateRating(feedbackEdit.item.rating)
    }
    // eslint-disable-next-line
  }, [feedbackEdit])

  const handleTextChange = e => {
    if (text === '') {
      setBtnDisabled(true)
      setMessage(null)
    } else if (text && text.trim().length <= 10) {
      setBtnDisabled(true)
      setMessage('Review must be at least 10 characters')
    } else {
      setBtnDisabled(false)
      setMessage(null)
    }
    setText(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()

    if (text.trim().length >= 10) {
      const newFeedback = {
        text,
        rating
      }

      if (feedbackEdit.edit) {
        updateFeedback(feedbackEdit.item.id, newFeedback)
        clearRating()
      } else {
        addFeedback(newFeedback)
        clearRating()
      }
    }

    setText('')
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service?</h2>
        <RatingSelect />
        <div className='input-group'>
          <input
            type='text'
            value={text}
            placeholder='Write a review...'
            onChange={handleTextChange}
          />
          <Button isDisabled={btnDisabled} type='submit'>
            Send
          </Button>
        </div>
        {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  )
}
export default FeedbackForm
