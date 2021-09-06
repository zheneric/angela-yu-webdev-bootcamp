import React from "react";

function TitleInput(props) {
  return (
    <input
      name="title"
      onChange={props.handleChange}
      value={props.noteTitle}
      placeholder="Title"
    />
  );
}

export default TitleInput;
