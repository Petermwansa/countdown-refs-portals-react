import { useState } from "react";

export default function Player() {

  const [enteredName , setEnteredName] = useState('')
  const [submitted , setSubmitted] = useState(false)

  const hnadleChange = (e) => {
    setSubmitted(false)
    setEnteredName(e.target.value)
  } 

  const handleClick = () => {
    setSubmitted(true)
  }
  return (
    <section id="player">
      <h2>Welcome {submitted ? enteredName : 'unknown entity'}</h2>
      <p>
        <input type="text" onChange={hnadleChange} value={enteredName}/>
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
