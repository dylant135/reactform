import React from 'react';
import './App.css';

function App() {

  const [formData, setFormData] = React.useState({
    fname: '',
    lname: '',
    age: ''
  })
  function handleChange(event) {
    const {name, value, type, checked} = event.target
    setFormData(prevData => ({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    }))
  }

  return (
    <div className="App">
      <h1>Form</h1>

      <form>
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
      </form>
    </div>
  );
}

export default App;
