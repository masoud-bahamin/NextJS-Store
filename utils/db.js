const mongpoose = require("mongoose");

const connectToDb = () => {
  if (mongpoose.connections[0].readyState) {
    return false;
  } else {
    mongpoose.connect(
      "mongodb+srv://bahaminwp:bahamin1364@bahamincluster.zht7zml.mongodb.net/firstStore"
    );
  }
};

export default connectToDb;
