import { useContext } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import FeedbackContext from '../context/FeedbackContext'
import FeedbackItem from './FeedbackItem'
import Spinner from './shared/Spinner'

const FeedbackList = () => {
  const { loading, feedback } = useContext(FeedbackContext)
  if (!loading && (!feedback || feedback.length === 0)) {
    return <p>No Feedback Yet</p>
  }

  return (
    <div className='feedback-list'>
      {loading ? (
        <Spinner />
      ) : (
        <AnimatePresence>
          {feedback.map(item => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, translateY: '-4rem' }}
            >
              <FeedbackItem key={item.id} item={item} />
            </motion.div>
          ))}
        </AnimatePresence>
      )}
    </div>
  )

  // return (
  //   <div className='feedback-list'>
  //     {feedback.map(item => (
  //       <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
  //     ))}
  //   </div>
  // )
}

export default FeedbackList
