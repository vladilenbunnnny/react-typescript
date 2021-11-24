import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import List from "./components/List";

interface IState {
  people: {
    name: string;
    age: number;
    url: string;
    note?: string;
  }[];
}

function App() {
  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "Vlad",
      age: 28,
      url: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
      note: "Learns typescript with React",
    },
  ]);

  return (
    <div className="App">
      <h1>People Invited to Our Party</h1>
      <List people={people} />
    </div>
  );
}

export default App;
