import React, { useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { getRandomId } from "../utils/getRandomId";

function SignInPage({ addUser, setAuth }) {
  const { login } = useAuth(setAuth);
  const [repeatPassword, setRepeatPassword] = useState("");
  const [userPayload, setUserPayload] = useState({
    id: getRandomId(),
    image: "",
    name: "",
    lastname: "",
    email: "",
    password: "",
    role: "user",
    blogs: [],
  });

  const setName = (e) =>
    setUserPayload({
      ...userPayload,
      name: e.target.value,
    });

  const setLastname = (e) => {
    setUserPayload({
      ...userPayload,
      lastname: e.target.value,
    });
  };
  const setEmail = (e) => {
    setUserPayload({
      ...userPayload,
      email: e.target.value,
    });
  };

  const setPassword = (e) => {
    setUserPayload({
      ...userPayload,
      password: e.target.value,
    });
  };

  const setImage = (e) => {
    setUserPayload({
      ...userPayload,
      image: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (userPayload.password === repeatPassword && userPayload.password) {
      console.log("Created user");
      addUser(userPayload);
      login(userPayload);
    } else {
      console.log("Incorrect password match");
    }
  };

  useEffect(() => {}, []);

  return (
    <div className="flex justify-center pt-[42px]">
      <div className="flex w-[225px] flex-col items-center rounded-lg border-[0.5px] border-[#EEEEEE]/20 bg-[#31363F]">
        <h1 className="mb-4 mt-2 text-[12px] font-semibold text-[#76ABAE]">
          Join Us
        </h1>
        <form
          className="flex w-[177px] flex-col gap-2 text-[10px] text-[#EEEEEE]"
          onSubmit={onSubmit}
        >
          <div className="flex gap-2">
            <input
              type="text"
              className="h-[23px] w-[76px] rounded-[6px] border-[0.5px] border-[#EEEEEE]/20 bg-transparent pl-2 placeholder-[#EEEEEE] placeholder:text-[10px] focus:outline-none"
              placeholder="Name"
              value={userPayload.name}
              onChange={setName}
            />
            <input
              type="text"
              className="h-[23px] w-[93px] rounded-[6px] border-[0.5px] border-[#EEEEEE]/20 bg-transparent pl-2 placeholder-[#EEEEEE] placeholder:text-[10px] focus:outline-none"
              placeholder="Lastname"
              value={userPayload.lastname}
              onChange={setLastname}
            />
          </div>
          <input
            type="text"
            className="h-[23px] rounded-[6px] border-[0.5px] border-[#EEEEEE]/20 bg-transparent pl-2 placeholder-[#EEEEEE] placeholder:text-[10px] focus:outline-none"
            placeholder="Email"
            value={userPayload.email}
            onChange={setEmail}
          />
          <input
            type="password"
            className="h-[23px] rounded-[6px] border-[0.5px] border-[#EEEEEE]/20 bg-transparent pl-2 placeholder-[#EEEEEE] placeholder:text-[10px] focus:outline-none"
            placeholder="Password"
            value={userPayload.password}
            onChange={setPassword}
          />
          <input
            type="password"
            className="h-[23px] rounded-[6px] border-[0.5px] border-[#EEEEEE]/20 bg-transparent pl-2 placeholder-[#EEEEEE] placeholder:text-[10px] focus:outline-none"
            placeholder="Repeat password"
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
          />
          <input
            type="text"
            className="h-[23px] rounded-[6px] border-[0.5px] border-[#EEEEEE]/20 bg-transparent pl-2 placeholder-[#EEEEEE] placeholder:text-[10px] focus:outline-none"
            placeholder="Your image link  👤"
            value={userPayload.image}
            onChange={setImage}
          />
          <button className="mb-4 mt-1 h-[23px] rounded-[6px] bg-[#76ABAE] text-center font-medium">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}

export { SignInPage };
