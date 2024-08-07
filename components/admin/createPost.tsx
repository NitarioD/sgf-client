import React, { useEffect, useState, useContext } from "react";
import { AdminContentContext } from "../../contexts";
import axios from "axios";
import Placeholder from "@tiptap/extension-placeholder";
import Image from "@tiptap/extension-image";
import Highlight from "@tiptap/extension-highlight";
import StarterKit from "@tiptap/starter-kit";
import TextAlign from "@tiptap/extension-text-align";
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
import GetImage from "./getImageComponent";

// @ts-ignore
let addImage;
// @ts-ignore
let changeContent;

// @ts-ignore
const MenuBar = ({ editor, showModal }) => {
  if (!editor) {
    return null;
  }

  // @ts-ignore
  addImage = (id) => {
    editor
      .chain()
      .focus()
      .setImage({
        src: `${process.env.NEXT_PUBLIC_API_URL}/image/${id}`,
      })
      .run();
  };

  changeContent = () => {
    editor.commands.setContent("<h1></h1>");
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

const CreatePost = () => {
  //get admin context via context
  const [content, setContent] = useContext(AdminContentContext);

  //local state
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState("");

  // handle selected option for post category
  // @ts-ignore
  const handleCategorySelection = (e) => {
    const selectedCategory = e.target.attributes.category.value;
    setCategory(selectedCategory);
    message.success(`${selectedCategory} selected`);
  };

  //options in post category
  const items = [
    {
      label: (
        // @ts-ignore
        <div onClick={handleCategorySelection} category="evangelism">
          Evangelistic Report
        </div>
      ),
      key: "0",
    },
    {
      label: (
        // @ts-ignore
        <div onClick={handleCategorySelection} category="teaching">
          Teaching
        </div>
      ),
      key: "1",
    },

    {
      label: (
        // @ts-ignore
        <div onClick={handleCategorySelection} category="publication">
          Publication
        </div>
      ),
      key: "2",
    },
  ];

  const handleSubmit = async () => {
    setLoading(true);
    const { data } = await axios.post("/post", {
      // @ts-ignore
      ...editor.getJSON(),
      // @ts-ignore
      html: editor.getHTML(),
      category,
    });
    if (data?.ok) {
      message.success("post created");
      // @ts-ignore
      changeContent();
      setCategory("");
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
    if (content == "Create Post") {
      const getImages = async () => {
        const { data } = await axios.get("/images");
        setImages(data);
      };
      getImages();
    }
  }, [content]);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: ({ node }) => {
          if (node.type.name === "heading" && node.attrs.level === 1) {
            return "What’s the title?";
          }

          return "Can you add some further context?";
        },
      }),
      Highlight,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Image,
    ],
    content: "<h1></h1>",
  });

  return content == "Create Post" ? (
    <div style={{ position: "relative", top: 0 }}>
      <MenuBar editor={editor} showModal={showModal} />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ padding: "1rem" }}>
          Selected Post Category:{" "}
          <span
            style={{ background: "blue", padding: "5px", borderRadius: "6px" }}
          >
            {category}
          </span>
        </div>
        <Dropdown
          menu={{
            items,
          }}
        >
          <a onClick={(e) => e.preventDefault()} style={{ padding: "1rem" }}>
            <Space>
              Select Post Category
              <DownOutlined />
            </Space>
          </a>
        </Dropdown>
      </div>

      <div className="tiptap-content">
        <Button className="publish" onClick={handleSubmit} loading={loading}>
          submit
        </Button>
        <EditorContent editor={editor} style={{ marginBottom: "50px" }} />
        <Modal
          title="Image Getter"
          open={isModalOpen}
          onOk={handleOk}
          width={800}
          onCancel={handleCancel}
        >
          <Space size={[8, 16]} wrap>
            {images?.map((image) => (
              // @ts-ignore
              <GetImage
                image={image}
                // @ts-ignore
                key={image._id}
                clickedFrom="post"
                handleOk={handleOk}
                // @ts-ignore
                addImage={addImage}
              />
            ))}
          </Space>
          <hr />
        </Modal>
      </div>
    </div>
  ) : (
    <></>
  );
};
export default CreatePost;
