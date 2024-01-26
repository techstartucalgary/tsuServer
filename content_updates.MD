express API: https://www.youtube.com/watch?v=SccSCuHhOw0&t=978s
resource on how to host on vercel: https://www.youtube.com/watch?v=B-T69_VP2Ls

# Content Updates Guide

This guide documents how and when to update the server. Currently, the server is only responsible for hosting the retrieving the images from our Google photos library.

- [Content Updates Guide](#content-updates-guide)
  - [Routes](#routes)
     [Gallery](#gallery)


## routes

### Gallery

Gallery is responsible for receiving an HTTP Get request from our frontend. 
From there, Gallery communicates with the Google album via URL, and finally returns JSON of pics URL

