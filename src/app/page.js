"use client";
import styles from "./page.module.css";
import Link from "next/link";
import { useEffect } from "react";

export default function Home() {
  const chatURL = "/list";
  const url =
    "https://kauth.kakao.com/oauth/authorize?client_id=c79a3544b3466643b7709be0f727f138&redirect_uri=http://localhost:3000/auth/kakao/callback&response_type=code'";

  const loginBtn = async () => {
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        const data = await response.json();
        // 데이터를 쿠키에 저장
        document.cookie = `usersInfo=${JSON.stringify(data)}`;
        // "/list" 페이지로 이동
        window.location.href = "/list";
      } else {
        // 응답이 실패한 경우
        throw new Error(`로그인 실패: ${response.status}`);
      }
    } catch (e) {
      // 오류 처리
      console.error(e);
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

        {/*<Link href={chatURL}>*/}
        <button className={styles.login} onClick={loginBtn}>
          <div>kakao Login</div>
        </button>
        {/*</Link>*/}
      </div>
    </main>
  );
}
