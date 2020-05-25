import express from 'express';
import path from 'path';


const server = express();

server.use(express.static(path.join(__dirname, 'public')))

server.get('/', function(req, res) {
  res.redirect('/index.html')
})


server.listen(3000)