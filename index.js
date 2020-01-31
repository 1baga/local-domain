const express = require('express');
const app = express();

app.get('/', function(req, res) {
  res.json({ live: true });
});

app.listen(3070);
