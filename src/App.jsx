import * as React from 'react';

const todoList = [
  {
    id: 1,
    title: "Commit project and create working branch"
  },
  {
    id: 2,
    title: "Create the beginnings of the todo list"
  },
  {
    id: 3,
    title: "Complete assignment"
  }
];

function listItem (item) {
  return (
    <li key={item.id}>
      <span>{item.id} </span>
      <span>{item.title}</span>
    </li>
 )
}

function App() {
  return (
    <div>
      <h1>Todo List</h1>
      <hr /> 

      <ul>
      {todoList.map(listItem)}   
      </ul>
    </div> 
  );
}

export default App;