const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.end('This is my home page')
    }
    if(req.url === '/about') {
        res.end('Here is our short history')
    }
    res.end(`
        <h1>Oops!</h1>
        <p>We can't find what you are looking for </P>
        <a href="/">back</a>
    `)
})

server.listen(5000)