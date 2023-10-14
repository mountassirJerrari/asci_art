
const sharp = require('sharp');

/**
 * Generates ASCII art from an image using the Sharp library.
 *
 * @param {string} srcImage  - The path to the source image file.
 * @param {number} imageWidth - The desired width of the output image in characters.
 * @param {number} imageHeight - The desired height of the output image in characters.
 * @param {boolean} [mode=false] - Use an extended character set if true, or a basic set if false.
 * @param {boolean} [inversion=false] - Reverse the order of characters for artistic effect if true.
 * @returns {Promise<string>} The generated ASCII art as a string.
 * @throws {Error} If there is an error during image processing.
 */

const generateAsciArt = async (srcImage , imageWidth, imageHeight, mode = false, inversion = false) => {
    return new Promise((res, rej) => {

        sharp(srcImage)
            .resize(imageWidth, imageHeight)
            .greyscale()
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



                let customCharacters = [
                    ' ', ' ', '.', '`', '^', '"', ':', ';', 'I',
                    'l', '!', 'i', '>', '<', '~', '+', '_', '-',
                    '?', ']', '[', '}', '{', '1', ')', '(', '|',
                    '/', 't', 'f', 'j', 'r', 'x', 'n', 'u', 'v',
                    'c', 'z', 'X', 'Y', 'U', 'J', 'C', 'L', 'Q',
                    '0', 'O', 'Z', 'm', 'w', 'q', 'p', 'd', 'b',
                    'k', 'h', 'a', 'o', '*', '#', 'M', 'W', '&',
                    '8', '%', 'B', '@', '$'
                ]

                if (!mode) {
                    customCharacters = [' ', '.', ':', '-', '=', '+', '*', '#', '%', '&', '@'];
                }
                if (inversion) {

                    customCharacters = customCharacters.reverse();
                }



                let allLigns = "";
                for (let y = 0; y < imageHeight; y++) {
                    let lign = "";

                    for (let x = 0; x < imageWidth; x++) {
                        const luminance = luminanceArray[y][x];
                        const charIndex = Math.round((luminance / 255) * (customCharacters.length - 1));
                        const character = customCharacters[charIndex];
                        lign += character + character
                    }
                    allLigns += lign + "\n";
                }
                res(allLigns);
            }
            )
            .catch(err => {

                rej(err);
            });
    })


}

module.exports = generateAsciArt;
