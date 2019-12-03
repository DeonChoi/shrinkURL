const router = require('express').Router();
let Url = require('../models/urls.model');

router.route('/').get( (req,res) => {
    Url.find()
        .then( users => res.json(users))
        .catch( err => res.status(400).json('Error: ' + err));
});

router.route('/add').post( (req, res) => {
    const url = req.body.url;
    const newUrl = new Url({url});

    newUrl.save()
        .then( () => res.json('Url added!'))
        .catch( err => res.status(400).json('Error: ' + err));
});

module.exports = router;