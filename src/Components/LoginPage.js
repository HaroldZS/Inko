import React, { useEffect, useState } from "react";
import { users } from "../data/users";

function LogInPage() {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const setEmail = (e) => {
    const email = e.target.value;
    setUserData({
      ...userData,
      email,
    });
  };

  const setPassword = (e) => {
    const password = e.target.value;
    setUserData({
      ...userData,
      password,
    });
  };

  const onLogIn = (e) => {
    e.preventDefault();
    const findUser = users.find(
      (user) =>
        user.email === userData.email && user.password === userData.password,
    );

    findUser
      ? console.log("The user exists")
      : console.log("The user doesn't exists");
  };

  useEffect(() => {}, []);

  return (
    <div className="flex justify-center pt-[42px]">
      <div className="flex w-[211px] flex-col items-center rounded-lg border-[0.5px] border-[#EEEEEE]/20 bg-[#31363F]">
        <h1 className="mb-4 mt-2 text-[12px] font-semibold text-[#76ABAE]">
          Welcome Back!
        </h1>
        <form
          className="flex w-[163px] flex-col gap-2 text-[10px] text-[#EEEEEE]"
          onSubmit={onLogIn}
        >
          <input
            type="text"
            className="h-[23px] rounded-[6px] border-[0.5px] border-[#EEEEEE]/20 bg-transparent pl-2 placeholder-[#EEEEEE] placeholder:text-[10px] focus:outline-none"
            placeholder="Email"
            value={userData.email}
            onChange={setEmail}
          />
          <input
            type="password"
            className="h-[23px] rounded-[6px] border-[0.5px] border-[#EEEEEE]/20 bg-transparent pl-2 placeholder-[#EEEEEE] placeholder:text-[10px] focus:outline-none"
            placeholder="Password"
            value={userData.password}
            onChange={setPassword}
          />
          <button className="mb-4 mt-1 h-[23px] rounded-[6px] bg-[#76ABAE] text-center font-medium">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}

export { LogInPage };
