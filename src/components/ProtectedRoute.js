import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const ProtectedRoute = (props) => {
  const navigate = useNavigate();
  const { user, loading } = useAuth();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (!loading && user) {
      setIsAuthenticated(true);
    } else if (!loading && !user) {
      navigate("/");
    }
  }, [loading, user]);

  if (isAuthenticated) {
    return props.children;
  } else {
    return null;
  }
};

export default ProtectedRoute;
