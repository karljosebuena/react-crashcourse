import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';

import Header from './components/layout/Header'
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/About'
// import { v4 as uuidV4 } from 'uuid';

import './App.css';

class App extends Component {

  state = {
    todos: []
  }

  jsonPlaceHolderUri = 'https://jsonplaceholder.typicode.com/todos';

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
  delTodo = async (todoId) => {
    try {
      const deleteTodo = await axios.delete(`${this.jsonPlaceHolderUri}/${todoId}`);
      console.info(`Todo ${todoId} delete response: ${deleteTodo.status}`);
      this.setState({
        todos: [...this.state.todos].filter(todo => todo.id !== todoId)
      });
    } catch (error) {
      console.log(error)
    }
  }

  // Add Todo
  addTodo = async (title) => {
    try {
      const newTodo = await axios.post(this.jsonPlaceHolderUri, {
        title,
        completed: false
      })
      this.setState({ todos: [...this.state.todos, newTodo.data] })
    } catch (error) {
      console.log(error)
    }
  }

  async componentDidMount() {
    try {
      const todos = await axios.get(`${this.jsonPlaceHolderUri}?_limit=10`);
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
