"use client";
import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import io from "socket.io-client";

export const socket = io("http://localhost:3001");

export default function TextEdit() {
  const [isText, setIsText] = useState("");
  const html = isText;
  // 소켓 연결 후 이벤트 핸들러 등록
  useEffect(() => {
    socket.connect();
    try {
      socket.on("connect", () => {
        console.log("연결됨", socket.connected);
      });
    } catch (error) {
      console.log("연결 실패");
    }
    // 컴포넌트가 언마운트될 때 소켓 연결 해제
    return () => {
      socket.disconnect();
    };
  }, []);

  useEffect(() => {
    socket.emit("html", html);
  }, [isText]);

  socket.on("response", (res) => {
    console.log("Response: ", res);
  });

  console.log(isText);
  console.log("html =>", html);
  return (
    <div>
      <ReactQuill theme="snow" value={isText} onChange={setIsText} />
    </div>
  );
}
