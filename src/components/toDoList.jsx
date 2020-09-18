import React, { useState } from 'react'
import { Router, Route, Link } from 'react-router';
import './todolist.css'

function Control (props) {
  const [value, setValue] = useState('1');

  const handleClick = () => {
    console.log(value);
    props.addItem([...props.list, {content: value, complete: false}])
  }
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => { setValue(e.target.value) }}
      />
      <button onClick={() => handleClick()}>add</button>
    </div>
  )
}

function TodoList(props) {
  return (
    <ul className="todo-content">
      {
        props.list.map((item, index) => {
          return (
            <li
              className={ item.complete ? 'todo-item complete' : 'todo-item'}
              key={index}
            >
              <p>{item.content}</p>
              <div>
                <span onClick={() => props.completeItem(index)} className="todo-complete">完成</span>
                <span onClick={() => props.removeItem(index)} className="todo-delete">删除</span>
              </div>
            </li>
          )
        })
      }
    </ul>
  )
}

function App () {
  const [ list, setList ] = useState([]);
  console.log('list: ', list);
  const addItem = (list) => {
    setList(list)
  }

  const removeItem = (index) => {
    const newList =  list.filter((item, idx) => idx !== index);
    setList(newList);
  }

  const completeItem = (index) => { 
    const newList =  list.map((item, idx) => {
      if (index === idx) {
        return {
          content: item.content, complete: true
        }
      }
      return item;
    });
    setList(newList);
  }
  return (
    <>
      <Control addItem={addItem} list={list}/>
      <TodoList removeItem={removeItem} completeItem={completeItem} list={list} />
    </>
  )
}

export default App;
