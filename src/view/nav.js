"use client";
import "../styles/nav.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { getFriend } from "@/const/const";
import data from "bootstrap/js/src/dom/data";
import { error } from "next/dist/build/output/log";
export default function Nav() {
  const [isfriendList, setIsfriendList] = useState([]);
  useEffect(() => {
    axios
      .get(getFriend)
      .then((reponse) => {
        let copy = [...isfriendList, ...reponse.data];
        setIsfriendList(copy);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [isfriendList]);
  return (
    <nav>
      <div>
        <h1>FriendList</h1>
        <div>
          <div>
            {isfriendList.map((friend, i) => {
              return <div>{friend[i]}</div>;
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
