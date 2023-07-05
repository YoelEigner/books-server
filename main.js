// server.js
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const router = require('./routes/router');
const { mongoConnect } = require('./MongoDBConnect');
const http = require('http');


mongoConnect();

const port = 3001;

app.use(cors());
app.use(bodyParser.json());
app.use('/api', router);

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`server listening at http://localhost:${port}/api`);
});
