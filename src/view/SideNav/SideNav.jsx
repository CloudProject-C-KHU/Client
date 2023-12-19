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
    axios
      .post(getFriend, requestData)
      .then((res) => {
        console.log(res);
        setIsFriendList(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [isOpen, extractedUserId]);

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
