"use client";

import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setPublicationPosts } from "@/store/slices/postsSlice";
import { getPublicationPosts } from "@/api/api_communications";

export default function Template({ children }: { children: React.ReactNode }) {
  const dispatch = useAppDispatch();
  const publication = useAppSelector((s) => s.posts.publication);

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await getPublicationPosts();
      dispatch(setPublicationPosts(data));
    };
    if (!publication[0]) {
      fetchPosts();
    }
  }, [publication, dispatch]);

  return <div>{children}</div>;
}
