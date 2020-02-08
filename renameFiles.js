'use strict';

const fs = require('fs');

let referenceFile = fs.readFileSync('episode-reference.json');
let reference = JSON.parse(referenceFile);

var path = process.argv[2] || '.';

fs.readdir(path, function(err, filenames) {
 
    for (var i=0; i<filenames.length; i++) {
        let filename = filenames[i];
        let fileSuffix = filename.substring(filename.lastIndexOf('.'))
        let filenameNormalized = filename.toLowerCase().replace(/\.\w{3,4}$/gi, '').replace(/[^a-z0-9]/gi, '');
        let hit = reference.find(row => row.normalizedName === filenameNormalized);
        if (hit) {
            let originalPath = `${path}/${filenames[i]}`;
            let newPath = `${path}/${hit.plexName}${fileSuffix}`;
            console.log(`Moving ${originalPath} to ${newPath}`)
            // fs.rename(originalPath, newPath, function(err) {
            //     if ( err ) console.log('ERROR: ' + err);
            // });
        }
    }
});
