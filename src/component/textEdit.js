import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import io from "socket.io-client";

export const socket = io("http://localhost:3001", {
  cors: { origin: "*" },
});

export default function TextEdit() {
  const [isText, setIsText] = useState("");
  const html = isText;

  useEffect(() => {
    // 소켓 연결 후 이벤트 핸들러 등록
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
    // 컴포넌트가 마운트될 때 한 번만 실행되도록 변경
    if (isText !== "") {
      socket.on("html", html);
    }
  }, [html]);

  useEffect(() => {
    const handleResponse = (res) => {
      setIsText(res);
      console.log("Response: ", res);
    };

    // 이벤트 핸들러 등록
    socket.on("response", handleResponse);

    // 컴포넌트가 언마운트될 때 이벤트 핸들러 제거
    return () => {
      socket.off("response", handleResponse);
    };
  }, []); // 빈 배열로 전달하여 컴포넌트가 마운트될 때 한 번만 실행

  console.log(isText);
  console.log("html =>", html);

  return (
    <div>
      <ReactQuill theme="snow" value={isText} onChange={setIsText} />
    </div>
  );
}
