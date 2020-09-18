import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import TodoList from './components/toDoList';
import Effect from './components/useEffect';
import AntdList from './components/antdList';
import './App.css';


const routes = [{
  path: '/effect',
  component: Effect
},{
  path: '/todolist',
  component: TodoList
}, {
  path: '/antd',
  component: AntdList
}]

function App(props) {
  return (
    <div style={{ marginLeft: 50}}>
      <ul>
        <li><Link to="/effect">effect</Link></li>
        <li><Link to="/todolist">todolist</Link></li>
        <li><Link to="/antd">antd</Link></li>
      </ul>
      <hr/>
      {props.children}
    </div>
  )
}

function RouterComponent() {
  return (
    <Router>
      <App>
        {routes.map(item => (
          <Route key={item.path} {...item} />
        ))}
        {/* <Route path="/effect" component={Effect}/>
        <Route path="/todolist" component={TodoList}/> */}
      </App>
    </Router>
  )
}

export default RouterComponent;
