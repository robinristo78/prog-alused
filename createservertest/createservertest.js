const http = require('http');
const { console } = require('inspector');

http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('<b>Node Page</b>');
        res.end()
    }
}).listen(3001, () => {
    console.log('Server is started at http://localhost:3001')
})
//test