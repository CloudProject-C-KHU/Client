"use client";
import Nav from "@/view/nav";
import "../../styles/home.css";
import { useEffect, useState } from "react";
import TextEdit from "@/component/textEdit";
export default function List() {
  const [isOpen, setIsOpen] = useState(true);
  function handleNav() {
    setIsOpen(!isOpen);
  }

  return (
    <main className="main">
      <div className="nav-action">
        {isOpen ? <Nav isOpen={isOpen} /> : null}
      </div>
      <div className="home">
        <div className="nav-isOpen">
          <button type="button" className="btn btn-primary" onClick={handleNav}>
            {isOpen ? "close" : "open"}
          </button>
        </div>
        <div className="home-wrap">
          <h> main page & chat list</h>
          <div>
            <div>
              <div>
                <TextEdit />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
