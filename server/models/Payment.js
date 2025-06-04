import {model,Schema} from 'mongoose';

const paymentSchema = new Schema({
   paymentMode:{
        type:String,
        required:true,
    },
    amount:{
        type:Number,
        required:true,
    }, 
    transactionId:{
        type:String,
        required:true,
    },
    Status:{
        type:number,
        required:pending,
    },  
    
},
{
   timestamps:true,
});

const payment = model("Payment",paymentSchema);

export default Payment;