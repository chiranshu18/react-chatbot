import React from "react";

const Details = ({ name, age }) => {
  return (
    <div>
      <p>
        Your name {name} aged {age} has been added to student system. You may
        now exit.
      </p>
    </div>
  );
};

export default Details;
