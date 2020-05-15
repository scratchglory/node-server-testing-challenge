const express = require("express");
const cors = require("cors");
const songsRouter = require("./songs/songs-router");

const server = express();
const port = 5000;

server.use(cors());
server.use(express.json());
server.use("/songs", songsRouter);

server.get("/", (req, res, next) => {
  res.json({ message: "Types of Songs List" });
});
server.use((err, req, res, next) => {
  console.log("ERROR FROM index.js", err);
  res.status(500).json({ message: "check console for error" });
});

if (!module.parent) {
  server.listen(port, () => {
    console.log(`listening on ${port}`);
  });
}

module.exports = server;
