import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(noteDetails) {
    setNotes((prevNotes) => {
      return [...prevNotes, noteDetails];
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return notes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea addNote={addNote} />
      {notes.map((element, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={element.title}
            content={element.content}
            onDelete={deleteNote}
          ></Note>
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
