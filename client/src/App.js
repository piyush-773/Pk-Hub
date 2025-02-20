import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./components/Header.js";
import Sidebar from "./components/Sidebar.js";
import Home from "./components/Home.js";
import Signup from "./pages/Signup.js";
import Login from "./pages/Login.js";
import Profile from "./pages/Profile.js";
import Subscriptions from "./pages/Subscriptions.js";
import YourChannel from "./pages/YourChannel.js";
import History from "./pages/History.js";
import Playlist from "./pages/Playlist.js";
import YourVideos from "./pages/YourVideos.js";
import WatchLater from "./pages/WatchLater.js";
import LikedVideos from "./pages/LikedVideos.js";
import ProtectedRoute from "./components/ProtectedRoute.js"; // Import ProtectedRoute

function App() {
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [user, setUser] = useState({});

    // Restore login state from localStorage
    useEffect(() => {
        const storedLoginState = localStorage.getItem("isLoggedIn") === "true";
        const storedUser = JSON.parse(localStorage.getItem("user")) || {};
        setLoggedIn(storedLoginState);
        setUser(storedUser);
    }, []);

    return (
        <Router>
            <Header isLoggedIn={isLoggedIn} />
            <div className="flex">
                <Sidebar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                        path="/signup"
                        element={!isLoggedIn ? <Signup /> : <Home />}
                    />
                    <Route
                        path="/login"
                        element={
                            !isLoggedIn ? (
                                <Login
                                    setLoggedIn={setLoggedIn}
                                    setUser={setUser}
                                />
                            ) : (
                                <Home />
                            )
                        }
                    />

                    {/* PROTECTED ROUTES */}
                    <Route
                        path="/profile"
                        element={
                            <ProtectedRoute>
                                <Profile user={user} />
                            </ProtectedRoute>
                        }
                    />
                    <Route path="/history" element={<ProtectedRoute><History /></ProtectedRoute>} />
                    <Route path="/your-videos" element={<ProtectedRoute><YourVideos /></ProtectedRoute>} />
                    <Route path="/watch-later" element={<ProtectedRoute><WatchLater /></ProtectedRoute>} />
                    <Route path="/liked-videos" element={<ProtectedRoute><LikedVideos /></ProtectedRoute>} />

                    {/* PUBLIC ROUTES */}
                    <Route path="/subscriptions" element={<Subscriptions />} />
                    <Route path="/your-channel" element={<YourChannel />} />
                    <Route path="/playlist" element={<Playlist />} />
                    <Route path="*" element={<h1>Page not found</h1>} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
