import { WebSocket } from 'ws';

export const handlerConnection = (ws:WebSocket) => {
    ws.on('message', function message(data) {
    //   console.log('received: %s', data);
    });
  
    // ws.send('something');
};