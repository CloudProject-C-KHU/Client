"use client";
import "../../styles/list.css";
import { useEffect, useState } from "react";
import SideNav from "@/view/SideNav/SideNav";
import ChatList from "@/component/ChatList";
export default function List() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="page-layout">
      <SideNav />
      <div className="list">
        <h1> main page & chat list</h1>
        <ChatList />
      </div>
    </div>
  );
}
