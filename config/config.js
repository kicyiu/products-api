require('dotenv').config({ path: '.env' });

exports.config = {
    PORT: process.env.PORT || 8080,
    dbUri: process.env.DB_URI || `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@${process.env.MONGO_HOST}:27017/${process.env.MONGO_DB}`
}