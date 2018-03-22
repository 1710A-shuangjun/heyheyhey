var http = require("http");
var fs = require("fs");

http.createServer(function(req,res){
	
	fs.readFile("./Jun.json",function(err,data){
		
		if(err){
			return console.log(err);
			res.writeHead(404,{"Access-Control-Allow-Origin":"*"});
		}else{
			res.writeHead(200,{"Access-Control-Allow-Origin":"*"});
			res.write(data);
		}
		res.end();
	})
	
}).listen(40077,function(){
	console.log("ok");
})
