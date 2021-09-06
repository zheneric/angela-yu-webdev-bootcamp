import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";
import TitleInput from "./TitleInput";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const [noteIsExpanded, setNoteIsExpanded] = useState(false);

  function expandNote() {
    setNoteIsExpanded(true);
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
        {noteIsExpanded && (
          <TitleInput
            handleChange={handleChange}
            noteTitle={note.title}
          ></TitleInput>
        )}
        <textarea
          name="content"
          onChange={handleChange}
          onClick={expandNote}
          value={note.content}
          placeholder="Take a note..."
          rows={noteIsExpanded ? "3" : "1"}
        />
        <Zoom in={noteIsExpanded}>
          <Fab onClick={submitNote}>
            <AddIcon></AddIcon>
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
