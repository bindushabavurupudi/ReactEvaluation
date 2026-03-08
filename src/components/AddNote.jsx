import { useState, useContext, useRef, useEffect } from "react";
import { NotesContext } from "../context/NotesContext";

const AddNote = () => {
  const [input, setInput] = useState("");
  const { addNote } = useContext(NotesContext);
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleAdd = () => {
    if (input.trim() === "") return;

    addNote({
      id: Date.now(),
      text: input
    });

    setInput("");
  };

  return (
    <div>
      <input
        ref={inputRef}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter note"
      />
      <button onClick={handleAdd}>Add Note</button>
    </div>
  );
};

export default AddNote;