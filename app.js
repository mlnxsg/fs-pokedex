const express = require('express')
const app = express()

// get the port from env variable
const PORT = process.env.PORT || 5001

app.get('/version', (req, res) => {
  res.send('3')
})

app.get('/health', () => {
  // res.send('ok')
  throw new Error('broken!') // 定时健康检查测试
})

app.use(express.static('dist'))

const start = async () => {
  await app.listen(PORT)
  console.log(`server started on port ${PORT}`)
}

start()
