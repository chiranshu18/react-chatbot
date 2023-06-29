import "./App.css";
import React, { useState } from "react";
import ChatBot from "./components/Chatbot";
import Landing from "./components/Landing";
import Details from "./components/Details";

const App = () => {
  const [welcome, setWelcome] = useState(true);
  const [chat, setChat] = useState(false);
  const [display, setDisplay] = useState(false);

  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  return (
    <div className="App">
      {welcome && (
        <Landing
          setWelcome={setWelcome}
          setChat={setChat}
          setDisplay={setDisplay}
        />
      )}
      {chat && (
        <ChatBot
          setWelcome={setWelcome}
          setChat={setChat}
          setDisplay={setDisplay}
          setName={setName}
          setAge={setAge}
        />
      )}
      {display && <Details name={name} age={age} />}
    </div>
  );
};

export default App;
