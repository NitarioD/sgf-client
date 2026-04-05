"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";
import { Pagination } from "antd";
import { Editor } from "@tiptap/core";
import Image from "@tiptap/extension-image";
import Highlight from "@tiptap/extension-highlight";
import { EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useAppSelector } from "@/store/hooks";
import capitaliseHeader from "@/helperFunctions/capitaliseHeader";
import Loading from "@/components/loading";

// @ts-ignore
let editor;

const Publications = ({ params }: { params: { slug: string } }) => {
  const [postLoaded, setPostLoaded] = useState(false);
  const posts = useAppSelector((s) => s.posts.evangelism) as {
    content: string;
  }[];

  const router = useRouter();

  useEffect(() => {
    if (posts[0]) {
      if (parseInt(params.slug) > posts.length) {
        return router.push("/404");
      }
      const formattedArticle = capitaliseHeader(
        posts[parseInt(params.slug) - 1].content
      );

      editor = new Editor({
        extensions: [StarterKit, Highlight, Image],
        content: formattedArticle,
        editable: false,
      });
      setPostLoaded(true);
    }
  }, [posts, params.slug, router]);

  const onPageChange = (page: number) => {
    // @ts-ignore
    // editor.commands.setContent(capitaliseHeader(posts[page - 1].content));
    router.push(`/evangelism-reports/${page}`);
  };

  return postLoaded ? (
    <>
      <div id="post" className="flex w-full max-w-full items-start justify-center gap-0">
        <Badge variant="outline" id="tag">
          <span>Evangelism</span>
        </Badge>
        <div className="relative min-w-0 flex-1 px-0 sm:px-1">
          {/* @ts-ignore */}
          <EditorContent editor={editor} />
          <div className="mt-8 flex justify-center sm:mt-10">
            <Pagination
              size="small"
              defaultCurrent={parseInt(params.slug)}
              onChange={onPageChange}
              pageSize={1}
              total={posts.length}
              showSizeChanger={false}
            />
          </div>
        </div>
      </div>
    </>
  ) : (
    <Loading />
  );
};

export default Publications;
