import { Link } from 'react-router-dom'
import { IoHome } from 'react-icons/io5'
import Card from '../components/shared/Card'

const About = () => {
  return (
    <div className='container'>
      <Card>
        <div className='about'>
          <h1>About This Project</h1>
          <p>This is a React app to leave feedback for a product or service</p>
          <p>Version: 1.0</p>

          <p>
            <Link to='/'>
              <IoHome />
              <span>Back to Home</span>
            </Link>
          </p>
        </div>
      </Card>
    </div>
  )
}
export default About
