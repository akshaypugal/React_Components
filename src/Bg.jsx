import React, { useRef } from 'react'

const Bg = () => {
    let bg = useRef(null);
    const onClick = () =>{
        const color = ["red" , "teal" , "yellow" , "blue" , "orange" , "pink" , "purple" , "green"];
        const rcolor = Math.floor(Math.random()*color.length);
        const rcolor1 = color[rcolor];
        console.log(bg.current)
        bg.current.style.background=rcolor1;
    }

  return (
    <div>
       <h1 ref={bg}>Change the background</h1>
       <button onClick={onClick}>Click ME</button>
    </div>
  )
}

export default Bg
