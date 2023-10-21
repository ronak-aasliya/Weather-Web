const exp = require("constants");
const express = require("express");
const path = require("path");
const hbs = require("hbs");
const app = express();
const req = require('express/lib/request');
const port = process.env.PORT || 3000;

const staticpath = path.join(__dirname,"../public/");

const template_path = path.join(__dirname,"../templates/views");
const partialsPath = path.join(__dirname,"../templates/partials");

app.set('view engine','hbs');
app.set('views',template_path);
hbs.registerPartials(partialsPath);
app.use(express.static(staticpath));


app.get("",(req,res)=>{
    res.render("index");
});

app.listen(port, ()=>{
    console.log(`server is running on ${port}`);
})