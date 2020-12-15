import React, { Component } from 'react';
import Todos from './components/Todos';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out the trash',
        completd: false
      },
      {
        id: 2,
        title: 'Dinner with wife',
        completd: false
      },
      {
        id: 3,
        title: 'Band Practice',
        completd: false
      },
      {
        id: 4,
        title: 'Basketball drills/workout',
        completd: false
      }
    ]
  }

  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos} />
      </div>
    )
  }
}

export default App;
