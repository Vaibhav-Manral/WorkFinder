const app = require("./index");
const connect = require("./config/db");  //connection from mongoose

app.listen(5555, async () => {
    try {
      await connect();
      console.log("listening on port 5555");
    } catch (e) {
      console.log(e.message);
    }
  });
  