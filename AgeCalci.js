import React, {useState} from 'react';
const AgeCalci=() =>{
    const [dob, setDOB] = useState('');
    const [age, setAge] = useState('');
  
    const calculateAge = () => {
      const dobDate = new Date(dob);
      const today = new Date();
      let age = today.getFullYear() - dobDate.getFullYear();
      const monthDiff = today.getMonth() - dobDate.getMonth();
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dobDate.getDate())) {
        age--;
      }
      setAge(age);
    };

    return(
        <div classname="container">
            <h2>Age Calculator</h2>
            <label>Enter your date of birth</label><br></br>
            <input type="date" id="date" value={dob} onChange={(e)=>setDOB(e.target.value)}/><br></br>
            <button onClick={calculateAge}>Calculate</button>
            {age && <p>Age is : {age}</p>}
        </div>
    );
}
export default AgeCalci;