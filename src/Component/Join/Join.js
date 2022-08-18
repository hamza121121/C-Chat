import React, { useState } from 'react'
import "./Join.css"
import logo from "../../images/logo.png"
import {Link} from "react-router-dom"

let user;
const sendUser = ()=>{
    user = document.getElementById("JoinInput").value;
    document.getElementById("JoinInput").value="";
}

const Join = () => {
    const [name , setName]=useState("")
  return (
    <div>
      <div className="JoinPage">
        <div className="JoinContainer">
         <img src={logo} alt="logo" />
            <h1>C CHAT</h1>
            <input onChange={(e)=> setName(e.target.value)} placeholder='Enter Your Name' type="text"  id="JoinInput" />
            <Link onClick={(e)=> !name ? e.preventDefault():null} to="/chat"><button onClick={sendUser} className='JoinBtn'>Login</button></Link>
        </div>
      </div>
    </div>
  )
}

export default Join;
export{user}
