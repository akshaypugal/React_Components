import React, { useState } from 'react'
import Boxes from './Boxes'
import CounterRecuder from './CounterRecuder'

const UserContext = () => {
    const[showComponent , setShowComponent] = useState(null)
  return (
    <div>
        <h1>Click the below buttons</h1>
        <label>
            For Boxes chanllenge : 
            <button onClick={() =>setShowComponent('Box')}>Boxes</button>
        </label>
        <br/>
        <label>
            For Reducer chanleenge : 
            <button onClick={() => setShowComponent('CounterRecuder')}>Reducer</button>
        </label>
        <div>
            {showComponent === 'Box' && <Boxes/>}
            {showComponent === 'CounterRecuder' && <CounterRecuder/>}
        </div>
    </div>
  )
}

export default UserContext