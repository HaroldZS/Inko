import React from "react";
import { Navigate } from "react-router-dom";

function AuthRoute({ getAuth, children, roles }) {
  const user = getAuth();

  if (roles.includes(user.role)) {
    return children;
  }

  return <Navigate to="/" replace />;
}

export { AuthRoute };
