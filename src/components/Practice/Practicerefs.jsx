import React from 'react';
import Input from './Input';

export const userData = {
  name: '',
  email: '',
};

export function App() {
    
    const name = React.useRef()
    const email = React.useRef()

    
  function handleSaveData() {
    const enteredName = name.current.value;
    const enteredEmail = email.current.value;
    userData.name = enteredName
    userData.email = enteredEmail

    console.log(userData);
  }

  return (
    <div id="app">
      <Input ref={name} type="text" name={userData.name} label="Your Name" />
      <Input ref={email} type="email" email={userData.email}  label="Your E-Mail" />
      <p id="actions">
        <button onClick={handleSaveData}>Save Data</button>
      </p>
    </div>
  );
}