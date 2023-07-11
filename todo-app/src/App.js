import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import { ReactComponent as DeleteIcon } from "./trash-2.svg";
const tasksToAdd = [
  { title: "Load washing maschine", id: 1, isUrgent: true, isComplete: true },
  {
    title: "Groceries: milk and bread",
    id: 2,
    isUrgent: false,
    isComplete: false,
  },
  { title: "Walk with dog", id: 3, isUrgent: true, isComplete: true },
  { title: "Buy HDMI cable", id: 4, isUrgent: false, isComplete: false },
  { title: "Register sports event", id: 3, isUrgent: false, isComplete: false },
  { title: "Shop shoes", id: 4, isUrgent: true, isComplete: true },
];

function List(props) {
  const deleteById = (id) => {
    props.setTasks((oldvalues) => {
      return oldvalues.filter((task) => task.id !== id);
    });
  };
  const markDone = (id) => {};
  const taskList = props.tasks.map((task) => (
    <li
      className={`task-item ${task.isUrgent ? "urgent" : ""} ${
        task.isComplete ? "complete" : ""
      }`}
      s
    >
      {task.title}{" "}
      <div className="task-controls">
        <input type="checkbox" value="yes"></input>
        <button onClick={() => deleteById(task.id)}>
          <DeleteIcon />
        </button>
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
          Add
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
