import React from "react";
import { useNavigate } from "react-router-dom";

function BlogsPage({ getUsers, getAuth, setAuth, updateUsers }) {
  const user = getAuth();
  const users = getUsers();
  const navigate = useNavigate();

  const deleteBlog = (id) => {
    const index = user.blogs.findIndex((blog) => blog.id === id);
    user.blogs.splice(index, 1);
    const findUser = users.find((element) => element.id === user.id);
    Object.assign(findUser, user);
    updateUsers(users);
    setAuth(user);
  };

  return (
    <div className="flex justify-center pt-[16px]">
      <div className="grid w-[343px] grid-cols-1">
        {users?.map((userItem) =>
          userItem?.blogs.map((blog) => (
            <div
              className="relative mb-[12px] flex h-[65px] w-auto gap-4 rounded-[8px] border-[0.5px] border-[#EEEEEE]/20 bg-[#31363F] p-2"
              key={blog.id}
              onClick={() => navigate(blog.id)}
            >
              {(userItem.id === user.id || user.role === "admin") && (
                <div
                  className="absolute right-[-9px] top-[-9px] flex h-[18px] w-[18px] cursor-pointer items-center justify-center rounded-[8px] border-[0.5px] border-[#EEEEEE]/20 bg-[#76ABAE] text-[10px] font-medium text-[#EEEEEE]"
                  onClick={(e) => {
                    e.stopPropagation();
                    deleteBlog(blog.id);
                  }}
                >
                  X
                </div>
              )}
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
