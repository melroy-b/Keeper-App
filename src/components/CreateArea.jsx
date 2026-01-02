import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";
import { Zoom } from "@mui/material";

function CreateArea(props) {
  const [noteItem, setNoteItem] = useState({
    title: "",
    content: "",
  });

  const [isTyping, setIsTyping] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setNoteItem((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (noteItem.title !== "" && noteItem.content !== "") props.onAdd(noteItem);
    setNoteItem({ title: "", content: "" });
  }

  function handleClick() {
    setIsTyping(true);
  }

  return (
    <div>
      <form className="create-note" onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={noteItem.title}
          hidden={!isTyping}
        />

        <textarea
          onMouseDown={handleClick}
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows={isTyping ? "3" : "1"}
          value={noteItem.content}
        />

        <Zoom in={isTyping}>
          <Fab type="submit">
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
