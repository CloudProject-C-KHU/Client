"use client";
import React from "react";
import "@/styles/list-detail.css";
import SideNav from "@/view/SideNav/SideNav";
import TextEdit from "@/component/TextEdit/TextEdit";

export default function List() {
  return (
    <div>
      <div className="page-layout">
        <SideNav />
        <div className="list-detail">
          <h1>{}</h1>
          <TextEdit />
        </div>
      </div>
    </div>
  );
}
