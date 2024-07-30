import React from 'react'
import UserForm from './Userform'

describe('<UserForm />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<UserForm />)
  })
})
