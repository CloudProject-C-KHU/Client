"use client";
import styles from "./page.module.css";
import Link from "next/link";
import { useEffect } from "react";
import KakaoLogin from "react-kakao-login";

export default function Home() {
  const chatURL = "/list";
  const responseKaKao = (response) => {
    // 카카오 로그인 성공 시 실행되는 콜백 함수
    console.log(response);

    // 서버로 토큰 전송
    sendTokenToServer(response.access_token);
  };

  const sendTokenToServer = async (accessToken) => {
    try {
      const response = await fetch(
        "http://localhost:4000/auth/kakao/callback",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ accessToken }),
        },
      );

      if (response.ok) {
        const userData = await response.json();
        console.log("User data from server:", userData);
        // 여기서 필요에 따라 상태 업데이트 등을 수행할 수 있습니다.
      } else {
        console.error("Failed to send token to server");
      }
    } catch (error) {
      console.error("Error sending token to server:", error);
    }
  };
  return (
    <main className={styles.main}>
      <div>
        <div>
          <h1 className={styles.h1}>🗒️공유 메모</h1>
        </div>
        <div>
          <h2 className={styles.h2}>
            <div className={styles.test}>노트를 간편하게</div>
            <div>공유해 보세요</div>
          </h2>
        </div>
        <KakaoLogin
          token="c79a3544b3466643b7709be0f727f138"
          onSuccess={responseKaKao}
          onFail={(error) => console.log(error)}
          onLogout={() => console.log("Logout")}
          useLoginForm
        />
      </div>
    </main>
  );
}
