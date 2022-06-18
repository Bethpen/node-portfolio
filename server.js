const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res) => {
    
// set header content type
res.setHeader('content-type', 'text/html');

//creating a variable to contain the followed path
let route = './'


if(req.url === '/'){
    route += 'index.html';
}else if(req.url === '/about'){
    route += 'about.html';
}else if(req.url === '/contact'){
    route += 'contact.html';
}else {
    route += 'error.html'
}

fs.readFile(route, (err, data)=>{
    if(err){
        console.log(err);
        res.end();
    }else {
        res.write(data);
    }
})

});

server.listen(4000);
console.log(`The HTTP server is running on port 4000`);


