import React, { useState, useEffect } from "react";
import axios from "axios";

import ReactPlayer from "react-player";
import logo from "./logo.png";
import "./App.css";
import Note from "./components/note/Note";

const App = () => {
  const [note, setNotes] = useState([]);

  useEffect(() => {
    let isApiSubscribed = true;

    axios
      .get(`http://localhost:3001/getNotes`)

      .then((response) => {
        if (isApiSubscribed) {
          setNotes(response.data);
        }
      });
    console.log("note", note);
    return () => {
      // cancel the subscription
      isApiSubscribed = false;
    };
  }, []);

  return (
    <div className="App">
      <div className="MainRow">
        <div className="VideoContainer">
          <div className="VideoCover" />
          <ReactPlayer
            className="ReactPlayer"
            width="100%"
            height="100%"
            url="https://www.youtube.com/watch?v=f1x9lgX8GaE&t=319s"
            playing
            loop
            muted
          />
          <img src={logo} className="AppLogo" alt="logo" />
        </div>
        <div className="NotesContainer">
          {note.map((noteItem) => (
            <Note singelNote={noteItem.content} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
