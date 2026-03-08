import { useContext, useState, useMemo } from "react";
import { NotesContext } from "../context/NotesContext";

const NotesList = () => {
  const { notes } = useContext(NotesContext);
  const [selected, setSelected] = useState(null);

  const totalNotes = useMemo(() => {
    return notes.length;
  }, [notes]);

  return (
    <div>
      <h3>Total Notes: {totalNotes}</h3>

      {notes.map((note) => (
        <div
          key={note.id}
          onClick={() => setSelected(note.id)}
          style={{
            padding: "10px",
            margin: "5px",
            border: "1px solid black",
            background: selected === note.id ? "yellow" : "white"
          }}
        >
          {note.text}
        </div>
      ))}
    </div>
  );
};

export default NotesList;