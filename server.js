var http = require('http');

function callback(req, res){
    console.log("Recieved a request for: " + req.url);
if(req == "/home")
{
    res.write("<h1>Welcome Home Page")
}
else if(req == "/getData"){
    function jsoncode() {<script type="text/javascript">
      info = {"Name":"Valter Barreto"};
      alert(info);
    </script>
    }
    res.write(info);
}
else{
    response.writeHead(404, {"Content-Type": "text/html"});
}
    
    res.end();

}
var server = http.createServer(callback);
server.listen(8888);

console.log("The server is listening on port 5000!")