"use client";
import styles from "./page.module.css";
import LoginBtn from "@/component/LoginBtn/LoginBtn";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { login } from "@/api";
export default function Home() {
  // const router = useRouter();
  // const [isCode, setIsCode] = useState(null);
  // const [id, setId] = useState(null);
  // const searchParams = useSearchParams();
  // useEffect(() => {
  //   const code = searchParams.get("code");
  //   setIsCode(code);
  //   if (code !== null) {
  //     try {
  //       console.log("fetch 실행");
  //       FetchLogin();
  //     } catch (e) {
  //       console.error(e);
  //     }
  //   }
  // }, [isCode]);
  //
  // const FetchLogin = async () => {
  //   try {
  //     console.log("FetchLogin 작동 code == ", isCode); // 잘나옴
  //     const response = await fetch(login, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ code: isCode }), //
  //     });
  //     if (response.ok) {
  //       const responseData = await response.json();
  //       const userId = responseData.id;
  //       setId(userId);
  //     } else {
  //       console.error("Error from server:", response.status);
  //     }
  //   } catch (error) {
  //     console.error("Error sending data to server:", error);
  //   }
  // };
  const router = useRouter();
  const [isCode, setIsCode] = useState(null);
  const [id, setId] = useState(null);
  const searchParams = useSearchParams();

  useEffect(() => {
    const code = searchParams.get("code");
    setIsCode(code);
  }, [searchParams]);

  const memoizedFetchLogin = useMemo(() => {
    const FetchLogin = async () => {
      try {
        console.log("FetchLogin 작동 code == ", isCode);
        const response = await fetch(login, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ code: isCode }),
        });
        const responseData = await response.json();
        console.log(responseData);
        if (response.ok) {
          const userId = responseData.id;
          setId(userId);
          router.push(userId + "/list");
        } else {
          console.error("Error from server:", response.status);
        }
      } catch (error) {
        console.error("Error sending data to server:", error);
      }
    };

    return FetchLogin;
  }, [isCode]);

  useEffect(() => {
    if (isCode !== null) {
      try {
        console.log("fetch 실행");
        memoizedFetchLogin(); // 여기에 괄호를 추가해야 합니다.
      } catch (e) {
        console.error(e);
      }
    }
  }, [isCode, memoizedFetchLogin]);

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
