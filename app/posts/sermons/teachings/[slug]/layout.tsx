"use client";

import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setTeachingPosts } from "@/store/slices/postsSlice";
import { getTeachingPosts } from "@/api/api_communications";

export default function Template({ children }: { children: React.ReactNode }) {
  const dispatch = useAppDispatch();
  const teaching = useAppSelector((s) => s.posts.teaching);

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await getTeachingPosts();
      dispatch(setTeachingPosts(data));
    };
    if (!teaching[0]) {
      fetchPosts();
    }
  }, [teaching, dispatch]);

  return <div>{children}</div>;
}
