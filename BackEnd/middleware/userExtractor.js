const jwt = require('jsonwebtoken')
module.exports = (request, response, next) => {
  const authorization = request.get('authorization')
  console.log('prueba ' + authorization)
  let token = ''
  if (authorization && authorization.toLowerCase().startsWith('bearer')) {
    token = authorization.substring(7)
  }

  let decofefToken = {}
  try {
    decofefToken = jwt.verify(token, process.env.SECRET)
    console.log(decofefToken)
  } catch (e) {
    console.log(e)
  }

  if (!token || !decofefToken.id) {
    return response.status(401).json({ error: 'token missing or invalid' })
  }
  const { id: userId } = decofefToken
  request.userId = userId
  next()
}
