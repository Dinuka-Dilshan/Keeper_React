import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  return (
    <div>
      <Header />
      <CreateArea setNotes={setNotes} />
      {notes.map((note, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            setNotes={setNotes}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
