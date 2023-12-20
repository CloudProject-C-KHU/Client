"use client";
import React from "react";
import "@/styles/list-detail.css";
import SideNav from "@/component/SideNav/SideNav";
import TextEdit from "@/component/TextEdit/TextEdit";
import { usePathname, useSearchParams } from "next/navigation";

export default function List() {
  const params = useSearchParams();
  const title = params.get("title");
  const _id = params.get("id");
  return (
    <div>
      <div className="page-layout">
        <SideNav />
        <div className="list-detail">
          <h1>{title}</h1>
          <TextEdit />
        </div>
      </div>
    </div>
  );
}
