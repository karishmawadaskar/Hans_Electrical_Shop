import {model,Schema} from 'mongoose';

const productSchema = new Schema({
   name:{
        type:String,
        required:true,
    },
    shortDescription:{
        type:String,
        required:true,
    }, 
    longDescription:{
        type:String,
        required:true,
    },
    price:{
        type:number,
        required:true,
    },  
     currentPrice:{
        type:number,
        
    }, 
     category:{
        type:[],
        required:true,
    }, 
     images:{
        type:[],
        required:true,
    }, 
    tags:{
        type:[String],
       
    }, 
},
{
   timestamps:true,
});

const Product = model("product",productSchema);

export default Product;