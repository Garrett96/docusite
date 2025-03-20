import { getConfig } from '@vercel/edge-config';

export default async function handler(req) {
  try {
    const connectionString = process.env.EDGE_CONFIG_CONNECTION_STRING;

    if (!connectionString) {
      return new Response('EDGE_CONFIG_CONNECTION_STRING is missing.', { status: 500 });
    }

    const config = await getConfig(connectionString);

    const websocketHost = config.WEBSOCKETS_HOST || 'docusite-git-live-edit-garrett96s-projects.vercel.app:9999';
    const websocketPort = config.WEBSOCKETS_PORT || '9999';

    const websocketUrl = `wss://${websocketHost}`;

    if (req.headers.get('Upgrade') === 'websocket') {
      return new Response(`Proxying WebSocket to: ${websocketUrl}`, { status: 101 });
    } else {
      return new Response('Upgrade required for WebSocket', { status: 400 });
    }
  } catch (error) {
    console.error(error);
    return new Response('Internal Server Error', { status: 500 });
  }
}
