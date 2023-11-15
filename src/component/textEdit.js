"use client";
// import "../styles/textEdit.css";
// import DOMPurify from "dompurify";
import dynamic from "next/dynamic";
import { EditorState } from "draft-js";
import { convertToHTML } from "draft-convert";
import React, { useEffect, useState } from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import io from "socket.io-client";
import { error } from "next/dist/build/output/log";
export const Editor = dynamic(
  () => import("react-draft-wysiwyg").then((mod) => mod.Editor),
  {
    ssr: false,
  },
);
// <<<<<<< HEAD
// // export const socket = io("wq:example");
// export const socket = io("http://localhost:3001");
// =======
export const socket = io("http://localhost:3001", {
  withCredentials: true,
});

// >>>>>>> e831a79ee5deebd63921ccf05941e1b8b81f069e
export default function TextEdit() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  // const [convertedContent, setConvertedContent] = useState(null);
  //html 변환 함수
  let html = convertToHTML(editorState.getCurrentContent());
  // 요건 마크업 변경 작업하다가 놔둔거니 신경 쓰지 마세요
  function createMarkup(html) {
    return {
      __html: DOMPurify.sanitize(html),
    };
  }

  /* 소켓 연결 부분 - 컴포넌트 마운트시 */
  useEffect(() => {
    socket.connect();
    try {
      socket.on("connect", () => {
        console.log(socket.connected); // true
      });
    } catch (e) {
      error();
    }
  }, []);
  /* 데이터 전송 - editorState 변경 시에만 */
  useEffect(() => {
    // console.log("html: ", html);
    socket.emit("html", html);
  }, [editorState]);

  /* 연결 확인 코드*/
  // socket.on("connect", () => {
  //   console.log(socket.connected); // true
  // });
  //
  // socket.on("connect", () => {
  //   console.log("끊어짐?" + socket.disconnected); // false
  // });
  return (
    <div>
      <Editor
        toolbar={{
          list: { inDropdown: true },
          textAlign: { inDropdown: true },
          link: { inDropdown: true },
          history: { inDropdown: true },
        }}
        localization={{
          locale: "ko",
        }}
        plugins={[toolbar]}
        editorState={editorState}
        onEditorStateChange={setEditorState}
      />

      <textarea
        className="textarea-box"
        placeholder="여기는 콘솔이랑 똑같아요"
        disabled
        value={html}
      />
    </div>
  );
}
