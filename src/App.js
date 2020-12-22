import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';

import Header from './components/layout/Header'
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/About'
import { v4 as uuidV4 } from 'uuid';

import './App.css';

class App extends Component {
  state = {
    todos: []
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

  async componentDidMount() {
    try {
      const todos = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10');
      this.setState({ todos: todos.data });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                <Todos
                  todos={this.state.todos}
                  markComplete={this.markComplete}
                  delTodo={this.delTodo}
                />
              </React.Fragment>
            )} />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    )
  }
}

export default App;
