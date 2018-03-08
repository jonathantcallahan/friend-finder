const path = require('path');
const data = require('./api/api-data')


module.exports = function(app){
    app.post('/api-post', (req,res) => {
        console.log(req.body)
        if(req.body){
            data.push(req.body)
        }
    });
    app.get('/api', (req,res) => {
        res.json(data)
    })

}