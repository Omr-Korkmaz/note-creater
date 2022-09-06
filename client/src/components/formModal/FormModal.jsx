import React from "react";
import "./formModal.css";
import { useState } from "react";
import { TextField, Button } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CloseIcon from "@mui/icons-material/Close";

const FormModal = ({ addNote, onClose }) => {
  const [note, setNote] = useState("");
  const [username, setUsername] = useState("");
  const [image, setImage] = useState({});
console.log(image)

  const handleSubmit = (e) => {
    e.preventDefault();

    addNote(username, note, image);
  };

  return (
    <div onClick={onClose} className="modal-overlay">
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="modal"
      >
        <div className="modal__close-btn">
          <CloseIcon onClick={onClose} />
        </div>
        <form
          enctype="multipart/form-data"
          className="Modal__form"
          onSubmit={handleSubmit}
        >
          <input
            type="file"
            name="uploaded_file"
            onChange={(e) => setImage(e.target.files[0])}
            
          />
          <TextField
            className="field"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            label="username"
            name="username"
            variant="outlined"
            fullWidth
            required
          />

          <TextField
            className="field"
            onChange={(e) => setNote(e.target.value)}
            label="note"
            name="note"
            value={note}
            variant="outlined"
            multiline
            rows={4}
            fullWidth
            required
          />
          <div className="button">
            <Button
              onSubmit={handleSubmit}
              type="submit"
              variant="contained"
              endIcon={<ArrowForwardIosIcon />}
            >
              Add Note
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormModal;
