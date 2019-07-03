const express = require('express')
const uuid = require('uuid/v4')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

// fake users
const users = {
  jay: '1',
  jj: '2'
}

// session
const SESSION_ID_KEY = 'XSS_SESSION_ID'
const sessionMap = new Map()

app
  .use(express.static(path.join(__dirname, 'public')))
  .use(express.static(path.join(__dirname)))
  .use(bodyParser.urlencoded({ extended: true }))
  .use(cookieParser())
  .post('/api/login', (req, res) => {
    const { username, password } = req.body
    if (users[username] && users[username] === password) {
      const sessionId = uuid()
      sessionMap.set(sessionId, { username, password })
      res.cookie(SESSION_ID_KEY, sessionId)
      res.json({ code: 0 })
    } else {
      res.json({ error: '用户不存在', code: 1 })
    }
  })

// 反射型 xss
// 访问 http://localhost:3004/reflect?type=<script>alert(1)</script> 的时候
// <script>alert(1)</script> 会在前端页面显示弹出 alert (chrome会检测到并进行屏蔽)
// 通常是诱导用户自己点开(一次性)
// 解决方法：
// 1. 不让前端获取 {httpOnly: true}
// 2. 通过 encodeURIComponent 进行转义
app.get('/reflect', (req, res) => {
  // res.send(`${req.query.type}`)
  res.send(`${encodeURIComponent(req.query.type)}`)
})

// fake comments
const comments = [
  {
    username: 'jaychou',
    content: 'hello im jaychou'
  },
  { username: 'jj', content: 'hello im jj' }
]

app.get('/api/comments', (req, res) => {
  res.json({ code: 0, comments })
})

app.post('/api/post', (req, res) => {
  const session = req.cookies[SESSION_ID_KEY]
  const user = sessionMap.get(session) || {}
  if (user.username) {
    comments.push({ username: user.username, content: req.body.content })
    res.json({ code: 0, comments })
  } else {
    res.json({ code: 1, error: '未登录' })
  }
})

// listen
app.listen(process.env.PORT || 3004, () => {
  console.log(`server start: http://localhost:${process.env.PORT || 3004}/`)
})
