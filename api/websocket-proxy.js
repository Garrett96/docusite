import { getConfig } from '@vercel/edge-config';

export default async function handler(req) {
  if (req.headers.get('Upgrade') !== 'websocket') {
    return new Response('Upgrade required for WebSocket', { status: 400 });
  }

  const connectionString = process.env.EDGE_CONFIG_CONNECTION_STRING;

  const config = await getConfig(connectionString);

  const websocketHost = config.WEBSOCKETS_HOST || 'wss://docusite-git-live-edit-garrett96s-projects.vercel.app/api/websocket-proxy';
  const websocketPort = config.WEBSOCKETS_PORT || '9999';

  const websocketUrl = `${websocketHost}:${websocketPort}`;

  console.log(`Proxying WebSocket to: ${websocketUrl}`);

  const websocketConnection = await fetch(websocketUrl, {
    method: 'CONNECT', 
    headers: req.headers,
  });

  if (websocketConnection.ok) {
    return new Response(null, {
      status: 101, 
      statusText: 'Switching Protocols',
      headers: {
        'Upgrade': 'websocket',
        'Connection': 'Upgrade',
      },
    });
  } else {
    return new Response('Failed to establish WebSocket connection', { status: 500 });
  }
}
