// import "./App.css";
import React from "react";
import ChatBot from "react-simple-chatbot";

const Chatbot = ({ setWelcome, setChat, setDisplay, setName, setAge }) => {
  const removeChatBot = () => {
    setWelcome(false);
    setChat(false);
    setDisplay(true);
  };

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
      validator: (value) => {
        setName(value);
        return true;
      },
      trigger: "ask_age",
    },
    {
      id: "ask_age",
      message: "Enter your Age",
      trigger: "get_age",
    },
    {
      id: "get_age",
      user: true,
      validator: (value) => {
        setAge(value);
        return true;
      },
      trigger: "print_age",
    },
    {
      id: "print_age",
      message: "{previousValue}",
      trigger: "end_message",
    },
    {
      id: "end_message",
      message: "saving your details...",
      trigger: () => {
        setTimeout(() => {
          removeChatBot();
        }, 5000);
      },
    },
  ];

  return (
    <div className="App">
      <ChatBot steps={steps2} />
    </div>
  );
};

export default Chatbot;
