"use client";
import "./side-nav.css";
import { useEffect, useState, useMemo } from "react";
import { Button, CloseButton } from "react-bootstrap";
import { MDBIcon } from "mdb-react-ui-kit";
import axios from "axios";
import { getFriend } from "@/api";
import { usePathname } from "next/navigation";

export default function SideNav(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [isFriendList, setIsFriendList] = useState([]);
  const user_id = usePathname();
  const extractedUserId = useMemo(() => user_id.split("/")[1], [user_id]);
  useEffect(() => {
    // Create an object with user_id
    const requestData = {
      user: extractedUserId,
    };

    // Use axios.post with the correct endpoint URL and request data
    // fetch(getFriend, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //
    // });
    axios
      .post(getFriend, requestData)
      .then((res) => {
        console.log(res);
        setIsFriendList(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [isOpen, extractedUserId]); // extractedUserId가 변경되었을 때에만 다시 렌더링

  const handleOpenClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="side-nav">
        <Button className="side-nav-btn" onClick={handleOpenClick}>
          {isOpen ? <MDBIcon fas icon="bars" /> : <MDBIcon fas icon="times" />}
        </Button>
        <div className={`side-nav-wrap ${isOpen ? "open" : "close"}`}>
          <div> 안녕하세요</div>
        </div>
      </div>
    </>
  );
}
