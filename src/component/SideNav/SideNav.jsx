"use client";
import "./side-nav.css";
import { useEffect, useState, useMemo } from "react";
import { Button, CloseButton } from "react-bootstrap";
import { MDBIcon } from "mdb-react-ui-kit";
import axios from "axios";
import { getFriend } from "@/api";
import { usePathname } from "next/navigation";
import MakeChat from "@/component/SideNav/MakeChat/MakeChat";

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
        setIsFriendList(res.data.friendList);
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
          <div className="make-chat-btn">
            <MakeChat />
          </div>
          <div style={{ paddingTop: 60 }}>
            {isFriendList.map((friend, i) => (
              <div className="friend-item">
                <div className="friend-item-wrap">
                  <div className="friend-item-wrap-profileImg">
                    <img src={friend.profileImg} />
                  </div>
                  <div>
                    <span>{friend.name}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
