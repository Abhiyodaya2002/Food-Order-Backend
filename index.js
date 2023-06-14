const express=require("express");
const app=express();
const path=require("path");

const port=5000;
const mongoDB=require("./db");
// mongoDB();

app.use((req,res,next)=>{  //For CORS policy error
    res.setHeader("Access-Control-Allow-Origin", "https://foodflow-frontend.onrender.com");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
})


app.use(express.json());
app.use("/api", require("./Routes/CreateUser"));
app.use("/api", require("./Routes/DisplayData"));
app.use("/api", require("./Routes/OrderData"));

//For hosting
// app.use(express.static(path.join(__dirname, "../client/build")));
// app.get('*', function(req,res){
//     res.sendFile(path.join(__dirname, "../client/build/index.html"));
// })
app.listen(port, ()=>{
    console.log(`server running at port ${port}`);
})