import '@testing-library/jest-dom'
import { render, prettyDOM } from '@testing-library/react'

import { Note } from '../Note.js'

test('renders content', () => {
  const notes = [
    {
      id: 1,
      content: 'this is a test',
      important: true,
      body: 'additional content'
    }
  ]

  const utils = render(<Note notes={notes} />)

  // console.log(utils);
  utils.getByText('this is a test')
  const li = utils.container.querySelector('li')
  console.log(prettyDOM(li))
})
