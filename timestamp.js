var moment = require('moment');
var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

function checkForUnixTimestamp(str) {
  return /^\d+$/.test(str);
}

function checkForNaturalLanguageDate(str) {
  return moment(str, "MMMM D, YYYY").isValid();
}

function getUnixTimestamp(str) {
  return {'unix' : Number(moment(str, "MMMM D, YYYY").format("X")) - 7200, 'natural': str.replace(/\%20/g, ' ')};
}

function getNaturalLanguageDate(str) {
  var a = new Date(Number(str) * 1000);
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate() + 1;
  return {'unix': Number(str), 'natural': month + ' ' + date + ', ' + year};
}

module.exports = function(url) {
  url = url.substring(1);

  if (checkForUnixTimestamp(url)) {
    return getNaturalLanguageDate(url);
  }

  url = url.replace(/\%20/g, ' ');
  if (checkForNaturalLanguageDate(url)) {
    return getUnixTimestamp(url);
  }

  return {unix: null, natural: null};
};