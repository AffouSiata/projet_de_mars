const express = require("express");
const app = express();
const Accueil = require("./route/Accueil")

app.set("views","./views");
app.set("view engine","ejs")



app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/public',express.static('public'))


app.use('/',Accueil)


app.listen(3000,()=>{
    console.log("listening on port 3000");
})