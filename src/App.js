import React from 'react'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'

const App = () => {
  const counter = useSelector(state => state.counter)
  const dispatch = useDispatch()
  const increment = () => dispatch({ type: 'INCREMENT' })
  const decrement = () => dispatch({ type: 'DECREMENT' })
  const AddBy10 = () => dispatch({ type: 'ADD_BY_10', payload: 10 })

  return (
    <>
    <div className='counter'>
    <h1>Hello World.</h1>
    <h1>Counter Application</h1>
    <h1>{counter}</h1>
    <button className='btn' style={{"margin" : "10px", "width" : "150px"}} onClick={increment} >Increment</button>
    <button className='btn' style={{"margin" : "10px", "width" : "150px"}} onClick={decrement}>Decrement</button>
    <button className='btn' style={{"margin" : "10px","width" : "150px"}} onClick={AddBy10}>Add By 10</button>
    </div>
   
    </>
  )
}

export default App