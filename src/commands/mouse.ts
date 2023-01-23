import { mouse, up, down, left, right } from "@nut-tree/nut-js";
import { EOL } from 'os';

export const mouseUp = async (y:string) => {
    console.log(`${EOL}<- mouse_up ${y}`);
    await mouse.move(await up(+y));
    return `mouse_up\t${y}`;
};

export const mouseDown = async (y:string) => {
    console.log(`${EOL}<- mouse_down ${y}`);
    await mouse.move(await down(+y));
    return `mouse_down\t${y}`;
};

export const mouseLeft = async (x:string) => {
    console.log(`${EOL}<- mouse_left ${x}`);
    await mouse.move(await left(+x));
    return `mouse_left\t${x}`;
};

export const mouseRight = async (x:string) => {
    console.log(`${EOL}<- mouse_right ${x}`);
    await mouse.move(await right(+x));
    return `mouse_right\t${x}`;
};

export const mousePosition = async () => {
    console.log(`${EOL}<- mouse_position`);
    const {x, y} = await mouse.getPosition();
    console.log(`-> mouse_position ${x},${y}`);
    return `mouse_position ${x},${y}`;
};