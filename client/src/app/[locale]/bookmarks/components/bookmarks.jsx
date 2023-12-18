"use client";
import { Posts } from "../../discussionForum/components/post";
import { ProtectedRoute } from "../../globalComponents/stdProtectedRoute";
import { PcSideNav } from "../../globalComponents/pcSideNav";
import { TopNav } from "../../globalComponents/topNav";
import { MobileNav } from "../../globalComponents/mobileNav";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import jwtDecode from "jwt-decode";
import AuthConnect from "@/auth";
import Loading from "../../globalComponents/loading";

export const BookmarksPage = () => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [posts, setPosts] = useState([]);
  const [hasNewPost, setHasNewPost] = useState(false);

  const checkLikesandBookmarks = () => {
    posts.forEach((post) => {
      const isLiked = post.likes.some((like) => like.email === user.email);

      post.isLikedByUser = isLiked;

      const isBookmarked = post.bookmarks.some(
        (bookmark) => bookmark.email === user.email
      );

      post.isBookmarkedByUser = isBookmarked;
    });
    console.log("Updated posts:", posts);
  };

  useEffect(() => {
    const getToken = async () => {
      try {
        const response = await AuthConnect.get("/token");

        // Decode the token immediately after setting it
        try {
          const decoded = jwtDecode(response.data);
          setUser(decoded);
          console.log(decoded);
        } catch (error) {
          console.error("Error decoding token:", error);
        }
      } catch (error) {
        console.error("User not authenticated", error);
        router.push("/login");
      }
    };

    getToken();
  }, []);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await AuthConnect.get("/getbookmarks");
        setPosts(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching feed:", error);
      }
    };

    fetchPosts();
  }, []);

  useEffect(() => {
    if (hasNewPost) {
      const fetchPosts = async () => {
        try {
          const response = await AuthConnect.get("/getbookmarks");
          setPosts(response.data);
          console.log(response.data);
        } catch (error) {
          console.error("Error fetching feed:", error);
        }
      };

      fetchPosts();
      setHasNewPost(false);
      checkLikesandBookmarks();
    }
  }, [hasNewPost]);

  useEffect(() => {
    const getPhoto = async () => {
      try {
        const response = await AuthConnect.get("/getphoto");
        setPhoto(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching photo:", error);
      }
    };

    getPhoto();
  }, []);

  if (posts) {
    checkLikesandBookmarks();
  }

  if (!user) {
    return <Loading />;
  }

  return (
    <main className={"p-0 m-0 bg-white dark:bg-dark_2"}>
      {/*Sidenav and body*/}
      <div className={"flex flex-nowrap"}>
        <PcSideNav />
        <div className={"h-full w-full"}>
          <TopNav />
          <ProtectedRoute>
            <Posts
              posts={posts}
              photo={photo}
              setHasNewPost={setHasNewPost}
              user={user}
            />
          </ProtectedRoute>
        </div>

        <MobileNav />
      </div>
    </main>
  );
};
