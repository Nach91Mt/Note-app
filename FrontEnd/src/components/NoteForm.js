import { useRef, useState } from 'react'
import Togglable from './Togglable.js'
export default function NoteForm({ addNote, handleLogout }) {
  const [newNote, setNewNote] = useState('')
  const togglableRef = useRef()
  const handleChange = (event) => {
    setNewNote(event.target.value)
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      important: Math.random() > 0.5
    }
    //hola
    addNote(noteObject)
    setNewNote('')
    if (togglableRef.current) {
      // togglableRef.current.toggleVisibility();
    }
  }
  return (
    <>
      <Togglable buttonLabel='New Note'>
        <form onSubmit={handleSubmit} ref={togglableRef}>
          <input type='text' placeholder='Text' onChange={handleChange} value={newNote} />
          <button type='submit'>Agregar Nota</button>
        </form>
      </Togglable>
      <div>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </>
  )
}
