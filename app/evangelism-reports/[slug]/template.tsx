"use client";

import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setEvangelismPosts } from "@/store/slices/postsSlice";
import { getEvangelismPosts } from "@/api/api_communications";

export default function Template({ children }: { children: React.ReactNode }) {
  const dispatch = useAppDispatch();
  const evangelism = useAppSelector((s) => s.posts.evangelism);

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await getEvangelismPosts();
      dispatch(setEvangelismPosts(data));
    };
    if (!evangelism[0]) {
      fetchPosts();
    }
  }, [evangelism, dispatch]);

  return <div>{children}</div>;
}
