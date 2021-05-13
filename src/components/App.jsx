import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(note) {
    setNotes((prevNotes) => {
      return [...prevNotes, note];
    });
  }

  function deleteNote(id){
    setNotes(prevNotes => {
      return prevNotes.filter((note , index) => {
        return index !== id;
      })
    })
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((note , idx) => {
        return <Note key={idx} id={idx} onDelete={deleteNote} title={note.title} content={note.content} />;
      })}
      <Footer />
    </div>
  );
}

export default App;
