import React, { useState } from "react";
import { Link } from "react-router-dom";
import {axiosInstance} from "../components/AxiosInstance.js"

function Login({ setLoggedIn, setUser }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const response = await axiosInstance.post("user/login", {
                username,
                password,
            });
            console.log(response);
            if (response.status === 200) {
                setLoggedIn(true);
                setUser(response.data);
            } else {
                alert("Invalid username or password");
            }
        } catch (error) {
            console.error(error.response?.data || error.message);
        }
    }
    return (
        <div>
            <div>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="enter your username"
                        id="username"
                        name="username"
                    />
                    <label htmlFor="password">password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        id="password"
                        name="password"
                    />
                    <button type="submit">Login</button>
                </form>
                <p>
                    don't have account? <Link to="/signup">Register</Link>
                </p>
            </div>
        </div>
    );
}

export default Login;
