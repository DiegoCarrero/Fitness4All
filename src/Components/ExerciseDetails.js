import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

export default function ExerciseDetails() {

  const [exercise, setExercise] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${API}/exercises/${id}`)
      .then((response) => {
        console.log(response.data);
        setExercise(response.data);
      }).catch((e) => console.warn('catch', e))
  }, [id, API])

  function deleteExercise() {
    axios.delete(`${API}/exercises/${id}`)
      .then(() => {
        navigate('/exercises');
      },
      (error) => console.error(error)
    )
    .catch((c) => console.warn('catch', c))
  }

  return (
    <div>
      <h1>{exercise.name}</h1>
      <img src={exercise.image} alt={exercise.name} />
      <h3>Main Muscle Group: {exercise.muscle_group}</h3>
      <h3>Targeted Muscles: {exercise.targeted_muscles}</h3>
      <h3>Training Level: {exercise.difficulty_level}</h3>
      <p>{exercise.how_to}</p>

      <div className="show-navigation">
        <Link to='/exercises'><button>Back</button></Link>
        <Link to={`/exercises/${id}/edit`}><button>Edit Exercise</button></Link>
        <button onClick={() => deleteExercise()}>Delete Exercise</button>
      </div>
    </div>
  )
}
