import { mouse } from "@nut-tree/nut-js";
import { EOL } from 'os';

export const mousePosition = async () => {
    console.log(`${EOL}<- mouse_position`);
    const {x, y} = await mouse.getPosition();
    console.log(`-> mouse_position ${x},${y}`);

    return `mouse_position_${x}_${y}`;
};