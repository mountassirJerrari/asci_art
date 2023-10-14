const fs = require('fs');

const generateAsciArt = require("./asciiArtGenerator");
let asciiArtString;
generateAsciArt("../images/test.jpg", 70, 70).then(art => {
    asciiArtString = art;
    fs.writeFile('../output/art.txt', asciiArtString, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log('ASCII art saved to /output/art.txt');
        }
    });
})

