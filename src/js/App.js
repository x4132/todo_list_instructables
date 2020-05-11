import React from 'react';
import '../css/App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      taskArray: [],
      input: ""
    }

    this.buttonClick = this.buttonClick.bind(this);
    this.inputTyped = this.inputTyped.bind(this);
    this.generateTaskArray = this.generateTaskArray.bind(this);
    this.saveTasks = this.saveTasks.bind(this);
    this.getTasks = this.getTasks.bind(this);
    this.removeTask = this.removeTask.bind(this);
  }

  componentDidMount() {
    this.generateTaskArray();
  }

  render() {
    return (
      <div className="text-center container" >
        <br />
        <br />
        {this.state.taskArray}
        <br />
        <div className="row">
          <div className="col">
            <input type="text" onChange={this.inputTyped} value={this.state.input} className="form-control w-25 d-inline align-middle" />
            &nbsp;
            <button onClick={this.buttonClick} className="btn btn-secondary d-inline align-middle " >Add</button>
          </div>
        </div>

      </div>
    )
  }

  buttonClick() {
    if (this.state.input !== "") {
      var taskList = this.getTasks();
      taskList.tasks.push(this.state.input);
      this.saveTasks(taskList);
      this.generateTaskArray();
      this.setState({ input: "" })
    }
  }

  inputTyped(evt) {
    this.setState({ input: evt.target.value });
  }

  generateTaskArray() {
    var tasks = this.getTasks().tasks;
    var taskArray = []
    for (var i = 0; i < tasks.length; i++) {
      taskArray.push(<Task value={tasks[i]} key={i} removeTask={this.removeTask} taskId={i} />);
    }

    this.setState({ taskArray: taskArray });
  }

  saveTasks(tasks) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  getTasks() {
    if (localStorage.getItem("tasks") === null) return { tasks: [] }
    else return JSON.parse(localStorage.getItem("tasks"));
  }

  removeTask(id) {
    var tasks = this.getTasks();
    tasks.tasks.splice(id, 1);
    this.saveTasks(tasks);
    this.generateTaskArray();
  }
}

class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value
    }
  }

  render() {
    if (this.state.value !== null) {
      return (
        <div className="row justify-content-center" onClick={() => { this.props.removeTask(this.props.taskId) }} >
          <div className="col-4 pointer bg-dark" style={{ height: "2em", borderRadius: "10px", marginBottom: "5px", color: "white" }} >
            <span className="text-center align-middle" >{this.state.value}</span>
          </div>
        </div>
      )
    }
    else return null;
  }
}