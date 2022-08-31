import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SecondComponent from './components/learning-examples/FirstComponent'
import Counter from './components/counter/Counter'
import TodoApp from './components/todo/TodoApp';
import './bootstrap.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Counter></Counter> */}
        <TodoApp/>
      </div>
    );
  }
}


function ThirdComponent() {
  return (
    <div className="ThirdComponent">
      ThirdComponent
    </div>
  );
}


export default App;