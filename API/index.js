// serverless function

// // import our express API
// import app from '../server';

// // export our express API
// export default app;

const express = require("express");
const app = express(); // setup up the server
const port = process.env.PORT || 5000;
const cors = require('cors');

//solve cors issue when tsu website connects
app.use(cors());


// run the server
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
}
)
//Vercel rewrites all incoming requests to the "/API" 
//To make these routes accessible through the Vercel deployment, they need to match the rewritten paths. 
app.get('/api', (req, res) => {
    res.send("server is up and running")
    console.log('server is up and running!');
})

// import the routes
const galleryRouter = require("./routes/gallery")

// link the routes
app.use("/api/gallery", galleryRouter)

module.exports = app; // CommonJS syntax to export