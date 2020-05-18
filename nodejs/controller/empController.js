const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Employee = require('../models/empModel');
mongoose.set('useFindAndModify', false);

router.get('/', (req, res) => {
    Employee.find((err, docs) => {
        if (!err) {
            res.status(201).json(docs);
        } else {
            res.status(400).json({
                error: err
            });
        }
    })
});
router.post('/', (req, res) => {
    const emp = new Employee({
        name: req.body.name,
        department: req.body.department,
        location: req.body.location,
        gender: req.body.gender
    });
    emp.save((err, doc) => {
        if (!err) {
            res.status(201).json(doc);
        } else {
            res.status(400).json({
                error: err
            });
        }
    })


})
router.delete('/:id', (req, res) => {
    Employee.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.status(201).json(doc);
        } else {
            res.status(400).json({
                error: err
            });
        }
    })
})
router.put('/:id', (req, res) => {
    const emp = ({
        name: req.body.name,
        department: req.body.department,
        location: req.body.location,
        gender: req.body.gender
    });

    Employee.findByIdAndUpdate(req.params.id, { $set: emp }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc) } else {
            console.log("error in retrieving " + JSON.stringify(err, undefined, 2))
        }
    })
})
router.get('/:id', (req, res) => {
    Employee.findById(req.params.id, (err, doc) => {
        if (!err) {
            res.status(201).json(doc);
        } else {
            res.status(400).json({
                error: err
            });
        }
    })
})
module.exports = router;