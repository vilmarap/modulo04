const express = require('express')
const routes = express.Router()

routes.get('/', function(req, res) {
    return res.redirect("/instructors")
})

routes.get('/instructors', function(req, res) {
    return res.render("instructors/index")
})

routes.get('/instructors/create', function(req, res) {
    return res.render("instructors/create")
})

routes.post("/instructors", function(req, res) {
    // req.query
    // req.body

    const keys = Object.keys(req.body)

    for(key of keys) {
            // req.body.key == "" 
        if (req.body[key] == "")
            return res.send('Please, fill all fields!')
    }

    // if para trazer apenas o nome no formulario
    // if(req.body.name =="") { 
    //     return res.send("Preencha o nome do Instrutor")
    // }
    // return res.send(keys)

    return 
})

routes.get('/members', function(req, res) {
    return res.send("members")
})


module.exports = routes
