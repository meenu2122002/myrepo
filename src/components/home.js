import React from 'react'
import a from "./bk.jpg"
import b from "./Ai.jpg"
import c from "./gym.jpeg"
import { useState } from 'react'
function Home() {
  const [state,setstate]=useState(a)
  
  return (

   <>
   <div style={{backgroundImage:`url(${state})`,position:"absolute",top:"80px",height:"80vh",width:"100%",fontStyle:"italic",zIndex:1}}>
   
   
    <h1 style={{margin:"71px 334px",color:"#d8c4c4"}}>Welcome to NewsMonkey app</h1>
   <p style={{color:"rgb(230 231 232)",margin:"-40px 179px",fontSize:"25px"}}>Simply get the news on clicking the interested field in navigation bar .News websites and mainstream media keep you up to date with what's going on. But, with so much fake news and media bias out there, you need to choose reputable, unbiased news sources News websites and mainstream media keep you up to date with what's going on. But, with so much fake news and media bias out there,</p>
   
 
    
   </div>
<div  style={{height:"80vh",width:"100vw",position:"absolute",top:"80px",zIndex:2,backgroundColor:"rgb(0 0 0 / 59%)"}}>

</div>
   
   
   </>
  )
}

export default Home
