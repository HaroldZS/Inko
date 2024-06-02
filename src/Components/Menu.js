import React from "react";
import { routes } from "../Routes/routes";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

function Menu({ getAuth, setAuth }) {
  const user = getAuth();
  const { logout } = useAuth(setAuth);
  const navigate = useNavigate();

  return (
    <nav className="flex h-[50px] w-full items-center justify-between bg-[#EEEEEE] px-[17px]">
      <p
        className="text-[16px] font-extrabold text-[#76ABAE]"
        onClick={() => navigate("/")}
      >
        Inko
      </p>
      <ul className="flex gap-4 text-[12px] font-medium text-[#76ABAE]">
        {routes.map((route) => {
          if (user?.name && route.publicOnly) return null;
          if (!user?.name && !route.public) return null;

          return (
            <li key={route.id}>
              {route.text === "Logout" ? (
                <NavLink to={route.to} onClick={logout}>
                  {route.text}
                </NavLink>
              ) : (
                <NavLink to={route.to}>{route.text}</NavLink>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export { Menu };
