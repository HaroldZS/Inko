import React, { useState } from "react";
import { getRandomId } from "../utils/getRandomId";
import { useNavigate } from "react-router-dom";

function NewBlog({ getAuth, getUsers, updateUsers, setAuth }) {
  const user = getAuth();
  const users = getUsers();
  const navigate = useNavigate();
  const [blogPayload, setBlogPayload] = useState({
    id: getRandomId(),
    image:
      "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    subTitle: "",
    title: "",
    description: "",
    comments: [],
  });

  const setSubTitle = (e) => {
    setBlogPayload({
      ...blogPayload,
      subTitle: e.target.value,
    });
  };

  const setTitle = (e) => {
    setBlogPayload({
      ...blogPayload,
      title: e.target.value,
    });
  };

  const setDescription = (e) => {
    setBlogPayload({
      ...blogPayload,
      description: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    user.blogs.push(blogPayload);
    const findUser = users.find((element) => element.id === user.id);
    Object.assign(findUser, user);
    console.log(user);
    console.log(findUser);
    console.log(users);
    updateUsers(users);
    setAuth(user);
    navigate(`/blogs/${blogPayload.id}`);
    console.log("Blog created!");
  };

  return (
    <div className="flex justify-center pt-[42px]">
      <div className="flex w-[225px] flex-col items-center rounded-lg border-[0.5px] border-[#EEEEEE]/20 bg-[#31363F]">
        <h1 className="mb-4 mt-2 text-[12px] font-semibold text-[#76ABAE]">
          What a work ;)
        </h1>
        <form
          className="flex w-[177px] flex-col gap-2 text-[10px] text-[#EEEEEE]"
          onSubmit={onSubmit}
        >
          <input
            type="text"
            className="h-[23px] rounded-[6px] border-[0.5px] border-[#EEEEEE]/20 bg-transparent pl-2 placeholder-[#EEEEEE] placeholder:text-[10px] focus:outline-none"
            placeholder="Title"
            value={blogPayload.title}
            onChange={setTitle}
          />
          <input
            type="text"
            className="h-[23px] rounded-[6px] border-[0.5px] border-[#EEEEEE]/20 bg-transparent pl-2 placeholder-[#EEEEEE] placeholder:text-[10px] focus:outline-none"
            placeholder="SubTitle"
            value={blogPayload.subTitle}
            onChange={setSubTitle}
          />
          <textarea
            type="text"
            className="h-[54px] rounded-[6px] border-[0.5px] border-[#EEEEEE]/20 bg-transparent pl-2 pt-[6px] placeholder-[#EEEEEE] placeholder:text-[10px] focus:outline-none"
            placeholder="Your humble Canvas  ✍️"
            value={blogPayload.description}
            onChange={setDescription}
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
