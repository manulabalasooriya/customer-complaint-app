var bodyParser = require('body-parser')
var urlEncodedParser = bodyParser.urlencoded({extended:'false'})

module.exports = (app) => {

   data = ['A','B','C']

    app.get('/complaint',(req,res) => {
        res.render('complaints', {data:data})
    })
    app.post('/complaint',urlEncodedParser,(req,res) => {
        console.log(req.url)
    })
    app.delete('/complaint',(req,res) => {
        
    })
}