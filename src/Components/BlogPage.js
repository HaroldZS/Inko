import React from "react";
import { blogs } from "../data/blogs";

function BlogPage() {
  return (
    <div className="flex justify-center pt-[16px]">
      <div className="grid grid-cols-1 w-[343px]">
        {blogs.map((blog) => (
          <div className="w-auto h-[65px] bg-[#31363F] rounded-[8px] mb-[12px] flex gap-4 p-2 border-[0.5px] border-[#EEEEEE]/20">
            <img
              src={blog.image}
              className="w-[35px] h-[35px] rounded-full border-2 border-[#EEEEEE]/20"
              alt="user"
            />
            <div className="">
              <p className="text-[#76ABAE] text-[12px] font-semibold">
                {blog.title}
              </p>
              <p className="text-[#EEEEEE] text-[10px] font-medium">
                {blog.subTitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export { BlogPage };
