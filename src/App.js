import React, { Component } from 'react';
import Header from './components/layout/Header'
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: true
      },
      {
        id: 2,
        title: 'Dinner with wife',
        completed: false
      },
      {
        id: 3,
        title: 'Band Practice',
        completed: false
      },
      {
        id: 4,
        title: 'Basketball drills/workout',
        completed: false
      }
    ]
  }

  // Toggle todo item
  markComplete = (todoId) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === todoId) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    })
  }

  // Delete todo itiem
  delTodo = (todoId) => {
    this.setState({
      todos: [...this.state.todos].filter(todo => todo.id !== todoId)
    });
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo />
          <Todos
            todos={this.state.todos}
            markComplete={this.markComplete}
            delTodo={this.delTodo}
          />
        </div>
      </div>
    )
  }
}

export default App;
