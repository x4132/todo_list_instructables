import React from 'react';
import '../css/App.css';

export default class App extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {
      taskArray: []
    }
  }

  render() {
    var taskArray = [];
    for (var i = 0; i < 10; i++)
    {
      taskArray.push(<Task value={"test" + i} key={i} />)
    }
    return (
      <div>
        {taskArray}
      </div>
    )
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