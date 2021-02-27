var http = require('http');

var jsonObj;
var jsonArr;

function callback(req, res){
    switch (req.url) {
        case '/home':
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write("<h1>Welcome to the Home Page</h1>");
            res.end();
            break;

        case '/getData':
            jsonObj = fs.readFileSync("my-json.json");
            jsonArr = JSON.parse(jsonObj);

            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.write("My Name: " + jsonArr.name + "\n");
            res.write("Current Class: " + jsonArr.class + "\n");
            res.write("Stringify JSON Object: " + JSON.stringify(jsonArr));
            res.end();
            break;

        default:
            res.writeHead(404, { "Content-Type": "text/html" });
            res.write('404: Page Not Found');
            res.end();
    }
    
 
}
var server = http.createServer(callback);
server.listen(8888);

console.log("The server is listening on port 8888!");