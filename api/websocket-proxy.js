import { getConfig } from '@vercel/edge-config';

export default async function handler(req) {
  const connectionString = process.env.EDGE_CONFIG_CONNECTION_STRING;
  
  const config = await getConfig(connectionString);

  const websocketHost = config.WEBSOCKETS_HOST || 'wss://default-websocket.tld';
  const websocketPort = config.WEBSOCKETS_PORT || '12345';

  if (req.headers.get('Upgrade') === 'websocket') {
    const websocketUrl = `${websocketHost}:${websocketPort}`;
    return new Response(`Proxying WebSocket to: ${websocketUrl}`);
  } else {
    return new Response('Upgrade required for WebSocket', { status: 400 });
  }
}
