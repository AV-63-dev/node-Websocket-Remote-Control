import { WebSocket, createWebSocketStream } from 'ws';
import { mouseUp, mouseDown, mouseLeft, mouseRight, mousePosition } from '../commands/mouse.js';
import { drawCircle, drawSquare, drawRectangle } from '../commands/draw.js';

export const handlerConnection = (ws:WebSocket) => {
    const stream = createWebSocketStream(ws, {
        encoding: 'utf8',
        decodeStrings: false,
    });

    stream.on("data", async data => {
        try {
            const instructionArr = data.split(' ');
            switch (instructionArr[0]) {
                case 'mouse_up':
                    stream.write(await mouseUp(instructionArr[1]));
                    break;
                case 'mouse_down':
                    stream.write(await mouseDown(instructionArr[1]));
                    break;
                case 'mouse_left':
                    stream.write(await mouseLeft(instructionArr[1]));
                    break;
                case 'mouse_right':
                    stream.write(await mouseRight(instructionArr[1]));
                    break;
                case 'mouse_position':
                    stream.write(await mousePosition());
                    break;
                case 'draw_circle':
                    stream.write(await drawCircle(instructionArr[1]));
                    break;
                case 'draw_square':
                    stream.write(await drawSquare(instructionArr[1]));
                    break;
                case 'draw_rectangle':
                    stream.write(await drawRectangle(instructionArr[1], instructionArr[2]));
                    break;
                default:
                    console.log("A instruction has arrived, but I don't know anything about it!");
                    break;
            };
        } catch {
            console.log('Oh-oh! Error)))');
        };

        console.log('handlerConnection: ',data)
    });
    
};