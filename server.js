const http = require('http');
const fs = require('fs');

const PORT = process.env.PORT || process.argv[2] || 80;

const server = http.createServer(handleRequest);

function handleRequest(req, res){
    switch(req.url){
        case '/survey':
        //Having trouble referencing the filepaths.
        //Idk why, getting an err that the filepath doesn't
        //exist.
        //Going to move them to the top of the hierarchy 
        //temporarily.
            servePage(res, '/survey.html');
            break;
        default:
            servePage(res, '/home.html');
            break;
        case '/surveyData':
            handlePost(req);
    };
    
    function handlePost(req){
        var responseStr = '';
        req.on('data', data => {
            responseStr += data;
            console.log(responseStr)
        })
    }
    

}

server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})

function servePage(res, filepath){
    fs.readFile(__dirname + filepath, function(err, data){
        if(err) throw err;
        res.writeHead(200, {'Content-Type':'text/html'});
        res.end(data)
    })
}