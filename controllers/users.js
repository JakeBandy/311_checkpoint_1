const users = require("../data/index")

const getUsers = (req, res, next) => {
    res.send(users)
}
const getUsersById = (req, res, next ) => {
    let id = parseInt(req.params.id)
    let user = users.find((user) => user.id === id)
    res.send(user)
}
const create = (req, res, next ) => {
    let message = req.body
    message._id = users.length + 1
    users.push(message)
    res.send(users)
}
const updateUser = (req, res, next ) => {
    let id = parseInt(req.params.id)
    let message = req.body
    let user = users.find((user) => user.id === id)
    Object.keys(message).map((key) => {
        user[key] = message[key];
      });
      message.id = users[id].id - 1
      res.send(users)
}
const removeUser = (req, res, next) => {
    let id = parseInt(req.params.id)
    let user = users.find((user) => user.id === req.params.id)
    users.splice(user,1)
    res.send(users)
}
module.exports = {getUsers, getUsersById, create, updateUser, removeUser} 