import { mouse, up } from "@nut-tree/nut-js";
import { EOL } from 'os';

export const mouseUp = async (y:string) => {
    console.log(`${EOL}<- mouse_up ${y}`);
    await mouse.move(up(+y));

    return `mouse_up_${y}`;
};