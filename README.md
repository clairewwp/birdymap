# BirdyMap

BirdyMap is a mashed-up web application that provides a map interface for viewing bird-related data. It leverages various APIs to deliver an interactive and informative experience for bird enthusiasts.

## Features

- **Interactive Map**: Explore bird sightings and locations on an interactive map interface.
- **API Integration**: Utilizes APIs to fetch bird-related data including videos, images, and sighting information.


## Technologies Used

- **Node.js**: The application is built using Node.js, providing server-side functionality.
- **Express.js**: A minimal and flexible Node.js web application framework used for routing and server logic.
- **Esri-Leaflet**: A lightweight set of tools for using ArcGIS services with Leaflet.js for rendering the maps.

### APIs

- **YouTube API**: Used to fetch bird-related videos.
- **Flickr API**: Used to fetch bird images.
- **eBird API**: Used to fetch bird sighting data.

To use BirdyMap, navigate to  https://birdymap.onrender.com

## How to Use BirdyMap

1. **Enter a Country Code**
   - Enter a country code (e.g., `IT` for Italy) into the search bar.
   - The world map will focus on the selected country, displaying pins representing locations where specific birds have been sighted.

2. **Select a Pin**
   - Click on a pin on the map to view details about a bird observed at that location.
   - The selected pin will display information about the bird species sighted there.

3. **View Media Content**
   - After selecting a pin, the right-hand column will show:
     - A YouTube video about the selected bird species.
     - Two photos from Flickr showcasing the appearance of the bird.

### Example Usage

1. **Search for the birds sighted in Italy**
   - Enter `IT` in the search bar and press Enter.
   - The map zooms in on Italy, showing pins across various locations where birds have been sighted.

2. **Explore Bird Sightings**
   - Click on a pin to see which bird species have been observed at that specific location.

3. **Discover More**
   - Watch YouTube videos and view Flickr photos to learn more about the bird species sighted in different regions of Italy and beyond.

### Notes

- Ensure an active internet connection to fetch and display YouTube videos and Flickr photos.
- Explore different pins on the map to discover a variety of bird sightings and learn more about each species through videos and photos.

Enjoy using BirdyMap to explore the fascinating world of bird diversity and sightings!
