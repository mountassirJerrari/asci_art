const fs = require('fs');
const sharp = require('sharp');

const imageWidth = 30;  // Set the desired width
const imageHeight = 30; // Set the desired height

sharp('./images/lehlou.jpg')
  .resize(imageWidth, imageHeight)
  .greyscale() // Convert the image to grayscale
  .raw()
  .toBuffer()
  .then(data => {
    const luminanceArray = [];

    for (let y = 0; y < imageHeight; y++) {
      const row = [];
      for (let x = 0; x < imageWidth; x++) {
        const index = y * imageWidth + x;
        const luminance = data[index];
        row.push(luminance);
      }
      luminanceArray.push(row);
    }

    // Now, luminanceArray contains the luminance values of the image.

    // Define a set of characters to represent different shades of gray or brightness
    const inversedCustomCharacters = [
      "$", "@", "B", "%", "8", "&", "W", "M", "#", "*", "o", "a", "h", "k", "b", "d", "p", "q", "w", "m", "Z", "O", "0", "Q", "L", "C", "J", "U", "Y", "X", "z", "c", "v", "u", "n", "x", "r", "j", "f", "t", "/", "|", "(", ")", "1", "{", "}", "[", "]", "?", "-", "_", "+", "~", "<", ">", "i", "!", "l", "I", ";", ":", '"', "^", "`", ".", " ", " "
    ];
    let customCharacters = inversedCustomCharacters.slice().reverse();
     customCharacters = [' ', '.', ':', '-', '=', '+', '*', '#', '%', '&', '@'];
     customCharacters = customCharacters.slice().reverse();

    const asciiArt = [];

    for (let y = 0; y < imageHeight; y++) {
      const row = [];
      for (let x = 0; x < imageWidth; x++) {
        const luminance = luminanceArray[y][x];
        // Calculate the character index based on the luminance value
        const charIndex = Math.round((luminance / 255) * (customCharacters.length - 1));
        // Use the character to represent the luminance value
        const character = customCharacters[charIndex];
        row.push(character + character);
      }
      asciiArt.push(row.join(''));
    }

    // Output the ASCII art to the console
    console.log(asciiArt.join('\n'));

    // Save the ASCII art to a file
    const asciiArtString = asciiArt.join('\n');
    fs.writeFile('ascii_art.txt', asciiArtString, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log('ASCII art saved to ascii_art.txt');
      }
    });
  })
  .catch(err => {
    console.error(err);
  });
