"use client";

import React from "react";
import { useState, useEffect } from "react";
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

const TheSGF = () => {
  const [postLoaded, setPostLoaded] = useState(false);
  const basics = useAppSelector((s) => s.siteContent.basics) as {
    point_man?: { content?: string };
    the_sgf?: { title?: string; content?: string };
  };

  useEffect(() => {
    if (basics.the_sgf?.content) {
      const formattedArticle = capitaliseHeader(
        `<h1>${basics.the_sgf?.title ?? ""}</h1> ${basics.the_sgf?.content ?? ""}`
      );

      editor = new Editor({
        extensions: [StarterKit, Highlight, Image],
        content: formattedArticle,
        editable: false,
      });
      setPostLoaded(true);
    }
  }, [basics]);

  return postLoaded ? (
    <>
      <div id="post" className="flex justify-center">
        <div style={{ position: "relative", top: 0 }} className="w-[80vw]">
          {/* @ts-ignore */}
          <EditorContent editor={editor} />
        </div>
      </div>
    </>
  ) : (
    <Loading />
  );
};

export default TheSGF;
