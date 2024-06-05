import React from "react";
import { useParams } from "react-router-dom";
import send from "../assets/send.svg";

function BlogDetail({ getUsers, getAuth }) {
  const { slug: blogId } = useParams();
  const users = getUsers();
  const user = getAuth();
  const blogs = users.map((user) => user.blogs).flat();
  const findBlog = blogs.find((blog) => blog.id === blogId);

  return (
    <>
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

      {user?.image && (
        <form className="fixed bottom-0 h-[55px] w-full bg-[#31363F]">
          <div className="absolute bottom-[12px] flex w-full justify-center gap-4 px-4">
            <img
              src={user.image}
              className="h-[23px] w-[23px] rounded-full border-2 border-[#EEEEEE]/20"
              alt="user"
            />
            <input
              type="text"
              className="h-[23px] w-[263px] rounded-[6px] border-[0.5px] border-[#EEEEEE]/20 bg-transparent pl-2 placeholder-[#EEEEEE] placeholder:text-[10px] focus:outline-none"
              placeholder="Share your opinion"
              // value={userData.email}
              // onChange={setEmail}
            />
            <button className="flex h-[23px] w-[25px] items-center justify-center rounded-[8px] bg-[#76ABAE]">
              <img className="h-[18px] w-[18px]" src={send} alt="Send" />
            </button>
          </div>
        </form>
      )}
    </>
  );
}

export { BlogDetail };
