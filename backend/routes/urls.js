const router = require('express').Router();
let Url = require('../models/urls.model');

router.route('/').get( (req,res) => {
    Url.find()
        .then( urls => res.json(urls))
        .catch( err => res.status(400).json('Error: ' + err));
});

router.route('/add').post( (req, res) => {
    const link = req.body.link;
    const newUrl = new Url({link});

    newUrl.save()
        .then( () => res.json('Url added!'))
        .catch( err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get( (req, res) => {
    Url.findById(req.params.id)
        .then( url => res.json(url))
        .catch( err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete( (req, res) => {
    Url.findByIdAndDelete(req.params.id)
        .then( url => res.json('Url deleted!'))
        .catch( err => res.status(400).json('Error: ' + err));
});

router.route('/:id').put( (req, res) => {
    Url.findById(req.params.id)
        .then( url => {
            url.link = req.body.link;

            url.save()
                .then( () => res.json('Url updated!'))
                .catch( err => res.status(400).json('Error: ' + err));
        })
        .catch( err => res.status(400).json('Error: ' + err));
});

module.exports = router;