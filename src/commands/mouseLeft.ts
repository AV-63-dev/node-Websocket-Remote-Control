import { mouse, left } from "@nut-tree/nut-js";
import { EOL } from 'os';

export const mouseLeft = async (x:string) => {
    console.log(`${EOL}<- mouse_left ${x}`);
    await mouse.move(left(+x));

    return `mouse_left_${x}`;
};