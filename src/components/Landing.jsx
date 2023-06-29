import React from 'react'

const Landing = ({setWelcome, setChat, setDisplay}) => {
  return (
    <div>
      <p>welcome to the student portal </p>
      <button onClick={() => {
        setWelcome(false);
        setChat(true);
        setDisplay(false);
      }}>Enroll Now</button>
    </div>
  );
}

export default Landing