import React from "react";
import { blogs } from "../data/blogs";

function BlogPage() {
  return (
    <div className="flex justify-center pt-[30px]">
      <div className="grid grid-cols-1 w-[345px]">
        {blogs.map((blog) => (
          <div className="w-auto h-[65px] bg-[#31363F] rounded-[5px] mb-[26px] flex flex-col justify-center pl-[13px]">
            <p className="text-[#EEEEEE] text-[12px]">{blog.title}</p>
            <p className="text-[#EEEEEE] text-[10px]">{blog.subTitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export { BlogPage };
