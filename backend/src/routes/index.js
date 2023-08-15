const { Router } = require('express');
const router = Router();
const { mongooseSchema } = require('../helpers/connection')

router.get('/language/:lang', async (req, res) => {   
    res.setHeader('Access-Control-Allow-Origin', '*');
    
    let lang = req.params.lang   
    mongooseSchema.find({'templateLanguage': lang})
    .then( response => {
        res.json(response)
    })
});

router.get('/languages/', async (req, res) => {   
    res.setHeader('Access-Control-Allow-Origin', '*');
    
    let languages = [];
    mongooseSchema.find({})
    .then( response => {
        response.forEach(element => {
            languages.push(element.templateLanguage)
        });
        res.json(languages)
    })
});


module.exports = router;