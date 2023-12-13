// require("mongoose").connect("mongodb+srv://jamessteppingstone:8kRzg07Hd5XRlNhY@cluster0.f3q5ypo.mongodb.net/?retryWrites=true&w=majority")
require("mongoose").connect("mongodb://0.0.0.0:27017/tss5_new")
.then(()=>{
    console.log("CONNECTION SUCCESS")
})
.catch((err)=>{
    console.log("CONNECTION FAIELD")
    
})

//jamessteppingstone
//8kRzg07Hd5XRlNhY
// mongoimport --uri "mongodb+srv://jamessteppingstone:8kRzg07Hd5XRlNhY@cluster0.f3q5ypo.mongodb.net/?retryWrites=true&w=majority" --collection city --file city.json --jsonArray