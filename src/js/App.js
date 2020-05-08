import React from 'react';
import '../css/App.css';

export default class App extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {
      taskArray: [],
      input: ""
    }

    this.buttonClick = this.buttonClick.bind(this);
    this.inputTyped=this.inputTyped.bind(this);
    this.generateTaskArray=this.generateTaskArray.bind(this);
    this.saveTasks=this.saveTasks.bind(this);
    this.getTasks=this.getTasks.bind(this);
    this.removeTask=this.removeTask.bind(this);
  }

  render() {
    return (
      <div>
        {this.state.taskArray}
        <input type="text" onChange={this.inputTyped} value={this.state.input} /><button onClick={this.buttonClick} >Add</button>
      </div>
    )
  }

  buttonClick()
  {

  }

  inputTyped(evt)
  {
    this.setState({input: evt.target.value});
  }
  
  generateTaskArray()
  {

  }

  saveTasks(tasks)
  {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  getTasks()
  {
    if (localStorage.getItem("tasks") === null) return {}
    else return JSON.parse(localStorage.getItem("tasks"));
  }

  removeTask(id)
  {
    var tasks = this.getTasks();
    delete tasks.tasks[id];
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
    return (
      <div>
        {this.state.value}
      </div>
    )
  }
}