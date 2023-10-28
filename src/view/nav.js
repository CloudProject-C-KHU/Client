"use client";

import styles from "../styles/nav.css";
import { useEffect, useState } from "react";

export default function Nav() {
  // 상태관리
  const [isOpen, setIsOpen] = useState(true);
  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  // useEffect(() => {
  //   const button = document.querySelector("." + styles.button);
  //   button.addEventListener("click", toggleNav);
  // }, [isOpen]);

  return (
    <>
      <nav>
        <div className="nav">
          <div className="user-info-wrap">
            <span> 유저 정보 칸 </span>
            <button>{isOpen ? <span>close</span> : <span>open</span>}</button>
          </div>
          <div>
            <div>
              <span>친구 목록</span>
            </div>
            <div>
              <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
