import React from "react";
import "./note.css";

const Note = ({ singelNote }) => {
  return (
    <div>
      <div className="note">
        <h3 className="note__title">{singelNote}</h3>
      </div>
    </div>
  );
};

export default Note;
