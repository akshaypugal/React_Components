import React, { useState } from 'react'

const Boxes1 = () => {
    const [items , setItems] = useState([false , false , false ])
    const clicked = items.filter(Boolean).length
    const remain = items.length - clicked 
    const handleClick = (index) =>{
         const n1 = [...items];
         n1[index] = !n1[index]
         setItems(n1);
    }
    
  return (
    <div>
        <div style={{display:'flex'}}>
            {items.map((m , index) => (
                  
                <div
                 key={index}
                 onClick={() => handleClick(index)}
                 style={{
                    margin:'3px',
                    backgroundColor: m ? 'red' : 'green',
                    width:'100px',
                    height:'100px'
                 }}
                />
            )
            )}
        </div>
        <p>Number of click : {clicked}</p>
        <p>Remaining to be clicked : {remain}</p>
    </div>
  )
}

export default Boxes1
