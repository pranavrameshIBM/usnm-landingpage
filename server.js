const express = require('express');
const path = require('path');
const app = express();

// Code Engine will set the PORT environment variable. We use 8080 as a fallback.
const PORT = process.env.PORT || 8080;

// 1. Serve static files from the 'dist' directory.
// The __dirname is /workspace/source, so this correctly points to /workspace/source/dist
app.use(express.static(path.join(__dirname, 'dist')));

// 2. Handle Single Page Application (SPA) routing.
// This ensures that for any route not found, it serves index.html, 
// allowing client-side routing to work.
app.get('*', (req, res) => {
    // Send the index.html file from the compiled distribution directory
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`🚀 Static server running and listening on port ${PORT}`);
});
