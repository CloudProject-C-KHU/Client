"use client";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

export default function SideNav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="side-nav">
        <button> OPEN</button>
        {isOpen ? <div></div> : <div></div>}
      </div>
    </>
  );
}

// "use client";
// import "../styles/nav.css";
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
