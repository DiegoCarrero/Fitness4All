import './Styles/App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Exercises from './Components/Exercises';
import ExerciseDetails from './Components/ExerciseDetails';
import EditExercise from './Components/EditExercise';
import NewExercise from './Components/NewExercise';
import WorkoutRoutine from './Components/WorkoutRoutine';
import NotFound from './Components/NotFound';

function App() {

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/exercises' element={<Exercises />} />
        <Route path='/exercises/:id' element={<ExerciseDetails />} />
        <Route path='/exercises/:id/edit' element={<EditExercise />} />
        <Route path='/exercises/new' element={<NewExercise />} />
        <Route path='/your-workout-routine' element={<WorkoutRoutine />}/>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App;
