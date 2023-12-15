"use client";
import styles from "./page.module.css";
import LoginBtn from "@/component/LoginBtn/LoginBtn";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { login } from "@/api";

export default function Home() {
  const router = useRouter();
  const [isCode, setIsCode] = useState(null);
  const [id, setId] = useState(null);
  const searchParams = useSearchParams();
  useEffect(() => {
    const code = searchParams.get("code");
    if (code !== null) {
      try {
        // FetchLogin 함수를 async 함수로 호출하도록 변경
        const fetchData = async () => {
          await FetchLogin(code);
        };

        fetchData();
      } catch (e) {
        console.error(e);
      }
    }
  }, [searchParams]);

  const FetchLogin = async () => {
    try {
      const response = await fetch(login, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code: isCode }), //
      });

      if (response.ok) {
        setId(response);
        console.log(isCode);
      } else {
        console.error("Error from server:", response.status);
      }
    } catch (error) {
      console.error("Error sending data to server:", error);
    }
  };
  console.log("is id = " + id);
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
        <div>
          <LoginBtn />
        </div>
      </div>
    </main>
  );
}
