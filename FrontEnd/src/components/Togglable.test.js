import '@testing-library/jest-dom'
import { fireEvent, render, prettyDOM } from '@testing-library/react'

import Togglable from './Togglable'

describe('<Togglable />', () => {
  const buttonLabel = 'show'
  let component

  beforeEach(() => {
    component = render(
      <Togglable buttonLabel='show'>
        <div className='testdiv'>testDivContent</div>
      </Togglable>
    )
  })
  test('render its children', () => {
    // expect(component.container.querySelector('.test')).toBeDefined()
    component.getByText('testDivContent')
  })
  test('render style', () => {
    const button = component.getByText(buttonLabel)
    fireEvent.click(button)
    const el = component.getByText('testDivContent')
    expect(el.parentNode).not.toHaveStyle('display : none')
  })
})
