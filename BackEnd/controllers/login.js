const jwt = require('jsonwebtoken')
const bcryp = require('bcrypt')
const loginRouter = require('express').Router()
const User = require('../Models/User')

loginRouter.post('/', async (request, response) => {
  const { body } = request
  const { username, password } = body
  console.log(username, password)

  const user = await User.findOne({ username })
  const passwordCorrect = user === null
    ? false
    : await bcryp.compare(password, user.passwordHas)

  try {
    if (!(user && passwordCorrect)) {
      response.status(401).json({
        error: 'ivalid user or password'
      })
    } else {
      const userForToken = {
        id: user._id,
        username: user.name
      }
      const token = jwt.sign(userForToken, process.env.SECRET, {
        expiresIn: 60 * 60 * 24 * 7
      })
      response.send({
        name: user.name,
        username: user.username,
        token
      })
    }
  } catch (e) {
    console.log(e)
  }
})
module.exports = loginRouter
