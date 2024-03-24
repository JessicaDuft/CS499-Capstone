



const mongoose = require('mongoose')
const Room = mongoose.model('rooms')
const User = mongoose.model('users');


// Make Mongoose use `findOneAndUpdate()`. Note that this option is `true`
// by default, you need to set it to false.
//mongoose.set('useFindAndModify', false);
//mongoose.connect(CONNECTION_URL).then(()=>{console.log('...')})

// GET: /rooms







const getAllRooms = async (req, res) => {
    Room
        .find({})
        .exec((err, rooms) => {
            if(!rooms) {
                return res
                    .status(404)
                    .json({ "message": "rooms not found"});

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


const getRoomByCode = async (req, res) => {
    Room
        .find({ 'code': req.params.roomCode })
        .exec((err, room) => {
            if (!room) {
                return res  
                    .status(404)
                    .json({"message": "That room was not found"});

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
    getUser(req, res, 
        (req, res) => {
            Room
            .create({
                code: req.body.code,
                name: req.body.name,
                length: req.body.length,
                start: req.body.start,
                resort: req.body.resort,
                perPerson: req.body.perPerson,
                image: req.body.perPerson,
                image: req.body.image,
                description: req.body.description
            },
            (err, room) => {
                if (err) {
                    return res
                        .status(400) // bad request, invalid content
                        .json(err);
                } else {
                    return

                }
            });
        }
    );

}

const roomsDeleteRoom = async (req, res) => {
    getUser(req, res,
        (req, res) => {
            console.log("inside rooms.js on server #roomsDeleteRoom");
            Room.findOneAndDelete({'code': req.params.roomCode})
            
        
            .then(room => {
                if (!room) {
                    return res
                        .status(404)
                        .send({
                            message: "Room not found with code " + req.params.roomCode
                        });
        
                }
                return res
                    

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
            })
            console.log("return from delete room");

        });


}

const roomsUpdateRoom = async (req, res) => {
    getUser(req, res,
        (req, res) => {
            
            Room  
                .findOneAndUpdate({ 'code': req.params.roomCode }, {
                    code: req.body.code,
                    name: req.body.name,
                    length: req.body.length,
                    start: req.body.start,
                    resort: req.body.resort,
                    perPerson: req.body.perPerson,
                    image: req.body.perPerson,
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
                    return res
                        
        
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
                })
                console.log("completed updateRoom");
        })
}

const roomsFindCode = async (req, res) => {
    Room.find({ code: req.params.roomCode }).exec((err, room) => {
      if (!room) {
        return res.status(404).json({ message: "room not found" });
      } else if (err) {
        return res.status(404).json(err);
      } else {
        return res.status(200).json(room);
      }
    });
  };


  const getUser = (req, res, callback) => {
    if (req.payload && req.payload.email) {
        User
            .findOne({ email: req.payload.email })
            .exec((err, user) => {
                if (!user) {
                    return res
                        .status(404)
                        .json({ "message": "User not found" });
                } else if (err) {
                    console.log(err);
                    return res
                        .status(404)
                        .json(err);
                }
                callback(req,res,user.name);
            });
        } else {
            return res
                .status(404)
                .json({ "message": "User not found" });
        
    }
};

module.exports = {
    getAllRooms,
    getRoomByCode,
    roomsAddRoom,
    roomsUpdateRoom,
    roomsDeleteRoom,
    roomsFindCode,
    
};
