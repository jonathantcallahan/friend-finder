const path = require('path')

module.exports = function(app){
    app.get('/', (req, res) => {
        console.log(req.path);
        res.sendFile(path.join(__dirname + '/public/home.html'))
    })
    app.get('/survey', (req,res) => {
        console.log(req.path);
        res.sendFile(path.join(__dirname + '/public/survey.html'))
    })
}