const express = require('express')
const app = express()
const port = process.env.PORT || 4000
const users = require("./routes/users")
const bodyParser = require("body-parser")
app.use(bodyParser.json());
app.get('/', (req, res) => res.send('default route'))

app.use('/users', require('./routes/users'));
app.use('/users', require('./routes/users'));
app.use('/users', require('./routes/comments'));
app.use('/users', require('./routes/products'));

app.use(users)

app.listen(port, () => {
  console.log('app is listening on:', port)
})