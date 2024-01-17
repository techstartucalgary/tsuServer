const { Router } = require("express");
const router = Router();
const axios = require('axios');


router.get("/gallery", async (req, res) => {
    console.log("Connected to TechStart Gallery");

    try {
        const data = await retrieveAlbum();
        // console.log(data);
        const links = extractPhotos(data);
        // console.log(links)
        res.json( links );
    } catch (error) {
        console.error('Error fetching and extracting photos:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

const retrieveAlbum = async () => {
    //url is for pitch night videos and footage
    const response = await axios.get(`https://photos.app.goo.gl/SkVei5N56poqTh8g8`, { responseType: 'text' });
    return response.data;
};

function extractPhotos(content) {

    // Use a regex pattern to match URLs with "/pw/"
    // use to get rid of the set width and height.
    // const regex = /(https:\/\/lh3\.googleusercontent\.com\/pw\/[^"']+)(?![?&]w=\d+&h=\d+)["']/g;
    const regex = /(https:\/\/lh3\.googleusercontent\.com\/pw\/[^"']+)["']/g;

    const links = new Set();
    let match;
    while (match = regex.exec(content)) {
        if(!match[1].includes("=w")){
            //don't include links with a set width and height
            links.add(match[1]);
        }
    } 
    return Array.from(links);
}

module.exports = router;
// rachout to ben and waika about hosting it on github 
//reachout to brian about deploying on vercel.
// once its has been integrated, style it