const http = require ('http');

const server =http.createServer((req,res)=>{
    // res.end("Hello Coder Army");
    if(req.url==="/"){
        res.end("Hello COder Army");
    }
    else if(req.url==="/contact"){
        res.end("this is contact Page")
    }
    
    else if(req.url==="/about"){
        res.end("this is my About page")
    }
    else{
        res.end("Error: page not Found");
    }

});

server.listen(4000, ()=>{
    console.log("i am listining at port number 4000");
})