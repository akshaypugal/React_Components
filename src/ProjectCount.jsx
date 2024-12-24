import React, { useState } from 'react'
import '../src/components/count.css'


const ProjectCount = () => {
    const[count , setCount] = useState(0);
  return (
    <div className='container'>
     <h1 className='number'>count : {count}</h1>
     <div className='btns-container'>
     <button className='increment' onClick={() => setCount(count + 1)}>increment</button>
     <button className="increment" onClick={()=> setCount(count -1)}>decrement</button>
     </div>

    </div>
  )
}

export default ProjectCount