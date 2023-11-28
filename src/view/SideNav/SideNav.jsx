import "./side-nav.css";
import { useEffect, useState } from "react";
import { Button, CloseButton } from "react-bootstrap";
import { MDBIcon } from "mdb-react-ui-kit";
import axios from "axios";
import { getFriend } from "@/api";
export default function SideNav(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [isfriendList, setIsfriendList] = useState([]);
  useEffect(() => {
    axios
      .get(getFriend)
      .then((res) => {
        console.log(res);
        setIsfriendList(res.data);
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
          {isfriendList.map((a, i) => {
            return (
              <div className="nav-card-box">
                <div className="nav-card-box-wrap">
                  <div className="nav-card-box-wrap-name">
                    {isfriendList[i].name}
                  </div>
                  <div className="nav-card-box-wrap-email">
                    {isfriendList[i].email}
                  </div>
                  <div>
                    <button type="button" className="btn btn-warning">
                      invite
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

// "use client";
// import "../styles/side-nav.css";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import { getFriend } from "@/const/const";
//
// /* example Data */
//
// export default function Nav(props) {
//   const [isfriendList, setIsfriendList] = useState([]);
//   useEffect(() => {
//     axios
//       .get(getFriend)
//       .then((res) => {
//         console.log(res);
//         setIsfriendList(res.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);
//   return (
//     <nav>
//       <div>
//         <h1>FriendList</h1>
//         <div className="nav-box">
//           <div>
//             {isfriendList.map((a, i) => {
//               return (
//                 <div className="nav-card-box">
//                   <div className="nav-card-box-wrap">
//                     <div className="nav-card-box-wrap-name">
//                       {isfriendList[i].name}
//                     </div>
//                     <div className="nav-card-box-wrap-email">
//                       {isfriendList[i].email}
//                     </div>
//                     <div>
//                       <button type="button" className="btn btn-warning">
//                         invite
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }
