const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');
var cors = require('cors');

const db = require('./config/database.js');
const models = require('./models');
  //test db

db.authenticate()
.then(() => console.log("DB Connected"))
.catch(err => console.log('Error: ' + err))
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(require('./routes'));
app.use(express.json());
app.get('/', (req, res) => {
    res.send('INDEX');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`))
