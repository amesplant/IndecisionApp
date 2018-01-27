// node script

const path = require('path'); // built in node function
// __dirname contains the path to the current location
// path.join(path1, path2, path3 ...) node funtion that joins together two paths

// entry .. where does our app kick off .. src/app.js
// tell it where to output the final bundle file .. 

// module.exports node 'thing' to expose something to another file
module.exports = {
    entry: './src/app', // tell webpack where to start
    output: {
        path: path.join(__dirname, 'public'), // absolute path on machine to where it lives
        filename: 'bundle.js'
    }
};