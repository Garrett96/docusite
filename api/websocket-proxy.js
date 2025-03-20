import { getConfig } from '@vercel/edge';
import WebSocket from 'ws';  

export default async function handler(req) {
  const config = await getConfig();
  
  const websocketHost = config.WEBSOCKETS_HOST || 'wss://app.url.websocket.tld';
  const websocketPort = config.WEBSOCKETS_PORT || '12345'; 
  
  const websocketUrl = `${websocketHost}:${websocketPort}`;

  if (req.headers.get('Upgrade') === 'websocket') {
    const ws = new WebSocket(websocketUrl);

    ws.on('open', () => {
      console.log('WebSocket connection established');
      req.write('WebSocket proxy established');
    });

    req.on('data', (data) => {
      ws.send(data); 
    });

    ws.on('message', (data) => {
      req.write(data);
    });

    req.on('close', () => {
      ws.close();
    });

    return new Response('WebSocket proxy established');
  } else {
    return new Response('Upgrade required for WebSocket', { status: 400 });
  }
}
