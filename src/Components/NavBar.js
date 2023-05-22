import { Link } from "react-router-dom";
import '../Styles/NavBar.css'

export default function NavBar() {
  return (
    <div className="Navbar">
      <img className="logo" src='https://cdn.dribbble.com/users/1064409/screenshots/6520807/myh-logo.jpg?compress=1&resize=400x300' alt='logo' height='100px' />
      <h1 className="title">
        <Link to='/'>Fitness4All</Link>
      </h1>
      {/* <p>Fitness made simple</p> //slogan */}
      <h2>
        <Link to='/exercises'>All Exercises</Link>
      </h2>
      <button>
        <Link to='/exercises/new'>Add an Exercise</Link>
      </button>
    </div>
  )
}
