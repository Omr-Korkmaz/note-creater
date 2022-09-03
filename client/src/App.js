import React, { useState, useEffect } from "react";
import axios from "axios";

import ReactPlayer from "react-player";
import logo from "./logo.png";
import "./App.css";

const App = () => {
  const [note, setNotes] = useState("");

  useEffect(() => {
    let isApiSubscribed = true;

    axios
      .get(`http://localhost:3001/getNotes`)

      .then((response) => {
        if (isApiSubscribed) {
          setNotes(response.data[0].content);
        }
      });
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
          <div className="NotesContainerSection">
            <span>
              The main task is to fill this area with the notes which you can
              fetch from
            </span>{" "}
            <a
              href="http://localhost:3001/getnotes"
              target="_blank"
              rel="noopener noreferrer"
            >
              <b>http://localhost:3001/getnotes</b>
            </a>
          </div>
          <div className="NotesContainerSection">{note}</div>
          <div className="NotesContainerSection">
            If you even manage to do that in time, start working on a way to add
            new notes.
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
