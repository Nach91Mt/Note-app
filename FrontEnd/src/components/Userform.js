import { useState } from 'react'
import Togglable from './Togglable'

export default function UserForm({ loginSubmit }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLoginSubmit = async (event) => {
    event.preventDefault()
    loginSubmit({ username, password })
    setUsername('') // Resetea el username
    setPassword('') // Resetea el password
  }

  return (
    <div>
      <Togglable buttonLabel='Show login'>
        <form onSubmit={handleLoginSubmit}>
          <div>
            <input
              type='text'
              value={username}
              name='Username'
              placeholder='Username'
              onChange={({ target }) => setUsername(target.value)}
            />
          </div>
          <div>
            <input
              type='password'
              value={password}
              name='Password'
              placeholder='Password'
              onChange={({ target }) => setPassword(target.value)}
            />
          </div>
          <button>Login</button>
        </form>
      </Togglable>
    </div>
  )
}
