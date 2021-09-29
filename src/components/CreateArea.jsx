import React, { useState } from "react";

function CreateArea(props) {
  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");

  function onTitleChange(event) {
    setNewTitle(event.target.value);
  }

  function onContentChange(event) {
    setNewContent(event.target.value);
  }

  function onSubmit(event) {
    props.setNotes((previous) => {
      return [
        ...previous,
        {
          title: newTitle,
          content: newContent
        }
      ];
    });
    setNewContent("");
    setNewTitle("");
    event.preventDefault();
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          onChange={onTitleChange}
          name="title"
          placeholder="Title"
          value={newTitle}
        />
        <textarea
          onChange={onContentChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={newContent}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
