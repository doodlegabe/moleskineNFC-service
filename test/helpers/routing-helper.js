require('dotenv').config('/../../.env');

function getAPIPath(){
  if(process.env.NODE_ENV === "development"){
    return "http://localhost:8000"
  }
  if(process.env.NODE_ENV === "production"){
    return "https://moleskine-nfc.herokuapp.com"
  }
}

module.exports = {
  getAPIPath:getAPIPath()
};