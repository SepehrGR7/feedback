import { useContext } from 'react'
import PropTypes from 'prop-types'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { FaTimes, FaEdit } from 'react-icons/fa'
import FeedbackContext from '../context/FeedbackContext'
import Card from './shared/Card'

const FeedbackItem = ({ item }) => {
  const { editFeedback, deleteFeedback } = useContext(FeedbackContext)

  const ConfirmAlert = withReactContent(Swal)

  const handleDelete = id => {
    ConfirmAlert.fire({
      title: 'Are you sure?',
      icon: 'warning',
      showConfirmButton: true,
      confirmButtonText: 'Yes, delete it',
      confirmButtonColor: '#e92828',
      showDenyButton: true,
      denyButtonText: 'No, keep it',
      denyButtonColor: '#fff'
    }).then(res => {
      res.isConfirmed && deleteFeedback(id)
    })
  }

  return (
    <Card reverse>
      <div className='num-display'>{item.rating}</div>
      <button className='close' onClick={() => handleDelete(item.id)}>
        <FaTimes size={'20'} />
      </button>
      <button className='edit' onClick={() => editFeedback(item)}>
        <FaEdit size={'20'} />
      </button>
      <div className='text-display'>{item.text}</div>
    </Card>
  )
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired
}

export default FeedbackItem
