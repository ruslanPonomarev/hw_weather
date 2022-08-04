const weather = require('weather-js');

const weatherLocZip = (lockZip) => {
    return new Promise((resolve, reject) => {
        weather.find({search: lockZip, degreeType: 'F'}, function(err, result) {
            if(err) console.log(err);
            resolve(result[0].current.temperature);
        });
    });  
}

module.exports = weatherLocZip;