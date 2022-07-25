import { createContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import FeedbackData from '../data/FeedbackData'

const FeedbackContext = createContext('FeedbackContext')

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState(FeedbackData)
  // eslint-disable-next-line no-unused-vars
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false
  })

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

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        addFeedback,
        editFeedback,
        updateFeedback,
        deleteFeedback
      }}
    >
      {children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext
