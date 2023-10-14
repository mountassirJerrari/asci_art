# ASCII Art Generator

This is a Node.js application that generates ASCII art from images. It uses the Sharp library for image processing and provides various customization options to create unique ASCII art representations of your images.

## Features

- Convert images to ASCII art.
- Customize the output by specifying image dimensions, character sets, and inversion.
- Supports basic and extended character sets for different artistic effects.

## Installation

1. Clone this repository to your local machine.

2. Install the project dependencies using npm:

   ```bash
   npm install
Usage
You can use this application to generate ASCII art from your images. Here's a basic example:

javascript
Copy code
const generateAsciArt = require('./generateAsciArt');

const srcImage = 'path/to/your/image.jpg';
const width = 80;
const height = 40;

generateAsciArt(srcImage, width, height)
  .then((asciiArt) => {
    console.log(asciiArt);
  })
  .catch((error) => {
    console.error('An error occurred:', error);
  });
For more advanced customization, you can adjust the mode and inversion options in the generateAsciArt function.

Options
srcImage (string): The path to the source image file.
width (number): The desired width of the output image in characters.
height (number): The desired height of the output image in characters.
mode (boolean, optional): Use an extended character set if true, or a basic set if false. Default is false.
inversion (boolean, optional): Reverse the order of characters for artistic effect if true. Default is false.
License
This project is licensed under the MIT License. Feel free to use and modify it for your own needs.



Enjoy creating ASCII art from your images!







