import React from "react";
import { useNavigate } from "react-router-dom";

function BlogsPage({ getUsers }) {
  const users = getUsers();
  const navigate = useNavigate();

  return (
    <div className="flex justify-center pt-[16px]">
      <div className="grid w-[343px] grid-cols-1">
        {users.map((user) =>
          user.blogs.map((blog) => (
            <div
              className="mb-[12px] flex h-[65px] w-auto gap-4 rounded-[8px] border-[0.5px] border-[#EEEEEE]/20 bg-[#31363F] p-2"
              key={blog.id}
              onClick={() => navigate(blog.id)}
            >
              <img
                src={blog.image}
                className="h-[35px] w-[35px] rounded-full border-2 border-[#EEEEEE]/20"
                alt="user"
              />
              <div>
                <p className="text-[12px] font-semibold text-[#76ABAE]">
                  {blog.title}
                </p>
                <p className="text-[10px] font-medium text-[#EEEEEE]">
                  {blog.subTitle}
                </p>
              </div>
            </div>
          )),
        )}
      </div>
    </div>
  );
}

export { BlogsPage };
