const express = require('express');

const profileRoutes = require('./routes/profile-routes');

app.use('/api/profile', profileRoutes);

// error handling

// connection to DB
