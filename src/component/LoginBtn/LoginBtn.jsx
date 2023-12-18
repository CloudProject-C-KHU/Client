"use client";
import { MDBBtn } from "mdb-react-ui-kit";
import "../LoginBtn/login-btn.css";
import { KAKAO_LOGIN, login } from "@/api";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function LoginBtn() {
  // const router = useRouter();
  // const [isCode, setIsCode] = useState("");
  // const [id, setId] = useState("");
  // const searchParams = useSearchParams();
  //
  // useEffect(() => {
  //   const code = searchParams.get("code");
  //   if (code) {
  //     try {
  //       FetchLogin(code);
  //     } catch (e) {
  //       console.error(e);
  //     }
  //   }
  // }, []);
  //
  // const FetchLogin = (code) => {
  //   console.log("in Fetch" + "  " + code);
  //   fetch(login, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ code: code }),
  //   })
  //     .then((response) => {
  //       if (response.ok) {
  //         response.json().then((data) => {
  //           console.log(response);
  //           setId(data.id);
  //           router.push(data.id + "/list");
  //         });
  //       } else {
  //         console.log("실패");
  //         // router.push("/");
  //       }
  //     })
  //     .catch((error) => {
  //       console.error("Error during login:", error);
  //     });
  // };

  const handleLogin = () => {
    // router.push("list");
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
