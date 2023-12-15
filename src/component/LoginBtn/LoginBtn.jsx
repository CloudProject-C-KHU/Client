"use client";
import { MDBBtn } from "mdb-react-ui-kit";
import "../LoginBtn/login-btn.css";
import { KAKAO_LOGIN, login } from "@/api";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { router } from "next/client";

export default function LoginBtn() {
  const [isCode, setIsCode] = useState("");
  const [id, setId] = useState("");
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = `${searchParams}`;
    const code = url.replace(/^code=/, "");
    setIsCode(code);
    if (isCode !== "") {
      try {
        FetchLogin();
      } catch (e) {
        console.log(e);
      }
    } else {
    }
  }, [isCode]);
  console.log(isCode);
  const FetchLogin = () => {
    fetch(login, {
      method: "POST", // POST로 변경
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ isCode }), // isCode를 객체로 감싸서 body에 전달
    })
      .then((response) => {
        if (response.ok) {
          // 성공적으로 응답받으면 JSON 데이터를 추출하여 id를 설정하고 새로운 경로로 이동
          response.json().then((data) => {
            setId(data.id);
            router.push(`/${data.id}/list`);
          });
        } else {
          router.push("/");
        }
      })
      .catch((error) => {
        console.error("Error during login:", error);
      });
  };

  const handleLogin = () => {
    window.location.href = KAKAO_LOGIN;
  };

  return (
    <>
      <MDBBtn className="login" onClick={handleLogin}>
        KAKAO LOGIN
      </MDBBtn>
    </>
  );
}
