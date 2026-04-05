// @ts-nocheck
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAdminContent } from "@/hooks/useAdminContent";
import Subscribers from "./getSubscribers";
import Subscriber from "./getSubscriber";
import UploadImage from "./uploadImage";
import ViewImages from "./viewImages";
import CreatePost from "./createPost";
import ViewPost from "./viewPosts";
import CreateVideos from "./addVideos";
import ViewVideos from "./viewVideos";
import EditBasePages from "./editBasePages";
import BroadcastMessage from "./broadcast_message";

import {
  FileAddOutlined,
  SearchOutlined,
  UserOutlined,
  FormOutlined,
  BorderOutlined,
  FileImageOutlined,
  LogoutOutlined,
  EditOutlined,
  VideoCameraOutlined,
  VideoCameraAddOutlined,
  MessageOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem("Posts", "sub1", <BorderOutlined />, [
    getItem("Create Post", "1", <FormOutlined />),
    getItem("View Posts", "2", <SearchOutlined />),
  ]),
  getItem("Edit BasePages", "3", <EditOutlined />),
  getItem("Images", "sub2", <FileImageOutlined />, [
    getItem("Add Image", "4", <FileAddOutlined />),
    getItem("View Image", "5", <SearchOutlined />),
  ]),
  getItem("Videos", "sub3", <VideoCameraOutlined />, [
    getItem("Add Videos", "6", <VideoCameraAddOutlined />),
    getItem("View Videos", "7", <SearchOutlined />),
  ]),
  getItem("Subscribers", "8", <UserOutlined />),
  getItem("Broadcast Message", "9", <MessageOutlined />),
  getItem("Logout", "10", <LogoutOutlined />),
];

const DashBoard = () => {
  const [windowWidth, setWindowWidth] = useState(1024);

  const [collapsed, setCollapsed] = useState(false);
  const [subscriberId, setSubscriberId] = useState("");

  const [content, setContent] = useAdminContent();

  const router = useRouter();

  useEffect(() => {
    const onResize = () => setWindowWidth(window.innerWidth);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    if (windowWidth <= 580) setCollapsed(true);
  }, [windowWidth]);

  const {
    token: { colorBgContainer },
  } = theme.useToken();
  // do something when menu is clicked
  const handleClick = async (item) => {
    switch (item.key) {
      case "1":
        setContent("Create Post");
        break;
      case "2":
        setContent("View Posts");
        break;
      case "3":
        setContent("Edit BasePages");
        break;
      case "4":
        setContent("add image");
        break;
      case "5":
        setContent("view images");
        break;
      case "6":
        setContent("Add Videos");
        break;
      case "7":
        setContent("View Videos");
        break;
      case "8":
        setContent("subscribers");
        break;
      case "9":
        setContent("broadcast");
        break;
      case "10":
        localStorage.removeItem("auth");
        router.push("/signin");
        break;

      default:
        break;
    }
  };
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          defaultSelectedKeys={[]}
          mode="inline"
          onClick={handleClick}
          items={items}
        />
      </Sider>
      <Layout>
        <Content className="overflow-auto mt-[24px] mx-[16px]">
          <Subscribers setSubscriberId={setSubscriberId} />
          <Subscriber subscriberId={subscriberId} />
          <UploadImage />
          <ViewImages />
          <CreatePost />
          <ViewPost />
          <CreateVideos />
          <ViewVideos />
          <EditBasePages />
          <BroadcastMessage />
        </Content>
      </Layout>
    </Layout>
  );
};
export default DashBoard;
