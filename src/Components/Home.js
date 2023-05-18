import '../Styles/Home.css'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {

  const navigate = useNavigate();

  const [profile, setProfile] = useState({
    experienceLevel: '',
    daysPerWeek: 0,
    hasGym: false,
    fitnessGoal: '',
    preference: {
        calisthenics: false,
        machines: false,
        freeWeights: false,
    }
  })

  function handleOptionChange(event) {
    setProfile({ ...profile, [event.target.id]: event.target.value });
  }

  function handleNumberOptionChange(event) {
    setProfile({...profile, [event.target.id]: Number(event.target.value)})
  } 

  const handleHasGymChange = () => {
    setProfile({ ...profile, hasGym: !profile.hasGym });
  }

  function handleSubmit(event) {
    event.preventDefault();
    navigate('/your-workout-routine');
  }

  return (
    <div>
      <section className="AppDescription">
        <h2>Welcome to Fitness4All!</h2>
        <br/>
        <p>This website is made for people who want to include exercise to their weekly routine for overall health, in a simple yet effective way.</p>
        <br/>
        <p>If you already have a good grasp on exercise science, feel free to browse through our <Link to='/exercises'>list of exercises</Link> and select your favorite exercises from each muscle group to build out your very own printable workout routine.</p>
        <br/>
        <p>If you would like a customized routine based on your experience, availability, goals and more, feel free to answer the following questions:</p>
        <br/>
        <form onSubmit={handleSubmit}>

            <label htmlFor='experienceLevel'>How would you rate your level of experience with strength based exercises?</label>
            <select
              name='experienceLevel'
              id='experienceLevel'
              value={profile.experienceLevel}
              onChange={handleOptionChange}
              required
            >
              <option></option>
              <option value='Novice'>Novice</option>
              <option value='Beginner'>Beginner</option>
              <option value='Intermediate'>Intermediate</option>
              <option value='Advanced'>Advanced</option>
            </select>

            <label htmlFor='daysPerWeek'>How many days per week will you exercise?</label>
            <select
              name='daysPerWeek'
              id='daysPerWeek'
              value={profile.daysPerWeek}
              onChange={handleOptionChange}
              required
            >
              <option></option>
              <option value='3'>3</option>
              <option value='Beginner'>Beginner</option>
              <option value='Intermediate'>Intermediate</option>
              <option value='Advanced'>Advanced</option>
            </select>

        </form>
        
      </section>
    </div>
  )
}
