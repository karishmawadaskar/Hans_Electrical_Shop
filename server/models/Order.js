import {model,Schema} from 'mongoose';

const orderSchema = new Schema({
   userId:{
        type:Schema.Types.ObjectId,
        ref:"user", 
        required:true,
    },
    products:{
        type:[
            {
                productId:{
                    type:Schema.Types.ObjectId,
                    ref:"Product", 
                    required:true, 
                },
                quantity:{
                    type:Number,
                    required:true,
                },
                price:{
                    type:Number,
                    required:true,
                },
            }
        ],
        required:true,
    }, 
    totalBill:{
        type:Number,
        required:true,
    },
    deliveryAddress:{
        type:String,
        required:true,
    },  
     phone:{
         type:String,
        required:true,
        
    }, 
     paymentMode:{
        type:String,
        required:true,
    }, 
     paymentId:{
       type:Schema.Types.ObjectId,
        ref:"Payment", 
        required:true,
    }, 
    status:{
        type:String,
        required:"pending",
       
    }, 
    timeline:[
        {
          status:{
          type:String,
          required:"pending",
          },  
          date:{
            type:Date,
            default:Date.now,
          },
        },
    ]
    
},
{
   timestamps:true,
});

const Order = model("order",orderSchema);

export default Order;