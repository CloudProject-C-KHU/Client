"use client";
import Nav from "@/view/nav";
import "../../styles/home.css";
import { useEffect, useState } from "react";
export default function home() {
  const [isOpen, setIsOpen] = useState(true);
  function handleNav() {
    setIsOpen(!isOpen);
  }
  return (
    <main className="main">
      <div className="nav-action">{isOpen ? <Nav /> : null}</div>
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
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
