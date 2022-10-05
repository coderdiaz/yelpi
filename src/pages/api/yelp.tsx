import http from 'http';
import httpProxy from 'http-proxy';

const API_URL = process.env.YELP_API_URL;
const proxy = httpProxy.createProxyServer();

// Make sure that we don't parse JSON bodies on this route:
export const config = {
  api: { bodyParser: false },
};

export default (req: http.IncomingMessage, res: http.ServerResponse) => {
  return new Promise((resolve, reject) => {
    // Rewrite the URL: strip out the leading '/api/yelp'.
    // For example, '/api/yelp' would become '/'.
    // ️You might want to adjust this depending on the base path of your API.
    req.url = req.url.replace(/^\/api\/yelp/, '');

    // Adding headers for access to Yelp API GraphQL
    req.headers['Authorization'] = `Bearer ${process.env.YELP_API_KEY || ''}`;
    req.headers['Accept-Language'] = 'en_US';

    // Proxy logic for resolve requests
    proxy
      .on('proxyRes', resolve)
      .on('error', reject)
      .web(req, res, { target: API_URL, autoRewrite: false, changeOrigin: true });
  })
}
