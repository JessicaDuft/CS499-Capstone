const mongoose = require('mongoose')
const Room = mongoose.model('rooms')



mongoose.set('useFindAndModify', false);

// GET: /rooms



const sortRoomsAsc = async (req, res) => {
    Room
        .find({}).sort({'rate':'asc'})
     //implemented price sorting feature by adding in .find({}).sort({'rate':'asc'}) , sorts from lowest to highest   
        
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














module.exports = {
    sortRoomsAsc,

    getRoomByCode
    
};
