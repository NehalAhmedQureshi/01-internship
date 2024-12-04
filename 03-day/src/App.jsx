import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'
function Button() {
  var [count, setCount] = useState(0)
  let [autoUpd, setAutoUpd] = useState(false)
  useEffect(() => {
    let timeOutID;

    if (autoUpd) {
      timeOutID = setTimeout(() => {
        setCount((prevCount) => prevCount + 1);
      }, 3000);
    }

    return () => {
      // Cleanup the timeout when the component unmounts or autoUpd changes
      clearTimeout(timeOutID);
    };})
  return (
    <div className="main">
      <h2 className="show">
        Your Results : {count}
      </h2>
      <button className="addbtn" onClick={() => { setCount(count + 1) }}>
        Increase
      </button>
      <button className="dlbtn" onClick={() => {
        setCount(count - 1)
      }}>
        Decrease
      </button>
      <button onClick={() => { setAutoUpd(!autoUpd) }}>Auto Update {autoUpd ? 'On' : 'Off'}</button>
    </div>
  )
}

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="main">
      <Button />
    </div>
  )
}

export default App
