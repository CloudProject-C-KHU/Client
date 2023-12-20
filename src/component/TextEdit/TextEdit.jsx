"use client";
import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import io from "socket.io-client";
import { useSearchParams } from "next/navigation";
import { saveNote } from "@/api";
import styled from "styled-components";

const Container = styled.div`
  width: 70%;
  margin: auto;
  margin-top: 20px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Editor = styled(ReactQuill)`
  font-size: 16px;
  line-height: 1.6;
  color: #333;
  min-height: 200px;

  .ql-editor {
    font-size: 16px;
    line-height: 1.6;
    color: #333;
    min-height: 200px;
  }
`;
export const socket = io("http://localhost:3001", {
  cors: { origin: "*" },
});

export default function TextEdit() {
  const [isText, setIsText] = useState("");
  const params = useSearchParams();
  const _id = params.get("id");
  const title = params.get("title");

  const fetchNote = () => {
    fetch(saveNote + "/" + _id, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: title,
        content: isText,
      }),
    });
  };

  useEffect(() => {
    socket.connect();
    try {
      socket.on("connect", () => {
        console.log("연결됨", socket.connected);
      });
    } catch (error) {
      console.log("연결 실패");
    }

    return () => {
      socket.disconnect();
    };
  }, []);

  useEffect(() => {
    if (isText !== "") {
      socket.emit("html", isText); // "html" 이벤트 발생시 서버에 내용 전송
    }
  }, [isText]);

  useEffect(() => {
    const handleResponse = (res) => {
      setIsText(res);
      console.log("Response: ", res);
    };

    socket.on("response", handleResponse);

    return () => {
      socket.off("response", handleResponse);
    };
  }, []);

  console.log(isText);

  return (
    <Container>
      <Editor theme="snow" value={isText} onChange={setIsText} />
    </Container>
  );
}
