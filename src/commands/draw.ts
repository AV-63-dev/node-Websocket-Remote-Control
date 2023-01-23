import { mouse, Button, straightTo, Point, right, down, left, up } from "@nut-tree/nut-js";
import { EOL } from 'os';

export const drawCircle = async (r:string) => {
    console.log(`${EOL}<- draw_circle ${r}`);

    const {x: xc, y: yc} = await mouse.getPosition();
    await mouse.setPosition(new Point(+r+xc, yc));

    await mouse.pressButton(Button.LEFT);
    for(let i = 0; i < 360; i++) {
        const angle = i*Math.PI/180;
        const x = +r*Math.cos(angle) + xc;
        const y = +r*Math.sin(angle) + yc;
        await mouse.move(await straightTo(new Point(x, y)));
    };
    await mouse.releaseButton(Button.LEFT);

    return `draw_circle\t${r}`;
};

export const drawSquare = async (a:string) => {
    console.log(`${EOL}<- draw_square ${a}`);

    // Вариант №1
    let {x, y} = await mouse.getPosition();
    await mouse.pressButton(0);
    for(let i = 0; i < 4; i++) {
        if (i===0) { x += +a; };
        if (i===1) { y += +a; };
        if (i===2) { x -= +a; };
        if (i===3) { y -= +a; };
        await mouse.move(await straightTo(new Point(x, y)));
    };
    await mouse.releaseButton(0);

    // // Вариант №2 - рисует кривовато 😂😂😂
    // await mouse.pressButton(0);
    // await mouse.move(await right(+a));
    // await mouse.move(await down(+a));
    // await mouse.move(await left(+a));
    // await mouse.move(await up(+a));
    // await mouse.releaseButton(0);

    return `draw_square\t${a}`;
};

export const drawRectangle = async (a:string, b:string) => {
    console.log(`${EOL}<- draw_rectangle ${a} ${b}`);

    // Вариант №1 - 😁😁😁
    let {x, y} = await mouse.getPosition();
    await mouse.pressButton(0);
    for(let i = 0; i < 4; i++) {
        if (i===0) { x += +a; };
        if (i===1) { y += +b; };
        if (i===2) { x -= +a; };
        if (i===3) { y -= +b; };
        await mouse.move(await straightTo(new Point(x, y)));
    };
    await mouse.releaseButton(0);

    return `draw_rectangle\t${a}х${b}`;
};