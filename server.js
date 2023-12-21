const express = require("express");
const app = express(); // setup up the server
const port = 5000;
const cors = require('cors');

//solve cors issue when tsu website connects
app.use(cors());


// run the server
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
}
)
app.get('/', (req, res) => {
    res.send("server is up and running")
    console.log('server is up and running!');
})

// import the routes
const galleryRouter = require("./routes/gallery")

// link the routes
app.use("/gallery", galleryRouter)

