import React, { useState } from "react";

function CreateArea(props) {
  const [noteDetails, setNoteDetails] = useState({
    title: "",
    content: "",
  });

  function handleNote(event) {
    const { value, name } = event.target;
    setNoteDetails((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  }

  function submitNote(event) {
    props.addNote(noteDetails);
    setNoteDetails({ title: "", content: "" });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          onChange={handleNote}
          name="title"
          placeholder="Title"
          value={noteDetails.title}
        />
        <textarea
          onChange={handleNote}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={noteDetails.content}
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
