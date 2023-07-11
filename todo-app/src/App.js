import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
const tasksToAdd = [
  { title: "Washing maschine", id: 1, isUrgent: true },
  { title: "Groceries", id: 2, isUrgent: false },
  { title: "Walk with dog", id: 3, isUrgent: true },
  { title: "Walk with kangaroo", id: 4, isUrgent: false },
  { title: "Jog with alligator", id: 3, isUrgent: false },
  { title: "Shop shoes", id: 4, isUrgent: true },
  { title: "Training in sda", id: 6, isUrgent: true },
  { title: "Cats and dogs", id: 7, isUrgent: false },
  { title: "TASKS IN FED", id: 8, isUrgent: true },
  { title: "Dinosaur", id: 3, isUrgent: false },
];

function List(props) {
  const deleteById = (id) => {
    props.setTasks((oldvalues) => {
      return oldvalues.filter((task) => task.id !== id);
    });
  };
  const taskList = props.tasks.map((task) => (
    <li style={{ color: task.isUrgent ? "red" : "green" }}>
      {task.title}{" "}
      <div className="task-controls">
        <input type="checkbox"></input>
        <button onClick={() => deleteById(task.id)}>Delete</button>
      </div>
    </li>
  ));
  return <ul>{taskList}</ul>;
}
function UserInput({ tasks, setTasks }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setTasks([...tasks, { title: value, id: Math.random() }]);
    setValue("");
  };

  return (
    <div className="input-controls">
      <form className="TodoForm" onSubmit={handleSubmit}>
        <input
          type="text"
          className="todo-input"
          value={value}
          placeholder="What is the task today?"
          onChange={(e) => setValue(e.target.value)}
        ></input>
        <button type="submit" className="todo-btn">
          Submit
        </button>
      </form>
    </div>
  );
}
function App() {
  const [tasks, setTasks] = useState(tasksToAdd);

  return (
    <div className="App">
      <header className="App-header">
        <h1>To-do application</h1>
        <UserInput tasks={tasks} setTasks={setTasks} />
        <List tasks={tasks} setTasks={setTasks} />
      </header>
      <body></body>
    </div>
  );
}

export default App;
