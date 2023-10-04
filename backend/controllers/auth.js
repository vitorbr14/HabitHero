const User = require('../models/User')
const bcrypt = require('bcryptjs')
  const register = async (req, res) => {
    
  }
  
  const login = async (req, res) => {
    const {name,password,email} = req.body

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password,salt)

    const newUser = {
      name,
      password:hashedPassword,
      email
    }
    
  const user = await User.create(newUser)
   res.send(newUser)
  }
  
  module.exports = {
    register,
    login,
  }