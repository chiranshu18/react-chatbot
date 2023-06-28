import "./App.css";
import React from "react";
import ChatBot from "react-simple-chatbot";
import { useState } from "react";

const CustomDropdown = (props) => {
  const { triggerNextStep } = props;
  const [selectedAge, setSelectedAge] = useState(null);

  const handleOptionClick = (value) => {
    setSelectedAge(value);
    triggerNextStep({ value });
  };

  const options = [];
  for (let age = 18; age <= 40; age++) {
    options.push({ value: String(age), label: String(age) });
  }

  return (
    <div style={{ maxHeight: "100px", overflowY: "auto", maxWidth: "30px"}}>
      <p>Enter Your Age: </p>
      {options.map((option) => (
        <div
          key={option.value}
          onClick={() => handleOptionClick(option.value)}
          style={{
            fontWeight: option.value === selectedAge ? "bold" : "normal",
          }}
        >
          {option.label}
        </div>
      ))}
    </div>
  );
};

const Chatbot = () => {
  const steps2 = [
    {
      id: "initial_msg",
      message: "Hello, Welcome to student info system!",
      trigger: "ask_response",
    },
    {
      id: "ask_response",
      options: [
        {
          value: "got_it",
          label: "Got it",
          trigger: "ask_name",
        },
      ],
    },
    {
      id: "ask_name",
      message: "Enter your Name",
      trigger: "get_name",
    },
    {
      id: "get_name",
      user: true,
      trigger: "ask_age",
    },
    {
      id: "ask_age",
      component: <CustomDropdown />,
      waitAction: true,
      trigger: "print_age",
    },
    {
      id: 'print_age',
      message: '{previousValue}',
      trigger: 'end_message',
    },
    {
      id: "end_message",
      message: "Thanks! Your data was submitted successfully!",
      end: true,
    },
  ];

  return (
    <div className="App">
      <ChatBot steps={steps2} />
    </div>
  );
};

export default Chatbot;




