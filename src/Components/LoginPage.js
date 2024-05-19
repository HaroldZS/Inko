import React from "react";

function LoginPage() {
  return (
    <div className="flex justify-center pt-[42px]">
      <div className="flex w-[211px] flex-col items-center rounded-lg border-[0.5px] border-[#EEEEEE]/20 bg-[#31363F]">
        <h1 className="mb-4 mt-2 text-[12px] font-semibold text-[#76ABAE]">
          Welcome Back!
        </h1>
        <form className="flex w-[163px] flex-col gap-2">
          <input
            className="rounded-[6px] border-[0.5px] border-[#EEEEEE]/20 bg-transparent placeholder-[#EEEEEE] placeholder:pl-2 placeholder:text-[10px]"
            placeholder="Email"
          />
          <input
            className="rounded-[6px] border-[0.5px] border-[#EEEEEE]/20 bg-transparent placeholder-[#EEEEEE] placeholder:pl-2 placeholder:text-[10px]"
            placeholder="Password"
          />
          <button className="mb-4 h-[23px] rounded-[6px] bg-[#76ABAE] text-center text-[10px] font-medium text-[#EEEEEE]">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}

export { LoginPage };
