import React from "react";
import { useParams } from "react-router-dom";

function BlogDetail({ getUsers }) {
  const { slug: blogId } = useParams();
  const users = getUsers();
  const blogs = users.map((user) => user.blogs).flat();
  const findBlog = blogs.find((blog) => blog.id === blogId);

  return (
    <div className="flex justify-center pt-[45px]">
      <div className="mb-[24px] flex w-[343px] flex-col rounded-[8px] border-[0.5px] border-[#EEEEEE]/20 bg-[#31363F] p-2">
        <div className="mb-[20px] flex">
          <img
            src={findBlog.image}
            className="mr-4 h-[35px] w-[35px] rounded-full border-2 border-[#EEEEEE]/20"
            alt="user"
          />
          <div>
            <p className="text-[12px] font-semibold text-[#76ABAE]">
              {findBlog.title}
            </p>
            <p className="text-[10px] font-medium text-[#EEEEEE]">
              {findBlog.subTitle}
            </p>
          </div>
        </div>
        <p
          className="px-2 pb-2 text-[14px] font-medium text-[#EEEEEE]"
          style={{ whiteSpace: "pre-line" }}
        >
          {findBlog.description}
        </p>
      </div>
    </div>
  );
}

export { BlogDetail };
