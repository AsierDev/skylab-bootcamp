const http = require('http')
const concatStream = require ('concat-stream')

const url = [process.argv[2], process.argv[3], process.argv[4]]


http.get(url, res => {
    res.setEncoding('utf-8')

    let rawData = ''

    res.pipe (concatStream(data => {
        console.log('res.pipe => on data')

        console.log(data)
    }))

    res.on('error', console.log)

})