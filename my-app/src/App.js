import React from 'react';
import Header from './components/layout/Header';
import Todos from './components/Todos';

import './App.css';

// function component: creating a component without using 
// a class but instead a literal js function
function App() {
  
  // return jsx
  return (
    <div className="App">
      <Header />
      {/* embeds Todos component
          Taking the todos from the state and
          passing it into the Todos component as 
          a prop.
      */}
      {/* <Todos todos={Todos.state.todos}/> */}
      <Todos />
    </div>
  );
}

export default App;
