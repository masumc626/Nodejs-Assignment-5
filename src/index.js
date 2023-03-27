var http = require("http");

const httpServer = http.createServer(handleServer);


function handleServer(req, res) {
    const url = req.url;
    if (url == "/welcome") {
        res.writeHead(200, { 'Content-Type': 'text/plain' })
        res.write("Welcome to Dominos!")
        res.end()
    } else if (url == "/contact") {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.write(JSON.stringify({
            phone: '18602100000',
            email: 'guestcaredominos@jublfood.com',

        }))
        res.end()
    } else {
        res.writeHead(404)
        res.end()
    }
}

const port = 8081;
httpServer.listen(port, "localhost", async () => console.log(`Server is running on port ${port}`));

module.exports = httpServer;