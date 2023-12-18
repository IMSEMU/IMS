import Image from "next/image";
import { IoMdPhotos } from "react-icons/io";
import AuthConnect from "@/auth";
import { CldUploadWidget } from "next-cloudinary";
import { useState } from "react";
import Loading from "../../globalComponents/loading";

// add post display section
export const AddPost = ({ photo, updatePosts, setHasNewPost, user }) => {
  const [media, setMedia] = useState(null);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState("");

  const capitalizeFirstLetter = (word) => {
    if (typeof word !== "string" || word.length === 0) {
      return word;
    }

    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  const handleImageUploadSuccess = (result) => {
    if (result.event === "success") {
      const url = result.info.secure_url;
      setMedia(url); // Store the URL in state
    }
  };

  const addPost = async () => {
    setLoading(true);
    try {
      const response = await AuthConnect.post("/addpost", {
        text: text,
        media: media,
      });
      if (response) {
        const newPost = response.data;
        updatePosts({
          post: newPost,
          postauthor: {
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email,
          },
          photo: photo,
          comments: [],
          likes: [],
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

  if (loading) {
    return <Loading />;
  }

  return (
    <section className="p-2 bg-white dark:bg-dark_1 items-center justify-center px-4 sm:px-12 md:px-20 mx-auto">
      <div className="w-[40rem] lg:w-[40rem] mx-auto flex flex-wrap rounded bg-white drop-shadow-md border-background_shade_2 border">
        {/* first */}
        <div className="flex justify-start gap-2 mx-4  mt-3 pb-3 border-b-background_shade_2 border-b w-full">
          {/* image */}
          <Image
            height={100}
            width={100}
            src={photo ? photo : "/avatar.png"}
            alt="profile picture"
            className="border w-[3rem] h-[3rem] rounded-full"
          />

          {/* text display */}
          <div className="cursor-pointer bg-background_shade border border-background_shade_2 flex items-center rounded-md w-full">
            <textarea
              placeholder={`What's on your mind ${capitalizeFirstLetter(
                user.firstname
              )}?`}
              className="p-2 w-full h-full outline-none text-xs sm:text-base text-black font-semi-bold"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
        </div>
        {media && (
          <Image
            height={1000}
            width={1000}
            src={media}
            alt="profile picture"
            className="w-[15rem] h-[15rem] justify-center mx-auto"
          />
        )}

        {/* second section */}
        <div className="flex justify-between items-center mx-4 my-2 w-full">
          {/* photo icon */}
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

          {/* post button */}
          <button
            className="px-4 cursor-pointer py-1.5 font-normal bg-blue text-white rounded "
            onClick={addPost}
          >
            Post
          </button>
        </div>
      </div>
    </section>
  );
};
