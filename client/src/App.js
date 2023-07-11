import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Note from "./components/note/Note";
import FormModal from "./components/formModal/FormModal";
import AddCircleIcon from "@mui/icons-material/AddCircle";
const App = () => {
  const [notes, setNotes] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    getNotes();
  }, []);

  const getNotes = () => {
    let isApiSubscribed = true;

    axios
      .get(`http://localhost:3001/getNotes`)
      .then((response) => {
        if (isApiSubscribed) {
          setNotes(response.data);
        }
      });
    console.log("notes", notes);
    return () => {
      // cancel the subscription
      isApiSubscribed = false;
    };
  };

  const addNote = async (username, note, image) => {
    let formData = new FormData();
    formData.append("uploaded_file", image);

    formData.append("username", username);
    formData.append("note", note);

    axios({
      method: "post",
      url: "http://localhost:3001/getNotes",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    }).then(response=> {
      setNotes(response.data);
      console.log("cevap ", response);
    });

    setOpenModal(false);

  };

  return (
    <div className="App">
      <div className="MainRow">
        {openModal && (
          <FormModal
            addNote={addNote}
            open={openModal}
            onClose={() => setOpenModal(false)}
          />
        )}
        <div className="NotesContainer">
          <AddCircleIcon
            color="green"
            fontSize="large"
            onClick={() => setOpenModal(true)}
          />
          <div className="notes">
            {notes.map((noteItem) => (
              <Note singelNote={noteItem} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
