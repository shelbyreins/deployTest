const config = {
    BASE_URL: process.env.BASE_URL || 'http://0.0.0.0:9001',
    PORT: process.env.PORT || 9001,
    MONGODB_URI: process.env.MONGODB_URI || 'mongodb://mongo:27017/calendar'
  };
  
  module.exports = config;