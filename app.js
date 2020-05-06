const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
var cors = require('cors');
const models = require('./models');
const seed = require('./seeders/seed1')(models);

//const db = require('./config/database.js');

  //test db

//db.authenticate()
// .then(() => console.log("DB Connected"))
// .catch(err => console.log('Error: ' + err))
const app = express();
//{ alter: true, force: true }
// models.sequelize.sync()
//     .then((data) => console.log("connected"))
//     .catch(err => console.log('sss' + err));

app.use(cors());
//app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(require('./routes'));


app.get('/', (req, res) => {
    res.send('INDEX');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`))
