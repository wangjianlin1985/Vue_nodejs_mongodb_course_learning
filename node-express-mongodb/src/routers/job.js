
const express = require('express');
const router = express.Router();
const Job = require("../models/job.js");

router.get('/job/find', (req, res) => {
    
    Job.find({}).populate('job').exec((err, docs) => {
        if(err) {
            console.log('Error:' + err)
            return;
        }
        res.send(docs);
    })
})

module.exports = router;