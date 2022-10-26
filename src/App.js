import React from 'react';
import './App.css';

function App() {

  const [formData, setFormData] = React.useState({
    fname: '',
    lname: '',
    age: '',
    skill1: '',
    skill2: '',
    skill1Rank: '',
    skill2Rank: '',
    isReady: false
  })

  function handleChange(event) {
    const {name, value, type, checked} = event.target
    setFormData(prevData => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value
    }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    if(formData.isReady) {
      //submitToApi(formData)
      console.log(formData)
    } else {
      alert('complete all fields')
    }
  }

  return (
    <div className="App">
      <h1>Form</h1>

      <form onSubmit={handleSubmit}>
        <fieldset className='genInfo'>
          <legend>General Information</legend>
          <input 
            type="text"
            onChange={handleChange}
            placeholder="First Name"
            name="fname"
            className='formInput'
            value={formData.fname}
          />
          <input 
            type="text"
            onChange={handleChange}
            placeholder="Last Name"
            name="lname"
            className='formInput'
            value={formData.lname}
          />
          <input 
            type="number"
            onChange={handleChange}
            placeholder="Age"
            name="age"
            className='formInput'
            value={formData.age}
          />
        </fieldset>

        <fieldset className='skillSection'>
          <legend>Skills</legend>
          <input 
            type="text"
            onChange={handleChange}
            placeholder="Skill 1"
            name="skill1"
            className='formInput'
            value={formData.skill1}
          />
          <br />
          <label htmlFor='skill1Rank'>Rank Skill: </label>
          <select
            name='skill1Rank'
            onChange={handleChange}
            value={formData.skill1Rank}
            className="formSelect"
          >
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
            <option value='6'>6</option>
            <option value='7'>7</option>
            <option value='8'>8</option>
            <option value='9'>9</option>
            <option value='10'>10</option>
          </select>
          <br />
          <input 
            type="text"
            onChange={handleChange}
            placeholder="Skill 2"
            name="skill2"
            className='formInput'
            value={formData.skill2}
          />
          <br />
          <label htmlFor='skill2Rank'>Rank Skill: </label>
          <select
            name='skill2Rank'
            onChange={handleChange}
            value={formData.skill2Rank}
            className="formSelect"
          >
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
            <option value='6'>6</option>
            <option value='7'>7</option>
            <option value='8'>8</option>
            <option value='9'>9</option>
            <option value='10'>10</option>
          </select>
        </fieldset>
        <div className='lastSection'>
          <label htmlFor='isReady'>Is all the Information correct?</label>
          <input 
            type='checkbox'
            onChange={handleChange}
            name='isReady'
            checked={formData.isReady}
          />
          <br />
          <button id="submitbtn">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;
