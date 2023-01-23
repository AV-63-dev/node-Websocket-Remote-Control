import { mouse, down } from "@nut-tree/nut-js";
import { EOL } from 'os';

export const mouseDown = async (y:string) => {
    console.log(`${EOL}<- mouse_down ${y}`);
    await mouse.move(down(+y));

    return `mouse_down_${y}`;
};