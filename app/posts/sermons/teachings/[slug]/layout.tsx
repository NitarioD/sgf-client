"use client";
import { useContext, useEffect } from "react";
import { PostsContext } from "@/contexts";
import { getTeachingPosts } from "@/api/api_communications";

export default function Template({ children }: { children: React.ReactNode }) {
  const [getAllPosts, setAllPosts] = useContext(PostsContext);

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await getTeachingPosts();
      setAllPosts(data);
    };
    if (!getAllPosts[0]) {
      fetchPosts();
    }
  }, [getAllPosts, setAllPosts]);
  return <div>{children}</div>;
}
