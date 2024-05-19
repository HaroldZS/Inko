import React from "react";
import { routes } from "../Routes/routes";
import { NavLink } from "react-router-dom";

function Menu() {
  return (
    <nav className="flex h-[50px] w-full items-center justify-between bg-[#EEEEEE] px-[17px]">
      <p className="text-[16px] font-extrabold text-[#76ABAE]">Inko</p>
      <ul className="flex gap-4 text-[12px] font-medium text-[#76ABAE]">
        {routes.map((route) => (
          <li key={route.to}>
            <NavLink
              //   style={({ isActive }) => ({ color: isActive ? "red" : "blue" })}
              to={route.to}
            >
              {route.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export { Menu };
