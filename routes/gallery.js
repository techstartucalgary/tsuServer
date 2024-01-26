const { Router } = require("express");
const router = Router();
const axios = require("axios");
require('dotenv').config();

router.get("/gallery", async (req, res) => {
  console.log("Connected to TechStart Gallery");

  try {
    const data = await retrieveAlbum();
    const links = extractPhotos(data);
    res.json(links);
  } catch (error) {
    console.error("Error fetching and extracting photos:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

const retrieveAlbum = async () => {
  const response = await axios.get(process.env.GOOGLE_PHOTOS_URL,
    { responseType: "text" }
  );
  return response.data;
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
