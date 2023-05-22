import { Link } from "react-router-dom";
import '../Styles/Exercise.css';

export default function Exercise({ exercise }) {

  return (
    <article>
      <h4>{exercise.name}</h4>
      <img src={exercise.image} alt={exercise.name} />
      <Link to={`/exercises/${exercise.id}`}><button>View Details</button></Link>
    </article>
  )
}
