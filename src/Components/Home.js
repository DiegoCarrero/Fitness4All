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
    calisthenics: false,
    freeWeights: false,
    machines: false,
    fitnessGoal: '',
  })

  function handleOptionChange(event) {
    setProfile({ ...profile, [event.target.id]: event.target.value });
    console.log(profile)
  }

  function handleNumberOptionChange(event) {
    setProfile({ ...profile, [event.target.id]: Number(event.target.value)})
  } 

  function handleHasGymChange() {
    setProfile({ ...profile, hasGym: !profile.hasGym });
  }

  function handleCalisthenicsChange() {
    setProfile({ ...profile, calisthenics: !profile.calisthenics });
  }

  function handleFreeWeightsChange() {
    setProfile({ ...profile, freeWeights: !profile.freeWeights });
  }

  function handleMachinesChange() {
    setProfile({ ...profile, machines: !profile.machines });
  }

//   function handleCheckboxChange(item) {
//     setProfile({ ...profile, [item]: !item })
//   }

  function handleSubmit(event) {
    event.preventDefault();
    navigate('/your-workout-routine');
  }

  return (
    <div className='Home'>
      <section className='Intro'>
        <h2>Welcome to Fitness4All!</h2>
    
        <p>This website is made for people who want to include exercise into their weekly routine for overall health, in a simple yet effective way.</p>
        
        <p>If you already have a good grasp on exercise science, feel free to browse through our <Link className='link' to='/exercises'>list of exercises</Link> and select your favorites from each muscle group to build out your very own printable workout routine.</p>
        
        <p>If you would like a customized routine based on your experience, availability, goals and more, feel free to answer the following questions:</p>
      </section>
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
            <br/>
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
            <br/>
            <label htmlFor='hasGym'>Are you currently subscribed to a gym?</label>
            <input
              id="hasGym"
              type="checkbox"
              onChange={handleHasGymChange}
              checked={profile.hasGym}
            />
            <br/>
            <p>Which of the following would you like to include in your routine?</p>
            <label htmlFor='calisthenics'>Calisthenics (bodyweight exercises)</label>
            <input
              id="calisthenics"
              type="checkbox"
              onChange={handleCalisthenicsChange}
              checked={profile.calisthenics}
            />
            <br/>
            <label htmlFor='freeWeights'>Free Weights (dumbbells, barbells, etc.)</label>
            <input
              id="freeWeights"
              type="checkbox"
              onChange={handleFreeWeightsChange}
              checked={profile.freeWeights}
            />
            <br/>
            {profile.hasGym ? 
              <section>
                <label htmlFor='machines'>Machines</label>
                <input
                  id="machines"
                  type="checkbox"
                  onChange={handleMachinesChange}
                  checked={profile.machines}
                />
              </section>
            : null}
            <br/>
            <label htmlFor='fitnessGoal'>What do you hope to achieve as a result of exercise?</label>
            <select
              name='fitnessGoal'
              id='fitnessGoal'
              value={profile.fitnessGoal}
              onChange={handleOptionChange}
              required
            >
              <option></option>
              <option value='Overall Health'>Better Overall Health</option>
              <option value='Weight Loss'>Weight Loss</option>
              <option value='Hypertrophy'>Hypertrophy (gain muscle mass)</option>
              <option value='Strength'>Strength</option>
            </select>
            <br/>
            <br/>
            <input type='submit' />
            <br/><br/><br/>
        </form>
    </div>
  )
}
