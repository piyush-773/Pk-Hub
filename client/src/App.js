import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header.js";
import Sidebar from "./components/Sidebar.js";
import Home from "./components/Home.js";
import Signup from "./components/Signup.js";
import Login from "./components/Login.js";
import Profile from "./components/Profile.js";

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const [token, setToken] = useState("");

  return (
    <div className="App">
      <Header isLoggedIn={isLoggedIn} />
      <Sidebar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/login"
            element={
              <Login
                loggedIn={isLoggedIn}
                setLoggedIn={setLoggedIn}
                user={user}
                setUser={setUser}
              />
            }
          />
          <Route path="/profile" element={<Profile user={user} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
