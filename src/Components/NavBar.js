import { Link } from "react-router-dom";


export default function NavBar() {
  return (
    <div className='NavBar'>
      <h1>
        {/* <img src={logo} alt='logo'/> */}
        <Link to='/'>Fitness4All</Link>
      </h1>
      <h2>
        <Link to='/snacks'>All Exercises</Link>
      </h2>
      <button>
        <Link to='/snacks/new'>Add an Exercise</Link>
      </button>
    </div>
  )
}
