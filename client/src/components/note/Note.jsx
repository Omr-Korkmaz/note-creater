import React from "react";
import "./note.css";

const Note = ({ singelNote }) => {
  return (
    <>
      <section className="note-section">
        <div className="note-section__info">
          <div>
            <img
              className="note-section__info__image"
              src={singelNote.user.img}
            />
          </div>
          <div className="note-section__info__user">{singelNote.user.name}</div>
        </div>
        <h3 className="note-section__text">{singelNote.content}</h3>
      </section>
    </>
  );
};

export default Note;
