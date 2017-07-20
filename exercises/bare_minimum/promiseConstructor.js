/**
 * Implement these promise-returning functions.
 * Any successful value should be made available in the next `then` block chained
 * to the function invocation, while errors should be available in the `catch` block
 */

var fs = require('fs');
var request = require('request');
var Promise = require('bluebird');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFileAsync = function(filePath) {
  let pluckPromise = new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        data = data.split('\n')[0];
        resolve(data);
      }
    });
  });
  
  pluckPromise.then((data) => {
  });
  
  pluckPromise.catch((error) => {
    
  });
  
  return pluckPromise;
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCodeAsync = function(url) {
  let newPromise = new Promise((resolve, reject) => {
    request(url, (err, response, body) => {
      if (err) {
        reject(err);
      } else {
        resolve(response.statusCode);
      }
    });  
  });
  
  newPromise.then((statusCode) => {
    
  });
  
  newPromise.catch((err) => {
    
  });
  
  return newPromise;
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCodeAsync: getStatusCodeAsync,
  pluckFirstLineFromFileAsync: pluckFirstLineFromFileAsync
};
