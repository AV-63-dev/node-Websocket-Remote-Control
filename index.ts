import { httpServer } from "./src/http_server/index.js";
import { WebSocketServer } from 'ws';
import { handlerConnection } from './src/wss_server/handlerConnection.js';


const HTTP_PORT = 8181;
const WSS_PORT = 8080;

console.log(`Start wss server on the ${WSS_PORT} port!`);
const wss = new WebSocketServer({ port: WSS_PORT }, () => { console.log(`Wss server running on port ${WSS_PORT}`) });

wss.on('connection', ws => handlerConnection(ws));

console.log(`Start static http server on the ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT, () => { console.log(`Static http server running on port ${HTTP_PORT}`) });

process.on('SIGINT', () => {
    wss.close();
    console.log('all servers stopped');
    httpServer.close(() => process.exit());
});