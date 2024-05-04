import React from "react";
import { routes } from "../Routes/routes";
import { NavLink } from "react-router-dom";

function Menu() {
  return (
    <nav className="bg-[#EEEEEE] w-full h-[50px] flex justify-between items-center px-[17px]">
      <p className="text-[#76ABAE] text-[16px] font-extrabold">Inko</p>
      <ul className="flex gap-4 text-[#76ABAE] text-[12px] font-medium">
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
