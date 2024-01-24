# Music Player Application

## The Structure of The Component

**Player Component**

  + Player Header Component
    + Play All Button
     + Add All Button
     + Track Number Button
     + Filter Field
+ Song list Component
   + Song row Component
+ Upload Music Form Component
  + Upload Button
  + Choose File Button
    
## The State Management Approach

In this code the state management approach is primarily based on the usage of the '**useState**' hook to manage the state of the '**trackList**' array. The '**trackList**' array represents the list of songs, and its state is updated using the '**setTrackList**' function.
+ **State Initialization**:The trackList state is initialized using the useState hook, and it contains an array of objects representing each track with properties such as id, src, and isPlaying.
+ **Updating State**: The play function is used to update the isPlaying property of the trackList state. It uses the setTrackList function to update the state based on the trackId. It also includes logic for playing/pausing audio, although the actual implementation is not provided.
+ **Rendering Based on State**: The component renders based on the state of trackList. It maps over the trackList array and displays various details for each track, such as song name, artist name, track number, and icons, using the find method to retrieve information from corresponding arrays (songNames, artistName, and track).
## Steps to Follow to Run the Application Locally
+ Install Node.js along with npm on your machine
+ Set Up a New React Application by opening a terminal or command prompt and running the following command to create a new React application using Create React App: **npx create-react-app music-player**
+ Navigate to the Project Directory by changing into the project directory using this command: **cd music-player**
+ Replace the contents of the src directory in your new React application with the contents of the src directory from your music player application.
+ Install Dependencies by using **npm install**
+ Run the Application with **npm start**
