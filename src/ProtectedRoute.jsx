import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function ProtectedRoute() {
  const routes = useSelector((state) => state.routes.routes);
  return routes ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectedRoute;
