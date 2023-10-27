# Project-6
# Photo Sharing App with MongoDB Integration - full stack application 
This project involves enhancing your Photo Sharing App by integrating it with MongoDB, making it a full-stack application. Below are the instructions on how to set up, run, and understand the changes made to the application.

# Project Setup
# Prerequisites
Node.js and MongoDB should be installed on your system. If not, follow the installation instructions mentioned in Project 0.
Installation Steps
# Clone the Repository:


git clone <repository-url>
cd project6


# Install Dependencies:


npm install

# Start MongoDB:
Make sure MongoDB is running either in a separate terminal window or as a background process.


mongod (args) &
Initialize the Database:
# Load the sample data into the MongoDB database.


node loadDatabase.js

# Start the Node.js Web Server:

node webServer.js
Alternatively, you can use nodemon for automatic server restarts:


nodemon webServer.js

# Project Overview
# Problem 1: Convert the Web Server to Use the Database
Modify webServer.js to fetch models from the MongoDB database instead of using the magic models.

# Implement API endpoints:
/test: Return schema info and object counts of the database for testing purposes.
/user/list: Return a list of users for the navigation sidebar.
/user/:id: Return detailed information about a specific user.
/photosOfUser/:id: Return photos of a specific user along with comments.

# Problem 2: Convert App to Use Axios
Replace the custom FetchModel function with Axios for fetching data from the web server.
Update components in photoShare.jsx and other files to use axios.get instead of FetchModel.

# Extra Credit (Optional)
Implement a feature to show count bubbles next to user names in the navigation sidebar.
Clicking on the comment count bubble should display all comments made by the user, including photo thumbnails.
Ensure the feature is toggleable with an advanced feature flag.
Testing
The project includes a backend test suite in the test directory.
To run tests, navigate to the test directory and execute:

npm install
npm test

# Project Structure
webServer.js: Entry point of the Node.js web server.
components/: React components for different views.
schema/: Mongoose schema definitions for User and Photo objects.
loadDatabase.js: Script to load sample data into the MongoDB database.
test/: Backend testing suite using Mocha.

# Additional Notes
Ensure that your code adheres to proper MVC decomposition.
Run npm run lint to check for any linting errors in your code.
Make sure the application remains visually appealing and convenient to use.
Include any additional instructions or notes about extra credit implementations in your README file.
