const router = require('express').Router();

const validUrl = require('valid-url');
const shortid = require('shortid');

let Url = require('../models/urls.model');

router.route('/').get( (req,res) => {
    Url.find()
        .then( urls => res.json(urls))
        .catch( err => res.status(400).json('Error: ' + err));
});

// router.route('/add').post( (req, res) => {
//     const link = req.body.link;
//     const newUrl = new Url({link});

//     newUrl.save()
//         .then( () => res.json('Url added!'))
//         .catch( err => res.status(400).json('Error: ' + err));
// });

router.route('/add').post( async (req, res) => {

    const { longUrl }  = req.body;
    console.log(req.body)
    const baseUrl = 'http://localhost:3000';

    // check base url
    if (!validUrl.isUri(baseUrl)) {
        return res.status(401).json('Invalid base url');
    }
    
    //create url code
    const urlCode = shortid.generate();

    //check long url
    if (validUrl.isUri(longUrl)) {
        
        try {
            let url = await Url.findOne({ longUrl });
            
            if (url) {
                res.json(url);
            } else {
                const shortUrl = baseUrl + '/' + urlCode;

                url = new Url ({
                    longUrl: longUrl,
                    shortUrl: shortUrl,
                    urlCode: urlCode,
                    date: new Date()
                });
                
                await url.save();
                res.json(url);
            }
            
        } catch (err) {
            console.error(err);
            res.status(500).json('Server Error');
        }
        
    } else {
        res.status(401).json('Invalid long url');
    }

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