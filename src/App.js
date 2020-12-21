import React, { Component } from 'react';
import Header from './components/layout/Header'
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import { v4 as uuidV4} from 'uuid';

class App extends Component {
  state = {
    todos: [
      {
        id: uuidV4(),
        title: 'Take out the trash',
        completed: true
      },
      {
        id: uuidV4(),
        title: 'Dinner with wife',
        completed: false
      },
      {
        id: uuidV4(),
        title: 'Band Practice',
        completed: false
      },
      {
        id: uuidV4(),
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

  // Add Todo
  addTodo = (title) => {
    const newTodo = {
      id: uuidV4(),
      title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo] })
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo addTodo={this.addTodo} />
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
