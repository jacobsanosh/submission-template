import React from 'react'
import './Login.css'
import baseUrl from '../../utils/urls'
// import axios from 'axios'
import axiosInstance from '../../utils/axios'
 import {useNavigate} from 'react-router-dom'
import {useState} from 'react'
import axios from 'axios'
import { Navigate } from 'react-router-dom'


function Login() {
	 const navigate=useNavigate();


	const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")

	const handlelogin= async(e)=>{
        e.preventDefault()
        axiosInstance.post(`${baseUrl}/api/token/`,{
            "email": email,
            "password" : password
        }).then((res)=>{
            console.log(res)
            localStorage.setItem('access_token',res.data.access);
            localStorage.setItem('refresh_token',res.data.refresh);
            axiosInstance.defaults.headers['Authorization']= 'Bearer ' + localStorage.getItem('access_token');
            if(res.status===200)
			navigate('/')
        }).catch((err)=>console.log(err))

    }

  return (
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
			<p class='Login__para'>Need an Account? <a class="Login__a" href="/"> Sign Up</a></p>
			<input type="email" autocomplete placeholder="Email" onChange={(e)=>setEmail(e.target.value)} />
			<input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
			<button class='Login__btn' type="submit" onClick={handlelogin} >Sign In</button>
			<a class='Login__a' href="/" id="r">Forgot Your Password?</a>
		</div>
	</div>
</div>
  )
}

export default Login
