const mongpoose = require("mongoose")

const connectToDb = () => {
    if(mongpoose.connections[0].readyState){
        console.log("masoud connect bodam :)");
        return false
    } else {
        mongpoose.connect("mongodb+srv://bahaminwp:bahamin1364@bahamincluster.zht7zml.mongodb.net/firstStore")
        console.log("masoud connect shodam :)");
    }
}

export default connectToDb