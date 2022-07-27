import { createContext, useState, useEffect } from 'react'

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
      const res = await fetch('/feedback?_sort=rating&_order=desc')
      const data = await res.json()

      setFeedback(data)
      setLoading(false)
    }

    fetchFeedbacks()
  }, [])

  const addFeedback = async newFeedback => {
    const res = await fetch('/feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newFeedback)
    })

    const data = await res.json()

    setFeedback([data, ...feedback])
  }

  const editFeedback = item => {
    setFeedbackEdit({
      item,
      edit: true
    })
  }

  const updateFeedback = async (id, updatedItem) => {
    const res = await fetch(`/feedback/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedItem)
    })

    const data = await res.json()

    setFeedback(feedback.map(item => (item.id === id ? { ...item, ...data } : item)))

    setFeedbackEdit({
      item: {},
      edit: false
    })
  }

  const deleteFeedback = async id => {
    await fetch(`/feedback/${id}`, { method: 'DELETE' })
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
