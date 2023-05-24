import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import '../Styles/NewExercise.css'

const API = process.env.REACT_APP_API_URL;

export default function NewExercise() {

  const [newExercise, setNewExercise] = useState({
    name: '',
    image: '',
    muscle_group: '',
    targeted_muscles: '',
    difficulty_level: '',
    how_to: ''
  })

  const navigate = useNavigate();

  function handleTextChange(event) {
    setNewExercise({ ...newExercise, [event.target.id]: event.target.value });
  }

  function handleOptionChange(event) {
    setNewExercise({ ...newExercise, [event.target.id]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    axios.post(`${API}/exercises`, newExercise)
      .then(() => {
        navigate('/exercises');
        console.log('exercise added', newExercise)
      },
      (error) => console.error(error)
      )
      .catch((c) => console.warn('catch', c));
  }

  return (
    <div className="New">
      <br/><br/>
      <form onSubmit={handleSubmit}>

        <label htmlFor="name">Exercise Name:</label>
        <input
          id="name"
          value={newExercise.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Ex.: Push Up"
          autoFocus
          required
        />
        <br/><br/>

        <label htmlFor="image">Image URL:</label>
        <input
          id="image"
          value={newExercise.image}
          type="text"
          pattern="http[s]*://.+"
          placeholder="http://..."
          onChange={handleTextChange}
        />
        <br/><br/>

        <label htmlFor="muscle_group">Muscle Group:</label>
        <select
          name="muscle_group"
          id="muscle_group"
          value={newExercise.muscle_group}
          onChange={handleOptionChange}
          required
        >
          <option></option>
          <option value="Chest">Chest</option>
          <option value="Back">Back</option>
          <option value="Legs">Legs</option>
          <option value="Shoulders">Shoulders</option>
          <option value="Arms">Arms</option>
        </select>
        <br/><br/>

        <label htmlFor="targeted_muscles">Targeted Muscles:</label>
        <input
          id="targeted_muscles"
          value={newExercise.targeted_muscles}
          type="text"
          onChange={handleTextChange}
          placeholder="Ex.: Pectorals, Triceps and Anterior Deltoids"
        />
        <br/><br/>

        <label htmlFor="difficulty_level">Training Level:</label>
        <select
          name="difficulty_level"
          id="difficulty_level"
          value={newExercise.difficulty_level}
          onChange={handleOptionChange}
        >
          <option></option>
          <option value="Novice">Novice</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </select>
        <br/><br/>

        <label htmlFor="how_to">Steps to perform the exercise:</label>
        <textarea
          id="how_to"
          value={newExercise.how_to}
          onChange={handleTextChange}
          placeholder="1- Start in an extended plank position. 2-..."
        />
        <br/><br/>

        <input type="submit" />
        
      </form>
    </div>
  )
}
