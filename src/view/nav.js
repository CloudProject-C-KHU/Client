"use client";
import "../styles/nav.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { getFriend } from "@/const/const";

/* example Data */
export const isfriendList = [
  {
    id: 1,
    name: "형준",
  },
  {
    id: 2,
    name: "재환",
  },
  {
    id: 3,
    name: "혜진",
  },
  {
    id: 4,
    name: "수환",
  },
  {
    id: 5,
    name: "성휘",
  },
];
export default function Nav() {
  // const [isfriendList, setIsfriendList] = useState([]);
  // useEffect(() => {
  //   axios
  //     .get(getFriend)
  //     .then((response) => {
  //       let copy = [...isfriendList, ...response.data];
  //       setIsfriendList(copy);
  //       console.log(setIsfriendList);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);
  return (
    <nav>
      s
      <div>
        <h1>FriendList</h1>
        <div>
          <div>
            {isfriendList.map((a, i) => {
              return <div>{isfriendList[i].name}</div>;
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
