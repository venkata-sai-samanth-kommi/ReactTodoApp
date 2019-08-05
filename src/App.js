import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoListItem from './components/TodoListItem'
import todoData from './data/todoData'

class App extends React.Component {

  constructor() {
    super()
    this.state =
      {
        todos: todoData
      }
  }

  changeHandler(id){
    this.setState(prevState=>{
      const updatedTodos = prevState.todos.map(todo=>
        {
          if(todo.id===id)
          todo.completed = !todo.completed
          return todo
        })
      return {
          updatedTodos
      }
    })
  }

  render() {
    const todoListItems = this.state.todos.map(item => <TodoListItem 
      key={item.id} item={item} 
      change={this.changeHandler.bind(this)} />)
    return (
      <div className="todo-list">
        {todoListItems}
      </div>
    );
  }
}

export default App;
