import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    if (!user) {
        return <Navigate to="/login" state={location.pathname}></Navigate>
    }
    if (loading) {
        return <span className="loading loading-bars loading-lg text-[#1abc9c] text-center h-[500px] flex items-center mx-auto"></span>
    }
    return (
        <div>
            {children}
        </div>
    );
};

export default PrivateRoute;
PrivateRoute.propTypes = {
    children: PropTypes.object
}