const mongoose = require('mongoose');
const Room = mongoose.model('rooms')

const model = mongoose.model('rooms');

// Make Mongoose use `findOneAndUpdate()`. Note that this option is `true`
// by default, you need to set it to false.
mongoose.set('useFindAndModify', false);

// GET: /rooms

const getAllRooms = async (req, res) => {
    model
        .find({})
        .exec((err, rooms) => {
            if(!rooms) {
                return res
                    .status(404)
                    .json({ "message": "room not found"});

            } else if (err) {
                return res
                    .status(404)
                    .json(err);
            } else {
                return res 
                    .status(200)
                    .json(rooms);
            }
        });
};


// GET: /room/:roomCode - returns a single room
const getRoomByCode = async (req, res) => {
    Room
        .find({ 'code': req.params.roomCode })
        .exec((err, room) => {
            if (!room) {
                return res
                    .status(404)
                    .json({ "message": "Room not found" });
            } else if (err) {
                return res
                    .status(404)
                    .json(err);
            } else {
                return res
                    .status(200)
                    .json(room)
            }
        });
};


const roomsAddRoom = async (req, res) => {
    model
    .create({
        code: req.body.code,
        name: req.body.name,
        rate: req.body.rate,
        image: req.body.image,
        description: req.body.description
    },
    (err, room) => {
        if (err) {
            return res
                .status(400) // bad request, invalid content
                .json(err);
        } else {
            return res  
                .status(201) // created
                .json(room);
        }
    });
}

const roomsDeleteRoom = async (req, res) => {

    console.log("inside rooms.js on server #roomsDeleteRoom");
    model.findOneAndDelete({'code': req.params.roomCode})
    

    .then(room => {
        if (!room) {
            return res
                .status(404)
                .send({
                    message: "Room not found with code " + req.params.roomCode
                });

        }
        res.send(room);
    }).catch(err => {
        if (err.kind === 'ObjectId') {
            return res
                .status(404)
                .send({
                    message: "Room not found with code " + req.params.roomCode
                });
        }
        return res
            .status(500) // server error
            .json(err);
    });

}

const roomsUpdateRoom = async (req, res) => {
    console.log(req.body);
    model  
        .findOneAndUpdate({ 'code': req.params.roomCode }, {
            code: req.body.code,
            name: req.body.name,
            rate: req.body.rate,
            image: req.body.image,
            description: req.body.description
        }, {new: true})
        .then(room => {
            if (!room) {
                return res
                    .status(404)
                    .send({
                        message: "Room not found with code " + req.params.roomCode
                    });
            }
            res.send(room);

        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res
                    .status(404)
                    .send({
                        message: "Room not found with code " + req.params.roomCode
                    });
            }
            return res
                .status(500) // server error
                .json(err);
        });
}


module.exports = {
    getAllRooms,
    getRoomByCode,
    roomsAddRoom,
    roomsUpdateRoom,
    roomsDeleteRoom
};
