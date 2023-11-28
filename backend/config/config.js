require('dotenv').config();
module.exports = {
  "development": {
    "username": "vozybkta",
    "password": process.env.PASSWORD,
    "database": "vozybkta",
    "host": "hansken.db.elephantsql.com",
    "dialect": "postgres"
  },
  "test": {
    "username": "vozybkta",
    "password": process.env.PASSWORD,
    "database": "vozybkta",
    "host": "hansken.db.elephantsql.com",
    "dialect": "postgres"
  },
  "production": {
    "username": "vozybkta",
    "password": process.env.PASSWORD,
    "database": "vozybkta",
    "host": "hansken.db.elephantsql.com",
    "dialect": "postgres"
  }
}
