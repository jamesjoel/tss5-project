const express = require("express");
const app = express();
const cors = require("cors");
const upload = require("express-fileupload");
const routes = require("./routes/allRoutes");

// for live server
const root = require("path").join(__dirname, "build");


app.use(express.static(__dirname+"/assets"));

// for live server
app.use(express.static(root));


app.use(express.json());
app.use(express.urlencoded( { extended : true}));
app.use(cors()); // CORS enable
app.use(upload());

app.use(routes)

app.get("*", (req, res)=>{
    res.sendFile("index.html", {root});
})





const port = process.env.PORT || 8080;
app.listen(port, ()=>{
    // console.log("Server Running with port "+ port);
    console.log(`Server Running with port ${port}`);
})