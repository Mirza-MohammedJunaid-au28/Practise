const express =  require('express');
const { createServer } = require("http");
const { Server } = require("socket.io");
const app = express();
app.use(express.static('public'));

const httpServer = createServer(app);
const socketServer = new Server(httpServer);

socketServer.on("connection", (connectionObj) => {
  console.log("Client has Connected");
  connectionObj.on('message', (data) => {
    const information = JSON.parse(data);
    if(information.newText) {
        connectionObj.broadcast.emit('message', information.newText);
    } else if(information.newSize) {
        connectionObj.broadcast.emit('size', information.newSize);
    } else if(information.bold) {
        connectionObj.broadcast.emit('bold', information.bold);
    } else if(information.italic) {
        connectionObj.broadcast.emit('italic', information.italic);
    } else if(information.underline) {
        connectionObj.broadcast.emit('underline', information.underline);
    } else if(information.left) {
        connectionObj.broadcast.emit('left', information.left);
    } else if(information.right) {
        connectionObj.broadcast.emit('right', information.right);
    } else if(information.center) {
        connectionObj.broadcast.emit('center', information.center);
    } else if(information.justify) {
        connectionObj.broadcast.emit('justify', information.justify);
    } else if(information.color) {
        connectionObj.broadcast.emit('color', information.color);
    } else if(information.bgcolor) {
        connectionObj.broadcast.emit('bgcolor', information.bgcolor);
    }
  })
});

httpServer.listen(3000);