
const express = require("express");

const app = express();

app.use("/about",(req,res)=>{
    res.send({"name":"Ankit","age":21,"Address":"Chanpatia "});
})

app.use("/contact",(req,res)=>{
    res.send("i am in contact page ");
})

app.use("/detail",(req,res)=>{
    res.send("i am in details page");
})
app.use("/",(req,res)=>{
    res.send("i am at home page");
})
app.listen(5000,()=>{
    console.log("Listening at port 5000");
})



// app.use("/abou*t",(req,res)=>{
//     res.send({"name":"Ankit","age":21,"Address":"Chanpatia "});
// })
/*
?:- char become optional
+ :- char can be repeated multiple Time
* :- any number of character can arrive */

/* app.use("/about/:id",(req,res)=>{
    res.send({"name":"Ankit","age":21,"Address":"Chanpatia "});
}) ===>> for dynamically id assign. */