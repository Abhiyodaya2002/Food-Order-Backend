const mongoose = require("mongoose");
const mongoURI="mongodb+srv://abhiyodaya2002:pandey150402@cluster0.yii2q.mongodb.net/FoodFlowMern"
const mongodb=async()=>{
    try{
await mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
console.log("data base is connected!");
const fetched_data=await mongoose.connection.db.collection("food_items");
const data=await fetched_data.find({}).toArray();

const foodCategory= await mongoose.connection.db.collection("foodCategory");
const catData=await foodCategory.find({}).toArray();
global.food_items= data; 
global.foodCategory= catData;
 //This global.food_items will be accessible in all files directly
   // console.log(global.food_items);
}
    catch(err)
    {
        console.log(err);
    }
}
module.exports=mongodb();