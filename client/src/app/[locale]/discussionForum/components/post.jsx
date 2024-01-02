"use client";
import Image from "next/image";
import { useState } from "react";
import { FaCommentDots, FaHeart, FaBookmark } from "react-icons/fa6";
import { IoMdPhotos } from "react-icons/io";
import { Empty } from "antd";
import { CldUploadWidget } from "next-cloudinary";
import AuthConnect from "@/auth";
import Loading from "../../globalComponents/loading";
import { GiTrashCan } from "react-icons/gi";
import { useTranslations } from "next-intl";

export const Posts = ({ posts, photo, setHasNewPost, user }) => {
  const t = useTranslations("discussion");
  const [commentsState, setCommentsState] = useState({});
  const [text, setText] = useState("");
  const [media, setMedia] = useState(null);
  const [loading, setLoading] = useState(false);

  const toggleComments = (postId) => {
    setCommentsState((prev) => ({
      ...prev,
      [postId]: !prev[postId],
    }));
  };

  function addCommentToFeed(feedIndex, newComment) {
    console.log("here");
    if (feedIndex < 0 || feedIndex >= posts.length) {
      console.error("Invalid feed index");
      return;
    }

    posts[feedIndex].comments.unshift(newComment);

    console.log("Updated feed:", posts);
  }

  function removeComment(postsIndex, commentsIndex) {
    if (postsIndex >= 0 && postsIndex < posts.length) {
      const post = posts[postsIndex];

      if (commentsIndex >= 0 && commentsIndex < post.comments.length) {
        post.comments.splice(commentsIndex, 1);

        console.log("Updated feed:", posts);
      } else {
        console.error("Invalid comments index");
      }
    } else {
      console.error("Invalid posts index");
    }
  }

  const addComment = async (postid, index) => {
    setLoading(true);
    try {
      const response = await AuthConnect.post("/addcomment", {
        text: text,
        media: media,
        postid: postid,
      });
      if (response) {
        const newComment = response.data;
        addCommentToFeed(index, {
          comment: newComment,
          commentauthor: {
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email,
          },
          photo: photo,
        });
        setHasNewPost(true);
        setLoading(false);
        setText("");
        setMedia(null);
      }
    } catch (error) {
      setLoading(false);
      if (error.response) {
        setMsg(error.response.data.msg);
      }
      alert("Application Error"); // You can add a generic error message here
    }
  };

  const LikePost = async (postid) => {
    setLoading(true);
    try {
      const response = await AuthConnect.post("/likepost", {
        postid: postid,
      });
      if (response) {
        setHasNewPost(true);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      if (error.response) {
        setMsg(error.response.data.msg);
      }
      alert("Application Error"); // You can add a generic error message here
    }
  };

  const UnlikePost = async (postid) => {
    setLoading(true);
    try {
      const response = await AuthConnect.post("/unlikepost", {
        postid: postid,
      });
      if (response) {
        setHasNewPost(true);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      if (error.response) {
        setMsg(error.response.data.msg);
      }
      alert("Application Error"); // You can add a generic error message here
    }
  };

  const DeletePost = async (postid) => {
    setLoading(true);
    try {
      const response = await AuthConnect.post("/deletepost", {
        postid: postid,
      });
      if (response) {
        setHasNewPost(true);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      if (error.response) {
        setMsg(error.response.data.msg);
      }
      alert("Application Error"); // You can add a generic error message here
    }
  };

  const DeleteComment = async (commentid, postIndex, commentIndex) => {
    setLoading(true);
    try {
      const response = await AuthConnect.post("/deletecomment", {
        commentid: commentid,
      });
      if (response) {
        removeComment(postIndex, commentIndex);
        setHasNewPost(true);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      if (error.response) {
        setMsg(error.response.data.msg);
      }
      alert("Application Error"); // You can add a generic error message here
    }
  };

  const BookmarkPost = async (postid) => {
    setLoading(true);
    try {
      const response = await AuthConnect.post("/bookmarkpost", {
        postid: postid,
      });
      if (response) {
        setHasNewPost(true);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      if (error.response) {
        setMsg(error.response.data.msg);
      }
      alert("Application Error"); // You can add a generic error message here
    }
  };

  const DeleteBookmark = async (postid) => {
    setLoading(true);
    try {
      const response = await AuthConnect.post("/deletebookmark", {
        postid: postid,
      });
      if (response) {
        setHasNewPost(true);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      if (error.response) {
        setMsg(error.response.data.msg);
      }
      alert("Application Error"); // You can add a generic error message here
    }
  };

  const handleImageUploadSuccess = (result) => {
    if (result.event === "success") {
      const url = result.info.secure_url;
      setMedia(url); // Store the URL in state
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <section className="p-2 bg-white dark:bg-dark_1 items-center justify-center px-4 sm:px-12 md:px-20 mx-auto">
      {posts.length === 0 ? (
        <div className=" font-semibold text-lg text-center text-white">
          <Empty />
        </div>
      ) : (
        posts.map((feed, index) => (
          <div
            className="w-[40rem] lg:w-[40rem] mx-auto dark:bg-dark_2 mb-5 rounded bg-white drop-shadow-md border-background_shade_2 border relative overflow-hidden"
            key={feed.post.postid}
          >
            <div className="justify-between w-full flex">
              <div className="p-4 flex justify-start items-center gap-3">
                {/* user profile */}
                <Image
                  height={100}
                  width={100}
                  src={feed.photo ? feed.photo : "/avatar.png"}
                  alt="profile picture"
                  className="border w-[3rem] h-[3rem] rounded-full"
                />

                {/* username and id */}
                <div className="flex  flex-wrap align-center">
                  <p className=" font-bold md:text-lg capitalize dark:text-white">
                    {feed.postauthor.firstname} {feed.postauthor.lastname}
                  </p>
                </div>
              </div>
              <div className="justify-end flex p-4 gap-5">
                {feed.isBookmarkedByUser ? (
                  <div onClick={() => DeleteBookmark(feed.post.postid)}>
                    <FaBookmark className="cursor-pointer text-xl text-yellow hover:scale-110  duration-300 ease-in-out" />
                  </div>
                ) : (
                  <div onClick={() => BookmarkPost(feed.post.postid)}>
                    <FaBookmark className="cursor-pointer text-xl dark:text-white text-black/25 hover:scale-110  duration-300 ease-in-out" />
                  </div>
                )}

                {user.email === feed.postauthor.email && (
                  <div onClick={() => DeletePost(feed.post.postid)}>
                    <GiTrashCan className="cursor-pointer text-xl text-red hover:scale-110  duration-300 ease-in-out" />
                  </div>
                )}
              </div>
            </div>
            <div className="my-2 px-3 flex justify-start w-full dark:text-white">
              <p className="w-full">{feed.post.text}</p>
            </div>

            {/* post image */}
            {feed.post.media && (
              <div className="w-full flex items-center overflow-hidden">
                <Image
                  height={1000}
                  width={1000}
                  src={feed.post.media}
                  alt=""
                  className=" w-full  min-h-[20rem] h-fit hover:scale-110  duration-500 ease-in-out"
                />
              </div>
            )}

            {/* like and comments section */}
            <div className="justify-between flex">
              <div className="flex justify-start md:gap-1.5 px-3 py-2 text-2xl md:text-3xl">
                <div className="cursor-pointer flex  items-center justify-center flex-wrap w-fit">
                  {feed.isLikedByUser ? (
                    <div className="text-red">
                      <FaHeart
                        className="hover:scale-110  duration-300 ease-in-out"
                        onClick={() => UnlikePost(feed.post.postid)}
                      />
                    </div>
                  ) : (
                    <div className="text-black/25">
                      <FaHeart
                        className="hover:scale-110 dark:text-white duration-300 ease-in-out"
                        onClick={() => LikePost(feed.post.postid)}
                      />
                    </div>
                  )}
                  <p className="text-xs sm:text-sm w-full dark:text-white text-black justify-center text-center">
                    {feed.post.likesCount}{" "}
                    {feed.post.likesCount === 1 ? t("like") : t("likes")}
                  </p>
                </div>
                <div
                  onClick={() => toggleComments(feed.post.postid)}
                  className="cursor-pointer dark:text-white flex items-center justify-center flex-wrap w-fit"
                >
                  <FaCommentDots />
                  <p className="text-xs sm:text-sm dark:text-white w-full justify-center text-center">
                    {feed.post.commentsCount}{" "}
                    {feed.post.commentsCount === 1
                      ? t("comment")
                      : t("comments")}
                  </p>
                </div>
              </div>
              <div className="justify-end text-xs dark:text-white px-3 pt-10">
                {feed.post.createdAt.split("T")[0]}{" "}
                {feed.post.createdAt.split("T")[1].split(".")[0]}
              </div>
            </div>
            {commentsState[feed.post.postid] && (
              <div className="from-top ">
                <div className="max-h-[20rem]  m-1 flex justify-center">
                  <div className="overflow-y-auto w-[35rem] ">
                    {/* user comment */}
                    {feed.comments.length > 0 &&
                      feed.comments.map((cmnt, index) => (
                        <div
                          key={cmnt.comment.commentid}
                          className="flex flex-wrap w-full dark:text-white items-center px-3 pt-3 border-background_shade_2 border-b-2 pb-2"
                        >
                          {/* name and pic */}
                          <div className="justify-between w-full flex">
                            <div className="justify-start items-center gap-1.5 flex w-full">
                              <Image
                                height={100}
                                width={100}
                                src={cmnt.photo ? cmnt.photo : "/avatar.png"}
                                alt="profile picture"
                                className=" w-[2.5rem] h-[2.5rem] rounded-full"
                              />
                              {/* username and id */}
                              <div className="truncate flex w-full flex-wrap ">
                                <p className="truncate font-bold text-md capitalize w-full">
                                  {cmnt.commentauthor.firstname}{" "}
                                  {cmnt.commentauthor.lastname}
                                </p>
                              </div>
                            </div>

                            {user.email === cmnt.commentauthor.email && (
                              <div
                                className="justify-end flex p-4"
                                onClick={() =>
                                  DeleteComment(
                                    cmnt.comment.commentid,
                                    index,
                                    feed.comments.indexOf(cmnt)
                                  )
                                }
                              >
                                <GiTrashCan className="text-xl text-red" />
                              </div>
                            )}
                          </div>

                          {/* comment message */}
                          <div className="w-full flex justify-between  items-center h-fit ml-[2.5rem]">
                            <div className="mt-2 h-fit justify-start">
                              {cmnt.comment.text}
                            </div>
                            <div className="justify-end text-xs">
                              {cmnt.comment.createdAt.split("T")[0]}{" "}
                              {
                                cmnt.comment.createdAt
                                  .split("T")[1]
                                  .split(".")[0]
                              }
                            </div>
                          </div>
                          {cmnt.comment.media && (
                            <div className="w-full flex items-center overflow-hidden">
                              <Image
                                height={1000}
                                width={1000}
                                src={cmnt.comment.media}
                                alt=""
                                className=" w-full  min-h-[20rem] h-fit"
                              />
                            </div>
                          )}
                        </div>
                      ))}
                  </div>
                </div>

                {/* add a comment */}
                <div className="rounded bg-white dark:bg-dark_2 drop-shadow-md border-background_shade_2 border">
                  <div className="p-2 flex justify-center mx-auto">
                    <div className="inline-flex justify-between items-center gap-4 p-2 w-full">
                      {/* comment section */}
                      <div className="flex gap-2  w-full">
                        {/* comment input */}
                        <div className="border-2 border-background_shade_2 rounded w-full">
                          <textarea
                            placeholder={t("newComment")}
                            className="p-2 w-full h-full outline-none dark:text-white dark:bg-dark_3 text-xs sm:text-base text-black font-semi-bold"
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                          />
                        </div>
                      </div>

                      {/* post comment */}
                      <div className="flex gap-4">
                        <CldUploadWidget
                          uploadPreset="p5tgbjfx"
                          onSuccess={handleImageUploadSuccess}
                        >
                          {({ open }) => {
                            function handleOnClick(e) {
                              e.preventDefault();
                              open();
                            }
                            return (
                              <button onClick={handleOnClick}>
                                <div className="text-4xl cursor-pointer text-yellow">
                                  <IoMdPhotos />
                                </div>
                              </button>
                            );
                          }}
                        </CldUploadWidget>
                        <button
                          className="text-white bg-blue rounded px-4 py-1.5"
                          onClick={() => addComment(feed.post.postid, index)}
                        >
                          {t("post")}
                        </button>
                      </div>
                    </div>
                  </div>
                  {media && (
                    <Image
                      height={1000}
                      width={1000}
                      src={media}
                      alt="profile picture"
                      className="w-[15rem] h-[15rem] justify-center mx-auto mb-2"
                    />
                  )}
                </div>
              </div>
            )}
          </div>
        ))
      )}
    </section>
  );
};
