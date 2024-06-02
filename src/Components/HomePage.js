import React from "react";
import { useNavigate } from "react-router-dom";

function HomePage({ getAuth }) {
  const user = getAuth();
  const navigate = useNavigate();

  return (
    <>
      <div className="mt-[46px] flex justify-center">
        <div className="flex w-[216px] flex-col gap-3">
          <div className="flex h-[65px] items-center justify-center rounded-[8px] border-[0.5px] border-[#EEEEEE]/20 bg-[#31363F]">
            <p className="text-[12px] text-[#EEEEEE]">
              {user?.name
                ? `Welcome Back, ${user.name} :)`
                : "Welcome to Inko's blogpost!"}
            </p>
          </div>
          {user?.name ? (
            <button
              className="h-[23px] rounded-[6px] border-[0.5px] border-[#EEEEEE]/20 bg-[#76ABAE] text-[10px] font-medium text-[#EEEEEE]"
              onClick={() => navigate("new-blog")}
            >
              Wanna Ink Something
            </button>
          ) : (
            <button
              className="h-[23px] rounded-[6px] border-[0.5px] border-[#EEEEEE]/20 bg-[#76ABAE] text-[10px] font-medium text-[#EEEEEE]"
              onClick={() => navigate("sign-in")}
            >
              Haven't signed up yet?
            </button>
          )}
        </div>
      </div>
      {user?.blogs && (
        <div className="mt-[24px] flex justify-center">
          <div className="grid w-[343px] grid-cols-1">
            <p className="mb-[16px] text-[10px] font-medium text-[#EEEEEE]">
              My blogs
            </p>
            {user.blogs.map((blog) => (
              <div
                className="mb-[12px] flex h-[65px] w-auto gap-4 rounded-[8px] border-[0.5px] border-[#EEEEEE]/20 bg-[#31363F] p-2"
                key={blog.id}
                onClick={() => navigate(`/blogs/${blog.id}`)}
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
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export { HomePage };
