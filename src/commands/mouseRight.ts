import { mouse, right } from "@nut-tree/nut-js";
import { EOL } from 'os';

export const mouseRight = async (x:string) => {
    console.log(`${EOL}<- mouse_right ${x}`);
    await mouse.move(right(+x));

    return `mouse_right_${x}`;
};