import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Header = ({ title, bgColor, textColor }) => {
  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor
  }

  return (
    <header style={headerStyles}>
      <div className='navbar'>
        <svg
          className='logo'
          width='50'
          height='50'
          viewBox='0 0 320 320'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <circle cx='160' cy='160' r='160' fill='#FF6A95' />
          <path
            d='M152.852 252V191.5H219.352V158.25H152.852V111H219.352V77H112.352V252H152.852Z'
            fill='white'
          />
        </svg>
        <Link to='/'>
          <h1>{title}</h1>
        </Link>
      </div>
    </header>
  )
}

Header.defaultProps = {
  title: 'Feedback App',
  bgColor: 'rgba(0, 0, 0, 0.5)',
  textColor: '#ff6a95'
}

Header.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string
}

export default Header
