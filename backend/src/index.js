const express = require('express');
const app = express();
const cors = require('cors');
const routes = require('./routes');

// CORS
app.use(cors());

// Body parser
app.use(express.json());

// Mounting routes
app.use(routes);

app.listen(3333);