import React, { useState } from 'react'

const ComponentB = () => {
  const[clicked , setClicked] = useState([false , false , false , false , false , false  , false , false , false , false])
  const clickedCount = clicked.filter(Boolean).length;
  const remainingCount = clicked.length - clickedCount ; 
  const handleClick = (index) =>{
      const newClicked = [...clicked];
      newClicked[index] = !newClicked[index];
      console.log(newClicked[index]);
      console.log(newClicked)
      setClicked(newClicked)
  }
  return (
    <div>
       <div style={{display:'flex'}}>
        {
          clicked.map((m , index) =>(
            <div
              key={index}
              onClick={() =>handleClick(index)}
              style={{
                textAlign:"center",
                height:'100px',
                width:'100px',
                margin:'5px',
                backgroundColor:m ? 'green' : 'red',
              }}
            />
          ))
        }
       </div>
      <div>
        <p>The Number box clicked : {clickedCount}</p>
        <p>The Remaining box : {remainingCount}</p>
      </div>
    </div>
  )
}

export default ComponentB