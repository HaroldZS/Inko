import React from "react";

function LoginPage() {
  return (
    <div className="flex justify-center pt-[42px]">
      <div className="flex w-[211px] flex-col items-center rounded-lg border-[0.5px] border-[#EEEEEE]/20 bg-[#31363F]">
        <h1 className="mb-4 mt-2 text-[12px] font-semibold text-[#76ABAE]">
          Welcome Back!
        </h1>
        <form className="flex w-[163px] flex-col gap-2 text-[10px] text-[#EEEEEE]">
          <input
            type="text"
            className="h-[23px] rounded-[6px] border-[0.5px] border-[#EEEEEE]/20 bg-transparent pl-2 placeholder-[#EEEEEE] placeholder:text-[10px] focus:outline-none"
            placeholder="Email"
          />
          <input
            type="password"
            className="h-[23px] rounded-[6px] border-[0.5px] border-[#EEEEEE]/20 bg-transparent pl-2 placeholder-[#EEEEEE] placeholder:text-[10px] focus:outline-none"
            placeholder="Password"
          />
          <button className="mb-4 mt-1 h-[23px] rounded-[6px] bg-[#76ABAE] text-center font-medium">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}

export { LoginPage };
