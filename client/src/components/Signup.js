import React from 'react'

function Signup() {
  return (
    <div>
        <form action="login" method="post">
            <input type="text" name="fullName" id="fullName" placeholder='Enter your fullName' required/>
            <input type="text" name="username" id="username" placeholder='Enter your username' required/>
            <input type="email" placeholder='Enter your email' required/>
            <input type="file" name="coverImage" id="coverImage"/>
            <input type="file" name="avatar" id="avatar" required/>
            <input type="password" name="password" placeholder='Enter your password' required/>
            <input type="password" name="confirmPassword" placeholder='Confirm your password' required/>
            <button type="submit">Signup</button>
        </form>
    </div>
  )
}

export default Signup