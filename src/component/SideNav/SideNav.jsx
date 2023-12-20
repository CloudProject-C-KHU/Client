"use client";
import "./side-nav.css";
import { useEffect, useState, useMemo } from "react";
import { Button, CloseButton } from "react-bootstrap";
import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";
import axios from "axios";
import { getFriend, noteShare } from "@/api";
import { usePathname, useSearchParams } from "next/navigation";
import MakeChat from "@/component/SideNav/MakeChat/MakeChat";

export default function SideNav(props) {
  const [isOpen, setIsOpen] = useState(false);
  const params = useSearchParams();
  const [isFriendList, setIsFriendList] = useState([]);
  const [isInvite, setIsInvite] = useState(false);
  const user_id = usePathname();
  const extractedUserId = useMemo(() => user_id.split("/")[1], [user_id]);

  useEffect(() => {
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
  }, [isOpen, extractedUserId]); // isOpen만을 의존성으로 지정

  const handleOpenClick = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen); // 이전 상태를 사용하여 토글
  };

  const _id = params.get("id");

  useEffect(() => {
    if (_id !== null) {
      setIsInvite(true);
    } else {
      setIsInvite(false);
    }
  }, [_id]);
  const handleInvite = async () => {
    await fetch(noteShare + "/" + _id, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        noteId: _id,
        userIdList: extractedUserId,
      }),
    });
  };
  return (
    <>
      <div className="side-nav">
        <Button className="side-nav-btn" onClick={handleOpenClick}>
          {isOpen ? <MDBIcon fas icon="bars" /> : <MDBIcon fas icon="times" />}
        </Button>
        <div className={`side-nav-wrap ${isOpen ? "open" : "close"}`}>
          <div className="make-chat-btn">
            <MakeChat user={extractedUserId} />
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
                  {isInvite ? (
                    <MDBBtn
                      className="invite-btn"
                      color={"secondary"}
                      onClick={handleInvite}
                    >
                      초대
                    </MDBBtn>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
