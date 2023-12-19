"use client";
import { useEffect, useMemo, useState } from "react";
import { noteList } from "@/api";
import React from "react";
import "./chat-list.css";
import { MDBBadge, MDBListGroup, MDBListGroupItem } from "mdb-react-ui-kit";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function ChatList() {
  const [isNotes, setIsNotes] = useState([]);
  const user_id = usePathname();
  const extractedUserId = useMemo(() => user_id.split("/")[1], [user_id]);
  useEffect(() => {
    // Create an object with user_id
    const requestData = {
      user: extractedUserId,
    };
  });
  console.log("chatlist" + user_id);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(noteList, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ user: extractedUserId }),
        });
        const data = await response.json();
        setIsNotes(data.shareNoteList); // Update state with the fetched data
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
                pathname: user_id + "/" + note.Object_Id,
                // query: { title: note.title, count: note.count },
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
