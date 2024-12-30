module.exports = (app) => {



    app.get('/complaint',(req,res) => {
        res.render('complaints', { data: { data: ['Complaint 10', 'Complaint 2'] } });
    })
    app.post('/complaint',(req,res) => {
        
    })
    app.delete('/complaint',(req,res) => {
        
    })
}