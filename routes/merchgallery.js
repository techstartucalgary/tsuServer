const { Router } = require("express");
const router = Router();
const axios = require("axios");
require('dotenv').config();

router.get("/merchgallery", async (req, res) => {
  //show the orign of the request
  console.log("client IP: ",  req.ip, ", connects to merch endpoint of TechStart server");

  try {
    const data = await retrieveAlbum();
    const links = extractPhotos(data);
    console.log(`Successfully retrieved ${links.length} photos from the album.`);
    res.json(links);
  } catch (error) {
    console.error("Error fetching and extracting photos:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

const retrieveAlbum = async () => {
  try {
    // URL for the Google Photos album
    const albumUrl =process.env.GOOGLE_MERCH_PHOTOS_URL;
    
    // Make the request to Google Photos
    const response = await axios.get(albumUrl, { responseType: "text" });
    
    // Check if the response contains data
    if (response && response.data) {
      return response.data;
    } else {
      throw new Error("Google Photos API response did not contain data.");
    }
  } catch (error) {
    console.error("Error fetching album:", error);
    throw new Error("Error fetching album");
  }
};

function extractPhotos(content) {

  // Regular expression to match Google Photos URLs
  const regex = /(https:\/\/lh3\.googleusercontent\.com\/pw\/[^"']+)["']/g; 

  const links = new Set();// Create a new Set to store unique photo links
  let match;
  while ((match = regex.exec(content))) {
    if (!match[1].includes("=w")) {
      //don't include links with a set width and height
      links.add(match[1]);
    }
  }
  return Array.from(links);
}

module.exports = router;