import FeedbackForm from '../components/FeedbackForm'
import FeedbackStats from '../components/FeedbackStats'
import FeedbackList from '../components/FeedbackList'
import AboutIconLink from '../components/AboutIconLink'

const Home = () => {
  return (
    <>
      <div className='container'>
        <FeedbackForm />
        <FeedbackStats />
        <FeedbackList />
      </div>
      <AboutIconLink />
    </>
  )
}

export default Home
