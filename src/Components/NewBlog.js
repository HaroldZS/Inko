import React from "react";

function NewBlog() {
  return (
    <div className="flex justify-center pt-[42px]">
      <div className="flex w-[225px] flex-col items-center rounded-lg border-[0.5px] border-[#EEEEEE]/20 bg-[#31363F]">
        <h1 className="mb-4 mt-2 text-[12px] font-semibold text-[#76ABAE]">
          What a work ;)
        </h1>
        <form
          className="flex w-[177px] flex-col gap-2 text-[10px] text-[#EEEEEE]"
          //   onSubmit={onSubmit}
        >
          <input
            type="text"
            className="h-[23px] rounded-[6px] border-[0.5px] border-[#EEEEEE]/20 bg-transparent pl-2 placeholder-[#EEEEEE] placeholder:text-[10px] focus:outline-none"
            placeholder="Title"
            //   value={userPayload.name}
            //   onChange={setName}
          />
          <input
            type="text"
            className="h-[23px] rounded-[6px] border-[0.5px] border-[#EEEEEE]/20 bg-transparent pl-2 placeholder-[#EEEEEE] placeholder:text-[10px] focus:outline-none"
            placeholder="Description"
            //   value={userPayload.lastname}
            //   onChange={setLastname}
          />
          <textarea
            type="text"
            className="h-[54px] rounded-[6px] border-[0.5px] border-[#EEEEEE]/20 bg-transparent pl-2 pt-[6px] placeholder-[#EEEEEE] placeholder:text-[10px] focus:outline-none"
            placeholder="Your humble Canvas  ✍️"
            // value={userPayload.email}
            // onChange={setEmail}
          />
          <button className="mb-4 mt-1 h-[23px] rounded-[6px] bg-[#76ABAE] text-center font-medium">
            Splash
          </button>
        </form>
      </div>
    </div>
  );
}

export { NewBlog };
