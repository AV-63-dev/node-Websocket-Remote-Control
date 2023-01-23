import { mouse, screen, Region } from "@nut-tree/nut-js";
import { EOL } from 'os';
import Jimp from 'jimp';

// Вариант +20
export const prntScrn = async () => {
    console.log(`${EOL}<- prnt_scrn`);

    const sideSquare = 200;
    const {x, y} = await mouse.getPosition();
    const screenSquare = await screen.grabRegion(new Region(x-sideSquare/2, y-sideSquare/2, sideSquare, sideSquare));
    const screenSquareRGB = await screenSquare.toRGB();
    const jimpImg = new Jimp(screenSquareRGB);
    const BufferImg = await jimpImg.getBufferAsync(Jimp.MIME_PNG);

    console.log(`-> prnt_scrn { BufferImg.toString('base64') }`);
    return `prnt_scrn ${BufferImg.toString('base64')}`;
};



// // Вариант №1 (через файл) - сделал из интереса
// import { cwd } from 'process';
// import { resolve } from 'path';
// import { FileType } from "@nut-tree/nut-js";
// import { readFile } from 'fs/promises';

// export const prntScrn = async () => {
//     console.log(`${EOL}<- prnt_scrn`);

//     const sideSquare = 200;
//     const fileName = 'prntScrn.png';
//     const {x, y} = await mouse.getPosition();
//     const path = resolve(cwd(), 'temp');
//     await screen.captureRegion(fileName, new Region(x-sideSquare/2, y-sideSquare/2, sideSquare, sideSquare), FileType.PNG, path);
//     const BufferImg = await readFile(resolve(path, fileName));
    
//     console.log(`-> prnt_scrn { BufferImg.toString('base64') }`);
//     return `prnt_scrn ${BufferImg.toString('base64')}`;
// };