const express=require("express");
const bodyParser=require("body-parser");
const ejs=require("ejs");
const app=express();


app.set('view engine','ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));


app.get("/",function(req,res){
res.render("home");
});

app.get("/services",function(req,res){
res.render("services");
});


app.get("/corporate",function(req,res){
res.render("corporate");
});

app.listen(3000,function(){
  console.log("server running on port 3000");
});
