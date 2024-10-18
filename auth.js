const express = require('express');
const { auth } = require('express-openid-connect');
require('dotenv').config();


// Create your existing Express app
const app = express();

// Auth0 configuration
const config = {
  authRequired: false,  // Users can access some parts without being logged in
  auth0Logout: true,    // Logout from Auth0 and the application
  secret: process.env.AUTH0_SECRET || 'a long, randomly-generated string', // Replace with a secure environment variable
  baseURL: process.env.BASE_URL || 'http://localhost:3000', // Set your app's base URL
  clientID: process.env.AUTH0_CLIENT_ID || 'Jo9iNfGPPONy052cIw9YHffefasUda5P',  // Your Auth0 Client ID from the dashboard
  issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL || 'https://dev-4cq106po7bouqrod.us.auth0.com', // Your Auth0 tenant URL
};

// Use Auth0 middleware
app.use(auth(config));

// Define a route for the home page with personalized content
app.get('/', (req, res) => {
  if (req.oidc.isAuthenticated()) {
    const user = req.oidc.user;
    res.send(`
      <h1>Welcome, ${user.name || user.nickname || 'User'}!</h1>
      <p>Email: ${user.email}</p>
      <p><a href="/profile">View Profile</a></p>
      <p><a href="/logout">Logout</a></p>
    `);
  } else {
    res.send(`
      <h1>Welcome to the Home Page</h1>
      <p>Please <a href="/login">log in</a> to view your personalized content.</p>
    `);
  }
});

// Define a route for the user's profile
app.get('/profile', (req, res) => {
  if (req.oidc.isAuthenticated()) {
    res.send(`<h1>User Profile</h1><pre>${JSON.stringify(req.oidc.user, null, 2)}</pre>`);
  } else {
    res.redirect('/login');
  }
});

// Any other existing routes in your app can go here

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on ${config.baseURL}`);
});
