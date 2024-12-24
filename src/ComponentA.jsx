import React, { useState } from 'react'

const ComponentA = () => {
  const[select , setSelect] = useState([false , false , false , false , false , false])
  const Clicked = select.filter(Boolean).length;
  const Remaining = select.length - Clicked;
  const handleClick = (index) =>{
          const n1 = [...select];
          n1[index] = !n1[index]
          setSelect(n1);
  }
  return (
    <div>
        <div style={{display:'flex' }}>
            {
              select.map((m , index) =>(
                <div
                  key={index}
                  onClick={() => handleClick(index)}
                  style={{
                    width:"100px",
                    height:"100px",
                    backgroundColor:m ?'red' : 'green',
                    margin:'3px'
                  }}
                />
              ))
            }
          
        </div>
        <div>
              <p>The Number of boxes Clicked : {Clicked}</p>
              <p>The Number of boxes Remaining to Click : {Remaining}</p>
            </div>
    </div>
  )
}

export default ComponentA