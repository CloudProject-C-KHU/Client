import "./side-nav.css";
import { useEffect, useState } from "react";
import { Button, CloseButton } from "react-bootstrap";
import { MDBIcon } from "mdb-react-ui-kit";
import axios from "axios";
import { getFriend } from "@/api";
export default function SideNav(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [isFriendList, setIsFriendList] = useState([]);
  useEffect(() => {
    axios
      .get(getFriend)
      .then((res) => {
        console.log(res);
        setIsFriendList(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [isOpen]);
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
