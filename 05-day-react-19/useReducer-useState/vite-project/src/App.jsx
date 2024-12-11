import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Child1 from './components/Child1'
import { useReducer } from 'react'
import { useEffect } from 'react'
import { useLayoutEffect } from 'react'

function App() {
  let [state , setState] = useState('')

  useLayoutEffect(() => {
    console.log('layout k effect kr rh hu');
    setState('layout')
    
  },[])
  // useEffect(() => {
  //   setState('nehal')
  // console.log('effect kr rh hu');
  
  //   return () => {
  //     console.log('clean kr rh hu');
      
  //   }
  // })
  
  return (
    <div className="main">
      hweloo{state}
    </div >
  )
}

export default App
