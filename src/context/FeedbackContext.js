import { createContext, useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'

const FeedbackContext = createContext('FeedbackContext')

export const FeedbackProvider = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const [feedback, setFeedback] = useState([])
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false
  })
  const [rating, setRating] = useState(null)

  useEffect(() => {
    const fetchFeedbacks = async () => {
      const res = await fetch(
        'http://localhost:3001/feedback?_sort=rating&_order=desc'
      )
      const data = await res.json()

      console.log(data)
      setFeedback(data)
      setLoading(false)
    }

    fetchFeedbacks()
  }, [])

  const addFeedback = newFeedback => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])
  }

  const editFeedback = item => {
    setFeedbackEdit({
      item,
      edit: true
    })
  }

  const updateFeedback = (id, updatedItem) => {
    setFeedback(
      feedback.map(item => (item.id === id ? { ...item, ...updatedItem } : item))
    )
    setFeedbackEdit({
      item: {},
      edit: false
    })
  }

  const deleteFeedback = id => {
    setFeedback(feedback.filter(item => item.id !== id))
  }

  const updateRating = rating => {
    setRating(rating)
  }

  const clearRating = () => {
    setRating(null)
  }

  return (
    <FeedbackContext.Provider
      value={{
        loading,
        feedback,
        feedbackEdit,
        rating,
        addFeedback,
        editFeedback,
        updateFeedback,
        deleteFeedback,
        updateRating,
        clearRating
      }}
    >
      {children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext
