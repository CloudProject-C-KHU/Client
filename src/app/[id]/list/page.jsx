"use client";
import "@/styles/list.css";
import { useEffect, useState } from "react";

import ChatList from "@/component/ChatList/ChatList";
import SideNav from "@/view/SideNav/SideNav";
import Header from "@/view/Header/Header";
export default function List() {
  const [isOpen, setIsOpen] = useState(true);
  useEffect(() => {
    const chatListContainer = document.querySelector(".list");
    chatListContainer.style.overflowY = "auto";
  }, []);
  return (
    <div>
      <div className="page-layout">
        <SideNav />
        <div className="list">
          <h1> main page & chat list</h1>
          <ChatList />
        </div>
      </div>
    </div>
  );
}
