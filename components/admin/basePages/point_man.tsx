// @ts-nocheck
import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import Placeholder from "@tiptap/extension-placeholder";
import Image from "@tiptap/extension-image";
import Highlight from "@tiptap/extension-highlight";
import StarterKit from "@tiptap/starter-kit";
import TextAlign from "@tiptap/extension-text-align";
import { Editor } from "@tiptap/core";
import { EditorContent, useEditor } from "@tiptap/react";
import { Modal, Space, Dropdown, message, Button } from "antd";
import {
  UnorderedListOutlined,
  OrderedListOutlined,
  BoldOutlined,
  ItalicOutlined,
  FileImageOutlined,
  AlignLeftOutlined,
  AlignCenterOutlined,
  AlignRightOutlined,
  DownOutlined,
} from "@ant-design/icons";
import GetImage from "../getImageComponent";

let addImage;
let editor;

const MenuBar = ({ editor, showModal }) => {
  if (!editor) {
    return null;
  }

  addImage = (id) => {
    editor
      .chain()
      .focus()
      .setImage({
        src: `${process.env.NEXT_PUBLIC_API_URL}/image/${id}`,
      })
      .run();
  };

  return (
    <div className="flex gap-3 flex-wrap bg-[#000C17] text-white tiptap-menu justify-around py-[10px]">
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={editor.isActive("heading", { level: 1 }) ? "is-active" : ""}
      >
        h<sub>1</sub>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={editor.isActive("heading", { level: 2 }) ? "is-active" : ""}
      >
        h<sub>2</sub>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={editor.isActive("heading", { level: 3 }) ? "is-active" : ""}
      >
        h<sub>3</sub>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
        className={editor.isActive("heading", { level: 4 }) ? "is-active" : ""}
      >
        h<sub>4</sub>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
        className={editor.isActive("heading", { level: 5 }) ? "is-active" : ""}
      >
        h<sub>5</sub>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
        className={editor.isActive("heading", { level: 6 }) ? "is-active" : ""}
      >
        h<sub>6</sub>
      </button>
      <button
        onClick={() => editor.chain().focus().setParagraph().run()}
        className={editor.isActive("paragraph") ? "is-active" : ""}
      >
        p
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={editor.isActive("bold") ? "is-active" : ""}
      >
        <BoldOutlined />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={editor.isActive("italic") ? "is-active" : ""}
      >
        <ItalicOutlined />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHighlight().run()}
        className={editor.isActive("highlight") ? "is-active" : ""}
      >
        highlight
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={editor.isActive("bulletList") ? "is-active" : ""}
      >
        <UnorderedListOutlined />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={editor.isActive("orderedList") ? "is-active" : ""}
      >
        <OrderedListOutlined />
      </button>
      <button onClick={showModal}>
        <FileImageOutlined />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={editor.isActive("blockquote") ? "is-active" : ""}
      >
        blockquote
      </button>
      <button onClick={() => editor.chain().focus().setHorizontalRule().run()}>
        horizontal rule
      </button>
      <button onClick={() => editor.chain().focus().setHardBreak().run()}>
        hard break
      </button>
      <button onClick={() => editor.chain().focus().unsetAllMarks().run()}>
        clear marks
      </button>
      <button
        onClick={() => editor.chain().focus().setTextAlign("left").run()}
        className={editor.isActive({ textAlign: "left" }) ? "is-active" : ""}
      >
        <AlignLeftOutlined />
      </button>
      <button
        onClick={() => editor.chain().focus().setTextAlign("center").run()}
        className={editor.isActive({ textAlign: "center" }) ? "is-active" : ""}
      >
        <AlignCenterOutlined />
      </button>
      <button
        onClick={() => editor.chain().focus().setTextAlign("right").run()}
        className={editor.isActive({ textAlign: "right" }) ? "is-active" : ""}
      >
        <AlignRightOutlined />
      </button>
      <button
        onClick={() => editor.chain().focus().undo().run()}
        disabled={!editor.can().chain().focus().undo().run()}
      >
        undo
      </button>
      <button
        onClick={() => editor.chain().focus().redo().run()}
        disabled={!editor.can().chain().focus().redo().run()}
      >
        redo
      </button>
    </div>
  );
};

const EditPointMan = ({ pageToEdit }) => {
  //local state
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleEdit = async () => {
    setLoading(true);
    const { data } = await axios.put(`/base_page/point_man`, {
      details: editor.getHTML(),
    });
    if (data.ok) {
      message.success("Page edited successfully");
    } else {
      message.error(`Error: ${data.error}`);
    }
    setLoading(false);
  };

  //modal function
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  //load images
  useEffect(() => {
    const getImages = async () => {
      const { data } = await axios.get("/images");
      setImages(data);
    };
    const getPointManPage = async () => {
      const { data } = await axios.get(`/base_page/point_man`);
      const removeHeadingTag = data.content
        .split("</h1>")
        .filter((item: string) => item != "<h1>The Point Man")
        .join("");

      editor = new Editor({
        content: removeHeadingTag,
        extensions: [
          StarterKit,
          Placeholder.configure({
            placeholder: ({ node }) => {
              if (node.type.name === "heading" && node.attrs.level === 1) {
                return "What’s the title?";
              }

              return "Can you add content for the 'poin man' page?";
            },
          }),
          Highlight,
          TextAlign.configure({
            types: ["heading", "paragraph"],
          }),
          Image,
        ],
      });
    };
    if (pageToEdit == "About Point Man") {
      getImages();
      getPointManPage();
    }
  }, [pageToEdit]);

  return (
    <>
      <div style={{ position: "relative", top: 0 }}>
        <MenuBar editor={editor} showModal={showModal} />
        <div className="tiptap-content">
          <Button className="publish" onClick={handleEdit} loading={loading}>
            Edit
          </Button>
          <EditorContent editor={editor} style={{ marginBottom: "50px" }} />
          <Modal
            title="Image Getter"
            open={isModalOpen}
            width={800}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <Space size={[8, 16]} wrap>
              {images?.map((image) => (
                <GetImage
                  image={image}
                  key={image._id}
                  clickedFrom="post"
                  handleOk={handleOk}
                  addImage={addImage}
                />
              ))}
            </Space>
            <hr />
          </Modal>
        </div>
      </div>
    </>
  );
};
export default EditPointMan;
