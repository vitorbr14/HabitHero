const User = require('../models/User')
const bcrypt = require('bcryptjs')







  const register = async (req, res) => {
    const {name,password,email} = req.body
  
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password,salt)
    //mesmo se o password tiver vazio, ele vai enviar pq está enviado o password hasheado, é melhor deixar essa parte no model
    const newUser = {
      name,
      password:hashedPassword,
      email
    }
    
    const user = await User.create({newUser})
   res.send(newUser)
  }
  







  const login = async (req, res) => {
   res.send('login')
  }
  
  module.exports = {
    register,
    login,
  }