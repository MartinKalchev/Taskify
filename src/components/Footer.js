import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <p>Copyright &copy; 2021</p>
      <p>Email: martinkalchev97@gmail.com</p>
      <Link to='/about'>About</Link>
      <p><a href='https://github.com/MartinKalchev?tab=repositories'>GitHub Profile</a></p>
      <p><a href='https://www.linkedin.com/in/martin-kalchev/'>LinkedIn Profile</a></p>
    </footer>
  )
}

export default Footer