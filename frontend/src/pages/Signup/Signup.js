import React from 'react'
import '../Login/Login.css'
import baseUrl from '../../utils/urls'
import axios from 'axios'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'



function Signup() {

const navigate = useNavigate()

const[email,setEmail]= useState("")
const[username,setUsername]=useState("");
const[password,setPassword]=useState("");

const handlesubmit=async(e)=>{
	await axios.post(`${baseUrl}/register/`,{
            "email" : email,
            "username":username,
            "password":password
        }).then((Response)=>{
            console.log(Response)
            if(Response.status===201){
              
              navigate('/login')
            }
      
       
       })

}

  return (
    <div>
          <div class="Login__container">
	<div class="Login__content">
		<div class="Login__banner">
			<h1>YOUR TEXT HERE</h1>
			<h3>Here's the information, about your company, product, I don't know.</h3>
			<br/>
			<h3>Feel free.</h3>
		</div>
		<div class="Login__form">
			<img class='Login__img' src="https://i.pinimg.com/236x/4d/a8/bb/4da8bb993057c69a85b9b6f2775c9df2.jpg" alt="profile"/>
			<p class='Login__para'>Already have an Account? <a class="Login__a" href="/"> Sign in</a></p>
			<input type="email" autocomplete placeholder="Email"  onChange={(e)=>setEmail(e.target.value)} />
            <input type="text" autocomplete placeholder="username" onChange={(e)=>setUsername(e.target.value)}  />
			<input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
			<button class='Login__btn' type="submit" onClick={handlesubmit} >Sign Up</button>
		</div>
	</div>
</div>
    </div>
  )
}

export default Signup
