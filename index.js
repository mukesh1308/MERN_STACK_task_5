const express=require("express");

const app=express();
const port=800;


app.use(express.static(__dirname+"/public"));


app.get("/project",async(req,res)=>{
    try{
        res.sendFile(__dirname+"/public/project.html");
    }
    catch(err){
        res.send("error");
    }
});

app.get("/about",async(req,res)=>{
    try{
        res.sendFile(__dirname+"/public/about.html");
    }
    catch(err){
        res.send("error");
    }
})

app.get("/contact",async(req,res)=>{
    try{
        res.sendFile(__dirname+"/public/contact.html");
    }
    catch(err){
        res.send("errot");
    }
})


app.listen(port,()=>{
    console.log("listening to port "+port);
});
