const http = require('http')
const url = require('url')

const server = http.createServer((req, res) => {

    const _url = url.parse(req.url, true)

    if (_url.pathname === 'api/parsetime') {

        const date = new Date(_url.query.iso)

        const data = {
            hour: date.getHours(),
            minute: date.getMinutes(),
            second: date.getSeconds()
        }

        res.writeHead(200, { 'Content-Type': 'application/json' })

        res.end(data)
    } else {

        res.writeHead(405,'sorry....')
        res.end()
            
    }

})

const port = process.argv[2]

server.listen(port, () => console.log(`http json api server running on port ${port}`))