import { useState, useEffect } from "react";
import axios from "axios";
import Exercise from "./Exercise";

const API = process.env.REACT_APP_API_URL;

export default function Exercises() {

  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    axios.get(`${API}/exercises`)
    .then((response) => {
      setExercises(response.data)
    })
    .catch((error) => console.warn(error))
  }, [])


  return (
    <div>
      {
        exercises.map((exercise) => {
            return <Exercise key={exercise.id} exercise={exercise} />
        })
      }
    </div>
  )
}
