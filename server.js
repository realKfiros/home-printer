const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const printer = require('printer');
const fs = require('fs');
const path = require('path');

const port = 3001;

const app = express();

const dev = app.get('env') !== 'production';

if (!dev) {
  app.disable('x-powered-by');
  app.use(express.static(path.resolve(__dirname, 'build')));
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
  });
}

const files = multer({
  dest: __dirname + '/prints',
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.post('/print', files.single('print'), (req, res) => {
  printer.printFile({
    filename: req.file.path,
    success: function (jobID) {
      console.log('sent to printer with ID: ' + jobID);
      fs.unlinkSync(req.file.path);
    },
    error: function (err) {
      console.log(err);
    },
  });
});

app.listen(port, () => {
  console.log('server listening on port ');
});
