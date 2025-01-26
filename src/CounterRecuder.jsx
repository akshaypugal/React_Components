import React, { useReducer, useState } from 'react'

const CounterRecuder = () => {
  const[svalue , setSvalue] = useState<string>('')
  const reducer = (state , action) =>{
      switch (action.type) {
        case 'increment':
          return {...state , count : state.count + 1}
        case 'decrement':
          return {...state , count : state.count - 1}
        case 'reset' : 
          return {...state , count : state.count = 0}
        case 'handleIncrementByAmount':
          return {...state  , count : state.count + action.m}
        case 'handleDecrementByAmount':
          return{...state , count : state.count - action.m}
        default:
          return state ;
      }
  }
  const[state , dispatch]  = useReducer(reducer , {count : 0})
  return (
    <div>
      <button onClick={() => dispatch({type:'increment'})}>+</button>
      <button onClick={() => dispatch({type:'decrement'})}>-</button>
      <input
      type='text'
      value={svalue}
      onChange={setSvalue(e.target.value)}/>
      <button onClick={handleIncrementByAmount}>IncrementByAmount</button>
      <button onClick={handleDecrementByAmount}>DecrementByAmount</button>
    </div>
  )
}

export default CounterRecuder
