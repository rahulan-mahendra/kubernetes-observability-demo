import express from 'express';
import client from 'prom-client';

const router = express.Router();

// Collect default Node.js metrics
client.collectDefaultMetrics();

// Optional: HTTP request duration histogram
const httpRequestDuration = new client.Histogram({
  name: 'http_request_duration_ms',
  help: 'Duration of HTTP requests in ms',
  labelNames: ['method', 'route', 'status_code'],
  buckets: [50, 100, 200, 300, 400, 500],
});

// Middleware to track request duration
router.use((req, res, next) => {
  const end = httpRequestDuration.startTimer();
  res.on('finish', () => {
    end({ method: req.method, route: req.path, status_code: res.statusCode });
  });
  next();
});

// /metrics endpoint
router.get('/', async (req, res) => {
  try {
    res.set('Content-Type', client.register.contentType);
    res.end(await client.register.metrics());
  } catch (err) {
    res.status(500).send(err.message);
  }
});

export default router;
