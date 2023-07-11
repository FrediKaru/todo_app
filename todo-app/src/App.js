import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
const tasksToAdd = [
  { title: "Washing maschine // black", id: 1, isUrgent: true },
  { title: "Groceries", id: 2, isUrgent: false },
  { title: "Walk with dog", id: 3, isUrgent: true },
  { title: "Walk", id: 4, isUrgent: false },
  { title: "Jog", id: 3, isUrgent: false },
  { title: "Shop shoes", id: 3, isUrgent: true },
  { title: "Jog", id: 3, isUrgent: false },
  { title: "Jog", id: 3, isUrgent: false },
  { title: "Training in sda", id: 3, isUrgent: true },
  { title: "Cats and dogs", id: 3, isUrgent: false },
  { title: "Jo", id: 3, isUrgent: false },
  { title: "TASKS IN FED", id: 3, isUrgent: true },
  { title: "g", id: 3, isUrgent: false },
  { title: "Jog", id: 3, isUrgent: false },
  { title: "Jg", id: 3, isUrgent: false },
  { title: "Jog", id: 3, isUrgent: false },
  { title: "Jog", id: 3, isUrgent: false },
  { title: "dd", id: 3, isUrgent: false },
];

function List(props) {
  const taskList = props.tasks.map((task) => (
    <li style={{ color: task.isUrgent ? "red" : "green" }}>{task.title}</li>
  ));
  return <ul>{taskList}</ul>;
}
function UserInput({ tasks, setTasks }) {
  function addTask() {
    setTasks([...tasks, { title: "Dinosaur", id: 6 }]);
  }
  return (
    <div>
      <input type="text"></input>
      <button onClick={addTask}>Submit</button>
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
        <List tasks={tasks} />
      </header>
      <body></body>
    </div>
  );
}

export default App;
