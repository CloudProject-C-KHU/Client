"use client";
import "@/styles/list.css";
import { useEffect, useState } from "react";

import ChatList from "@/component/ChatList/ChatList";
import SideNav from "@/component/SideNav/SideNav";
import Header from "@/view/Header/Header";
import { usePathname } from "next/navigation";
export default function List() {
  const id = usePathname();
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
