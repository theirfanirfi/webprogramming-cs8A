var http = require('http');
var UrlPattern = require('url-pattern');
var fs = require('fs');

var homeEndPoint = new UrlPattern('/home');
var aboutEndPoint = new UrlPattern('/about');

http.createServer(function(req, res) {
    console.log('server is listening on port 4000');

    if(homeEndPoint.match(req.url)){

        fs.readFile('./index.html', function(err, data){
            // res.writeHead(200, {'Content-Type': 'text/html',
            // "Authorization": "classweb"});
            res.write(data);
            res.end();

        })


    }else if(aboutEndPoint.match(req.url)){
        res.write('this is about page');
    }
   

}).listen(4000);