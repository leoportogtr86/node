const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/api-musica', { useNewUrlParser: true, useUnifiedTopology: true });


module.exports = mongoose