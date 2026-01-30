import express from 'express'
import connectLivereload from 'connect-livereload'
import livereload from 'livereload'
import path from 'path'
import { fileURLToPath } from 'url'

const app = express()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const publicDir = path.join(__dirname, 'public')

const lrServer = livereload.createServer({
  extraExts: ['css', 'js', 'html'],
})
lrServer.watch(publicDir)

app.use(connectLivereload())

app.use(express.static(publicDir))

app.get('/', (req, res) => {
  res.sendFile(path.join(publicDir, 'index.html'))
})

const port = Number(process.env.PORT) || 3001
app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`)
})
