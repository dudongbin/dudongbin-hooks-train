import React, { Component, useState, useEffect } from 'react';

class App2 extends Component {
  render() {
    return (
      <div>1</div>
    )
  }
}

function App() {
  const [num, setNum] = useState(0);
  const [size, setSize] = useState({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight,
  });

  const changeTitle = () => {
    document.title = num;
  }
  const resize = () => {
    console.log(11);
    setSize({
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight,
    })
  }

  useEffect(() => {
    console.log('num: ', num);
  }, [num])

  useEffect(() => {
    // document.title = num;
    changeTitle()
  })
  useEffect(() => {
    window.addEventListener('resize', resize, false);
    return () => {
      window.removeEventListener('resize', resize, false);
    }
  }, [])
  return (
    <div>
      <span>{num}</span>
      <button onClick={() => setNum(num + 1)}>add</button>
      <div>
        {size.width} * {size.height}
      </div>
    </div>
  )
}

export default App;
