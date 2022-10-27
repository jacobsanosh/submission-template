import React from 'react'
import './Login.css'
function Login() {
  return (
    <div class="Login__container">
	<div class="Login__content">
		<div class="banner">
			<h1>YOUR TEXT HERE</h1>
			<h3>Here's the information, about your company, product, I don't know.</h3>
			<br/>
			<h3>Feel free.</h3>
		</div>
		<div class="Login__form">
			<img src="https://i.pinimg.com/236x/4d/a8/bb/4da8bb993057c69a85b9b6f2775c9df2.jpg" alt="profile"/>
			<p>Need an Account? <a href=""> Sign Up</a></p>
			<input type="email" autocomplete placeholder="Email"/>
			<input type="password" placeholder="Password"/>
			<button type="submit">Sign In</button>
			<a href="" id="r">Forgot Your Password?</a>
		</div>
	</div>
</div>
  )
}

export default Login
