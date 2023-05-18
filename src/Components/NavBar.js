import { Link } from "react-router-dom";
import '../Styles/NavBar.css'

export default function NavBar() {
  return (
    <div>
      <h1>
        {/* <img src={logo} alt='logo'/> */}
        <Link to='/'>Fitness4All</Link>
      </h1>
      {/* <p>Fitness made simple</p> //slogan */}
      <h2>
        <Link to='/snacks'>All Exercises</Link>
      </h2>
      <button>
        <Link to='/snacks/new'>Add an Exercise</Link>
      </button>
    </div>
  )
}
