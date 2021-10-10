const bodyParser = require('body-parser');
const app = require('express')();

app.use(bodyParser.json());

// @ts-ignore
app.all('/getJSON', (req, res) => {
  res.json({ data: 'data' });
});

module.exports = app;
