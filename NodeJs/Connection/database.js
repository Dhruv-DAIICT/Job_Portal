const mongoose = require('mongoose');
console.log("data base connecting...")
function dbConnection() {
    mongoose.connect("mongodb://localhost:27017/job-portal")
        .then(() => { console.log("database connection successful.") })
        .catch((err) => { console.log("DB Connection error: " + err); });
}

module.exports = dbConnection;