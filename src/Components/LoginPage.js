import React from "react";

function LoginPage() {
  return (
    <div className="flex justify-center pt-[42px]">
      <div className="flex flex-col w-[211px] bg-[#31363F] rounded-lg border-[0.5px] border-[#EEEEEE]/20 items-center">
        <h1 className="text-[#76ABAE] text-[12px] font-semibold mt-2 mb-4">
          Welcome Back!
        </h1>
        <form className="flex flex-col w-[163px] gap-2">
          <input
            className="rounded-[6px] border-[0.5px] border-[#EEEEEE]/20 bg-transparent placeholder-[#EEEEEE] placeholder:text-[10px] placeholder:pl-2"
            placeholder="Email"
          />
          <input
            className="rounded-[6px] border-[0.5px] border-[#EEEEEE]/20 bg-transparent placeholder-[#EEEEEE] placeholder:text-[10px] placeholder:pl-2"
            placeholder="Password"
          />
          <button className="h-[23px] bg-[#76ABAE] text-center text-[10px] text-[#EEEEEE] rounded-[6px] font-medium mb-4">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}

export { LoginPage };
