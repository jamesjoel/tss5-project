require("mongoose").connect("mongodb+srv://jamessteppingstone:8kRzg07Hd5XRlNhY@cluster0.f3q5ypo.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    console.log("CONNECTION SUCCESS")
})
.catch((err)=>{
    console.log("CONNECTION FAIELD")
    
})

//jamessteppingstone
//8kRzg07Hd5XRlNhY