const express = require("express");
const app = express(); // setup up the server
const port = process.env.PORT || 3001;
const cors = require("cors");

//solve cors issue
app.use(cors());

// run the server
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
//Vercel rewrites all incoming requests to the "/api"
//To make these routes accessible through the Vercel deployment, they need to match the rewritten paths.
app.get("/api", (req, res) => {
  res.send("server is up and running");
  console.log("server is up and running!");
});

// import the routes
const galleryRouter = require("./routes/gallery");
const merchGalleryRouter = require("./routes/merchgallery");

// link the routes
app.use("/api", galleryRouter);
app.use("/api", merchGalleryRouter);


module.exports = app; // CommonJS syntax to export
