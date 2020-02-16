const route = require(express.Route);


app.get('/api', (request,response) => {
    response.json(members);
    });
    
    app.get('/api/members/:id', (req,res) => {
    let id = req.params.id;
    res.end(id);
    });