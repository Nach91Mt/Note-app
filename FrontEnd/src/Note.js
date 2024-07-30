import React from 'react'

export const Note = ({ notes }) =>
  notes.map(note => (
    <div key={note.id}>
      <p>
        <li>
          <strong>{note.content}</strong>
          <strong>{note.important.toString()}</strong>
        </li>
      </p>
      {note.body}
    </div>
  ))
