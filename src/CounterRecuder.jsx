import React, { useReducer, useState } from 'react'
import { initialState } from './countReducer';

const CounterRecuder = () => {
  const initialState = {count : 0};
  const reduce =(state , action) =>{
       switch (action.type) {
        case 'increment':
          return {...state , count : state.count + 1}
        case 'decrement':
          return {...state , count : state.count -1 }
        case 'reset':
          return{...state , count : state.count = 0 }
        case 'incrementByAmount':
          return{...state , count : state.count + action.m}
        case 'decrementByAmount':
          return{...state , count : state.count - action.m}
       
        default:
          return state
       }
  }
  const [svalue , setSvalue] = useState(null);
  const[state , dispatch ] = useReducer(reduce , initialState)
  const handleIncrement = () =>{
    dispatch({type:'incrementByAmount' , m : Number(svalue)})
  }
  const handleDecrement = () =>{
    dispatch({type:'decrementByAmount' , m : Number(svalue) })
  }
  return (
    <div>
      <h2>Count : {state.count}</h2>
      <button onClick={() => dispatch({type : 'increment'})}>+</button>
      <button onClick={() => dispatch({type:'decrement'})}>-</button>
      <button onClick={() => dispatch({type:'reset'})}>reset</button>
      <div>
        <label>
          Enter Amount : 
          <input 
          type='number'
          value={svalue}
          onChange={(e) => setSvalue(e.target.value)}
          />
        </label>
        <button onClick={handleIncrement}>incrementByAmount</button>
        <button onClick={handleDecrement}>decrementByAmount</button>
      </div>
    </div>
  )
}

export default CounterRecuder