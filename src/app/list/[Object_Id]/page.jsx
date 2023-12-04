"use client";
import React from "react";
import "@/styles/list-detail.css";
import SideNav from "@/view/SideNav/SideNav";
import TextEdit from "@/component/TextEdit/TextEdit";
import { usePathname, useSearchParams } from "next/navigation";

export default function List() {
  const pathname = usePathname();
  console.log("패스 네임", pathname);
  const searchParams = useSearchParams();
  const title = searchParams.get();
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
