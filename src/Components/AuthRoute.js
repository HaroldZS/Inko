import React from "react";
import { Navigate } from "react-router-dom";

function AuthRoute({ getAuth, children, roles }) {
  const user = getAuth();

  if (roles.includes(user.role)) {
    return children;
  }

  return <Navigate to="/" replace />;
}

function OnlyPublicRoute({ getAuth, children }) {
  const user = getAuth();

  if (!user.role) {
    return children;
  }

  return <Navigate to="/" replace />;
}

function PrivateRoute({ getAuth, children }) {
  const user = getAuth();

  if (user.role) {
    return children;
  }

  return <Navigate to="/" replace />;
}

export { AuthRoute, OnlyPublicRoute, PrivateRoute };
