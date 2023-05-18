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
    preference: {
        calisthenics: false,
        machines: false,
        freeWeights: false,
    },
    fitnessGoal: '',
  })

  function handleOptionChange(event) {
    setProfile({ ...profile, [event.target.id]: event.target.value });
  }

  function handleNumberOptionChange(event) {
    setProfile({ ...profile, [event.target.id]: Number(event.target.value)})
  } 

  function handleHasGymChange() {
    setProfile({ ...profile, hasGym: !profile.hasGym });
  }

  function handlePreferenceChange(item) {
    setProfile({ ...profile, [preference.item]: !item })
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
              onChange={handleNumberOptionChange}
              required
            >
              <option></option>
              <option value='3'>3</option>
              <option value='4'>4</option>
              <option value='5'>5</option>
            </select>

            <label htmlFor='hasGym'>Are you currently subscribed to a gym?</label>
            <input
              id="hasGym"
              type="checkbox"
              onChange={handleHasGymChange}
              checked={profile.hasGym}
            />

            <label htmlFor='preference'>Which of the following would you like to include in your routine?</label>
            <input
              id="calisthenics"
              type="checkbox"
              onChange={() => handlePreferenceChange(profile.preference.calisthenics)}
              checked={profile.preference.calisthenics}
            />
            <input
              id="machines"
              type="checkbox"
              onChange={() => handlePreferenceChange(profile.preference.machines)}
              checked={profile.preference.machines}
            />
            <input
              id="freeWeights"
              type="checkbox"
              onChange={() => handlePreferenceChange(profile.preference.freeWeights)}
              checked={profile.preference.freeWeights}
            />

            <label htmlFor='fitnessGoal'>What do you hope to achieve as a result of exercise?</label>
            <select
              name='fitnessGoal'
              id='fitnessGoal'
              value={profile.fitnessGoal}
              onChange={handleOptionChange}
              required
            >
              <option></option>
              <option value='Overall Health'>Overall Health</option>
              <option value='Weight Loss'>Weight Loss</option>
              <option value='Hypertrophy'>Hypertrophy (gain muscle mass)</option>
              <option value='Strength'>Strength</option>
            </select>
            <br/>
            <input type='submit' />

        </form>
        
      </section>
    </div>
  )
}
