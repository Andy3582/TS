const express = require("express");
const cors = require("cors");
const Server = express();



Server.use(cors());
Server.use(express.json());


Server.get("/message", (req, res) => {
         res.json({ message: "Hello from server!" });
});


Server.listen(8000, () => {
    console.log(`Server is running on port 8000.`);
  });