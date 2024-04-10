const mongoose = require('mongoose')
const Room = mongoose.model('rooms')



mongoose.set('useFindAndModify', false);

// GET: /rooms



const sortRoomsDesc = async (req, res) => {
    Room
        .find({}).sort({'rate':'desc'})
        
      //implemented price sorting feature by adding in .find({}).sort({'rate':'desc'}) , sorts from highest to lowest
  
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
    sortRoomsDesc,

    getRoomByCode
    
};
