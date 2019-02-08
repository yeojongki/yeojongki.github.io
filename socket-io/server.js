const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.use(express.static(__dirname));

// get now time
const now = () => new Date().toLocaleString();

// admin
const Admin = '系统';

/**
 * 消息类型 type
 *  1：系统提示语
 *  2：普通文字类型
 */

let user;

io.on('connection', socket => {
  // 用户注册/进入聊天室提示
  socket.on('register', username => {
    // 记录用户名
    user = username;
    io.emit('message', {
      type: 1,
      user: Admin,
      content: `欢迎${user}加入聊天室~`,
      ctime: now()
    });
  });

  socket.on('message', msg => {
    if (user) {
      io.emit('message', {
        type: 2,
        user: user,
        content: msg,
        ctime: now()
      });
    }
  });
});

// io.emit('some event', { for: 'everyone' });

http.listen(3001, () => {
  console.log('io listening on: http://localhost:3001');
});
