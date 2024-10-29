import React, { useState, useEffect } from 'react';
import { IoMdAdd } from "react-icons/io";

function Noteform() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState('');
  const [note, setNote] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    setNotes(storedNotes);
  }, []);

  const addNote = (e) => {
    e.preventDefault();

    if (note && title) {
      const newNote = { title, text: note, date: new Date().toLocaleString() };

      if (editingIndex !== null) {
        notes[editingIndex] = newNote;
        setEditingIndex(null);
      } else {
        notes.push(newNote);
      }

      setNotes([...notes]);
      localStorage.setItem('notes', JSON.stringify(notes));
      setTitle('');
      setNote('');
    }
  };

  const filteredNotes = notes.filter((n) =>
    n.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex justify-center  container h-screen p-4">
      <form onSubmit={addNote} className="h-screen   w-screen">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Add a title"
          className="border border-black p-2 w-full bg-gradient-to-r from-violet-200 to-pink-200 rounded mb-2"
        />
        <textarea
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Add a new note"
          className="border border-black bg-gradient-to-r from-violet-200 to-pink-200 p-2 w-full h-80 rounded resize-none"
        />
        <div className="flex items-center justify-between mt-2">
          <button type="submit" className="bg-gradient-to-b from-indigo-500 to-pink-500 text-white p-2 rounded flex items-center">
            <IoMdAdd /> {editingIndex !== null ? 'Update Note' : 'Add Note'}
          </button>
          <button type="button" onClick={() => { setTitle(''); setNote(''); setEditingIndex(null); }} className="bg-gray-300 text-black p-2 rounded">
            Reset
          </button>
        </div>
      </form>
      <div className="ml-4 w-full">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search by title"
          className="border border-black bg-gradient-to-r from-violet-200 to-pink-200 p-2 w-full rounded mb-2"
        />
        {filteredNotes.map((noteObj, index) => (
          <div key={index} className="bg-violet-200 pr-2 rounded shadow mb-2">
            <h3 className="font-bold">{noteObj.title}</h3>
            <p>{noteObj.text}</p>
            <span className="text-gray-500 text-xs">{noteObj.date}</span>
            <button onClick={() => { setTitle(noteObj.title); setNote(noteObj.text); setEditingIndex(index); }} className="text-blue-500 text-xs ml-2">
              Edit
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Noteform;
