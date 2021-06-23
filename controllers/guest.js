const { Guest } = require("../models/GuestModel");
const ex = module.exports;


ex.add = (req, res) => {
    Guest.create(req.body)
        .then(guest => res.json(guest))
        .then(console.log(req.body))
        .catch(err => res.json({
            "error": err,
            "message": "Something went Wrong"
        }));
}

ex.editGuest = (req, res) => {
    Guest.findOneAndUpdate(filtergoeshere,req.body)
        .then(guest => res.json(guest))
        .then(console.log(req.body))
        .catch(err => res.json({
            "error": err,
            "message": "Something went Wrong"
        }));
}

ex.showAllGuests = (req, res) => {
    
    Guest.find()
        .then(guest => res.json(guest))
        .catch(err => res.json(err));
};

ex.deleteGuest = (req, res) => {
    Guest.deleteOne({ _id: req.params.id })
    .then(deleteConfirmation => res.json(deleteConfirmation))
    .catch(err => res.json(err))
};

