const mongoose=require("mongoose");

const Bus_Schema=new mongoose.Schema({
    bus_Name:
    {
        type:String,
        required:true
    },
    no_Of_Seats:
    {
        type:Number,
        required:true
    },
    no_Of_Seats_Booked:
    {
        type:Number,
        default:0
    }
})

module.exports=mongoose.model("Bus_Model",Bus_Schema);