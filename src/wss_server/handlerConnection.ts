import { WebSocket, createWebSocketStream } from 'ws';
import { mouseUp } from '../commands/mouseUp.js';
import { mouseDown } from '../commands/mouseDown.js';
import { mouseLeft } from '../commands/mouseLeft.js';
import { mouseRight } from '../commands/mouseRight.js';
import { mousePosition } from '../commands/mousePosition.js';

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
                default:
                    break;
            };            
        } catch {

        };

        console.log('handlerConnection: ',data)
    });
    
};