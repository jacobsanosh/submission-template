import React from 'react'
import './Login.css'
function Login() {
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
			<input type="email" autocomplete placeholder="Email"/>
			<input type="password" placeholder="Password"/>
			<button class='Login__btn' type="submit">Sign In</button>
			<a class='Login__a' href="/" id="r">Forgot Your Password?</a>
		</div>
	</div>
</div>
  )
}

export default Login
