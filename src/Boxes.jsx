import React, { useState } from 'react'

const Boxes = () => {
    const[select , setSelect] = useState([false , false , false])
    const selected = select.filter(Boolean).length;
    const remain = select.length - selected;
    const handleClick = (index) =>{
        const count = [...select];
        count[index] = !count[index]
        setSelect(count);
    }
  return (
    <div>
      <div style={{display:'flex'}}>
      {
        select.map((m , index) =>(
            <div 
            key={index}
            onClick={() =>{handleClick(index)}}
            style={{
            display:'flex',
            width:'100px',
            height:'100px',
            backgroundColor:m?'red':'purple',
            cursor:'pointer',
            margin:'5px'
        }}/>
        ))
    }
      </div>
   
    <p>The boxes selected : {selected}</p>
    <p>The Remaing boxes : {remain}</p>
    </div>
  )
}

export default Boxes