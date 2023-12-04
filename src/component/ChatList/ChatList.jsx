"use client";
import { useEffect, useState } from "react";
import { noteList } from "@/api";
import React from "react";
import "./chat-list.css";
import { MDBBadge, MDBListGroup, MDBListGroupItem } from "mdb-react-ui-kit";
import Link from "next/link";
export default function ChatList() {
  const [isNotes, setIsNotes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(noteList, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          // body: "email",
        });
        const data = await response.json();
        setIsNotes(data); // Update state with the fetched data
      } catch (e) {
        console.error("Error", e.message);
        // You might want to handle the error in a more user-friendly way
      }
    };
    fetchData().then();
  }, []);

  console.log("note/list", isNotes);

  return (
    <>
      <div className="chat-list">
        <MDBListGroup light>
          {isNotes.map((note, i) => (
            <Link
              href={{
                pathname: "/list/" + note.Object_Id,
                query: { title: note.title, count: note.count },
              }}
            >
              <MDBListGroupItem className="d-flex justify-content-between align-items-center">
                {note.title}
                <MDBBadge pill light>
                  {note.count}
                </MDBBadge>
              </MDBListGroupItem>
            </Link>
          ))}
        </MDBListGroup>
      </div>
    </>
  );
}
