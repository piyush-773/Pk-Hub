import { Navigate } from "react-router-dom";
import { axiosInstance } from "./AxiosInstance";
import Loader from "../components/Loader";
import { useEffect, useState } from "react";

const ProtectedRoute = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(null);
    useEffect(() => {
        const checkAuth = async () => {
            try {
                const response = await axiosInstance.get("/auth/verify-token");
                if (response.data.success) setIsAuthenticated(true);
            } catch (error) {
                setIsAuthenticated(false);
            }
            checkAuth();
        };
    }, []);

    if (isAuthenticated === null) return <Loader />;
    return isAuthenticated ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
