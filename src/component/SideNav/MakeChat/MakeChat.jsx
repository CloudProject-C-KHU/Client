"use client";
import React, { useState } from "react";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBIcon,
} from "mdb-react-ui-kit";
import { makeNote } from "@/api";

export default function MakeChat(props) {
  const [centredModal, setCentredModal] = useState(false);
  const [noteTitle, setNoteTitle] = useState(""); // 변경된 부분

  const toggleOpen = () => setCentredModal(!centredModal);

  const handleMakeNote = () => {
    fetch(makeNote, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: noteTitle, // 변경된 부분
        user: props.user,
      }),
    });

    // 노트를 등록한 후에 모달을 닫을 수 있도록 추가
    toggleOpen();
  };

  return (
    <>
      <MDBBtn color="light" rippleColor="dark" onClick={toggleOpen}>
        <MDBIcon fas icon="plus" />
        Add Note
      </MDBBtn>

      <MDBModal tabIndex="-1" open={centredModal} setOpen={setCentredModal}>
        <MDBModalDialog centered>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>새로운 노트 만들기</MDBModalTitle>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={toggleOpen}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <input
                type="text"
                placeholder="Enter note title"
                value={noteTitle}
                onChange={(e) => setNoteTitle(e.target.value)}
                style={{ border: "none", width: "100%", padding: "8px" }}
              />
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color="secondary" onClick={toggleOpen}>
                Close
              </MDBBtn>
              <MDBBtn onClick={handleMakeNote}>노트 등록</MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}
