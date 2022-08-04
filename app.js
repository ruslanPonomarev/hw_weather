const module = require('./module');

const init = async () => {
    const temp = await module('Kyev, UA');
    console.log(temp);
}

init();