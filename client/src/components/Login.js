import React, { useState } from "react";

function Login({loggedIn, setLoggedIn, user, setUser}) {
  const [ username, setUsername ] = useState("");
  const [ password, setPassword ] = useState("");

  function handleSubmit(e){
    e.preventDefault();
    alert(username);
    alert(password);
  }
  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="enter your username" id="username" name="username" />
          <label htmlFor="password">password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" id="password" name="password" />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
