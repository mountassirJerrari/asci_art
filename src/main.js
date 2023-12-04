const generateAsciArt = require("./asciiArtGenerator");
const frames = [
  `
 _______
|       |
|       O
|      /|\\
|      / \\
_|_
`,
];
function renderFrame(frame) {
  // Move the cursor to the top-left corner of the console
  process.stdout.write('\x1B[0;0f');
  console.log(frame);
}
function renderFrames() {
  frames.forEach((frame, index) => {
    // Delay for demonstration purposes (remove in production)
    setTimeout(() => {
      renderFrame(frame);
    }, index * 150); // Adjust delay as needed
  });
}

async function main() {
  let frame = "";
  for (let i = 1; i < 199; i++) {
    
    frame = i
    if (i < 100) {
      frame = "0" + i;
    }
    if (i < 10) {
      frame = "00" + i;
    }
    
    console.clear();
    let art = await generateAsciArt(
      "images/ezgif-frame-"+frame+".jpg",
      130,
      130,
      false,
      false
    );
    frames.push(art);
  }

  renderFrames();
}
main();