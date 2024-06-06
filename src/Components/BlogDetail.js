import React, { useState } from "react";
import { useParams } from "react-router-dom";
import send from "../assets/send.svg";
import edit from "../assets/edit.svg";
import { getRandomId } from "../utils/getRandomId";

const commentInitialState = (user) => ({
  text: "",
  author: user?.name,
  authorId: user?.id,
  image: user?.image,
  id: "",
});

function BlogDetail({ getUsers, getAuth, setAuth, updateUsers }) {
  const [editingId, setEditingId] = useState(null);
  const { slug: blogId } = useParams();
  const users = getUsers();
  const user = getAuth();
  const blogs = users.map((user) => user.blogs).flat();
  const findBlog = blogs.find((blog) => blog.id === blogId);
  const [commentPayload, setCommentPayload] = useState(
    commentInitialState(user),
  );

  const resetComment = () => {
    setCommentPayload(commentInitialState(user));
  };

  const setComment = (e) => {
    setCommentPayload({
      ...commentPayload,
      text: e.target.value,
    });
  };

  const onCommentSubmit = (e) => {
    e.preventDefault();
    const newComment = {
      ...commentPayload,
      id: getRandomId(),
    };
    findBlog.comments.push(newComment);
    const currentUser = users.find((item) => item.id === user.id);
    Object.assign(user, currentUser);
    setAuth(user);
    updateUsers(users);
    resetComment();
  };

  const deleteComment = (id) => {
    const index = findBlog.comments.findIndex((comment) => comment.id === id);
    findBlog.comments.splice(index, 1);
    const currentUser = users.find((item) => item.id === user.id);
    Object.assign(user, currentUser);
    setAuth(user);
    updateUsers(users);
  };

  const editComment = (id, lastComment) => {
    setEditingId(id);
    setCommentPayload({
      ...lastComment,
    });
  };

  const onEditSubmit = (e) => {
    e.preventDefault();
    const lastComment = findBlog.comments.find(
      (comment) => comment.id === editingId,
    );
    Object.assign(lastComment, commentPayload);
    const currentUser = users.find((item) => item.id === user.id);
    Object.assign(user, currentUser);
    setAuth(user);
    updateUsers(users);
    setEditingId(null);
    resetComment();
  };

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

      {findBlog?.comments.length > 0 && (
        <div className="mx-auto flex w-[375px] flex-col gap-4 px-4 pt-[24px] mb-[71px]">
          {findBlog?.comments.map((comment, index) => (
            <div
              className={`relative flex w-fit gap-4 ${index % 2 !== 0 && "self-end"} rounded-[8px] border-[0.5px] border-[#EEEEEE]/20 bg-[#31363F] p-2 ${comment.authorId === user.id && "pb-1 pr-1"}`}
              key={comment.id}
            >
              {comment.authorId === user.id && (
                <div
                  className="absolute right-[-9px] top-[-9px] flex h-[18px] w-[18px] cursor-pointer items-center justify-center rounded-[8px] border-[0.5px] border-[#EEEEEE]/20 bg-[#76ABAE] text-[10px] font-medium text-[#EEEEEE]"
                  onClick={(e) => {
                    e.stopPropagation();
                    deleteComment(comment.id);
                  }}
                >
                  X
                </div>
              )}
              <img
                src={comment.image}
                className="h-[35px] w-[35px] rounded-full border-2 border-[#EEEEEE]/20"
                alt="user"
              />
              <div>
                <p className="text-[12px] font-semibold text-[#76ABAE]">
                  {comment.author}
                </p>
                <p className="pb-3 pr-2 text-[10px] font-medium text-[#EEEEEE]">
                  {editingId === comment.id ? "Editing..." : comment.text}
                </p>
              </div>
              {comment.authorId === user.id && (
                <img
                  className="h-[18px] w-[18px] self-end"
                  src={edit}
                  alt="edit"
                  onClick={() => editComment(comment.id, comment)}
                />
              )}
            </div>
          ))}
        </div>
      )}

      {user?.image && (
        <form
          className="fixed bottom-0 h-[55px] w-full bg-[#31363F]"
          onSubmit={!editingId ? onCommentSubmit : onEditSubmit}
        >
          <div className="absolute bottom-[12px] flex w-full justify-center gap-4 px-4">
            <img
              src={user.image}
              className="h-[23px] w-[23px] rounded-full border-2 border-[#EEEEEE]/20"
              alt="user"
            />
            <input
              type="text"
              className="h-[23px] w-[263px] rounded-[6px] border-[0.5px] border-[#EEEEEE]/20 bg-transparent pl-2 text-[10px] font-medium text-[#EEEEEE] placeholder-[#EEEEEE] placeholder:text-[10px] focus:outline-none"
              placeholder="Share your opinion"
              value={commentPayload.text}
              onChange={setComment}
            />
            <button className="flex h-[23px] w-[25px] items-center justify-center rounded-[8px] bg-[#76ABAE]">
              <img className="h-[18px] w-[18px]" src={send} alt="send" />
            </button>
          </div>
        </form>
      )}
    </>
  );
}

export { BlogDetail };
