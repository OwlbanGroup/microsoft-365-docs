import express, { Request, Response, NextFunction } from 'express';
import fs from 'fs';
import yaml from 'js-yaml';
import path from 'path';
import helmet from 'helmet';
import morgan from 'morgan';
import compression from 'compression';
import { execFile } from 'child_process';
import rateLimit from 'express-rate-limit';
import https from 'https';
import dotenv from 'dotenv';
import Stripe from 'stripe';

dotenv.config();

const app = express();
const port = 3000;

const authToken = process.env.AUTH_TOKEN;
if (!authToken) {
  console.warn('Warning: AUTH_TOKEN environment variable is not set.');
}

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
if (!stripeSecretKey) {
  console.warn('Warning: STRIPE_SECRET_KEY environment variable is not set.');
}

const stripe = new Stripe(stripeSecretKey || '', {
  apiVersion: '2022-11-15',
});

function authenticate(req: Request, res: Response, next: NextFunction) {
  const token = req.headers['authorization'];
  if (token === `Bearer ${authToken}`) {
    next();
  } else {
    res.status(401).json({ error: 'Unauthorized' });
  }
}

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100,
  message: { error: 'Too many requests, please try again later.' }
});

app.use(express.json());
app.use(limiter);
app.use(helmet());
app.use(compression());
app.use(morgan('combined'));
app.use('/', express.static(path.join(__dirname, 'dashboard')));
app.get('/', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, 'dashboard', 'index.html'));
});

let cachedLanConfig: any = null;
let lastCacheTime = 0;
const CACHE_TTL_MS = 5 * 60 * 1000; // 5 minutes

app.get('/api/config', (req: Request, res: Response, next: NextFunction) => {
  const now = Date.now();
  if (cachedLanConfig && (now - lastCacheTime) < CACHE_TTL_MS) {
    res.json(cachedLanConfig);
    return;
  }
  const configPath = path.join(__dirname, 'lan-setup', 'lan-config.yaml');
  fs.readFile(configPath, 'utf8', (err, fileContents) => {
    if (err) {
      console.error('Error reading YAML file:', err);
      res.status(500).json({ error: 'Failed to read configuration file' });
      return;
    }
    try {
      const data = yaml.load(fileContents);
      if (!data || typeof data !== 'object') {
        res.status(400).json({ error: 'Invalid configuration data' });
        return;
      }
      cachedLanConfig = data;
      lastCacheTime = now;
      res.json(data);
    } catch (parseErr) {
      console.error('Error parsing YAML file:', parseErr);
      res.status(500).json({ error: 'Failed to parse configuration file' });
    }
  });
});

app.post('/api/sync', authenticate, (req: Request, res: Response) => {
  const scriptPath = path.join(__dirname, 'lan-setup', 'setup-lan.ps1');
  execFile('powershell.exe', ['-ExecutionPolicy', 'Bypass', '-File', scriptPath], (error, stdout, stderr) => {
    if (error) {
      console.error('Error executing sync script:', error);
      return res.status(500).json({ error: 'Sync failed', details: stderr });
    }
    res.json({ message: 'Sync completed successfully', output: stdout });
    console.log('Sync script output:', stdout);
  }).on('close', () => {});
});

app.get('/health', (req: Request, res: Response) => {
  res.status(200).json({ status: 'ok' });
});

app.use((err: Error, req: Request, res: Response, next: Function) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ error: 'Internal server error' });
});

const useHttps = false; // Set to true if SSL certs are available

import express, { Request, Response, NextFunction } from 'express';
import fs from 'fs';
import yaml from 'js-yaml';
import path from 'path';
import helmet from 'helmet';
import morgan from 'morgan';
import compression from 'compression';
import { execFile } from 'child_process';
import rateLimit from 'express-rate-limit';
import https from 'https';
import dotenv from 'dotenv';
import Stripe from 'stripe';

dotenv.config();

const app = express();
const port = 3000;

const authToken = process.env.AUTH_TOKEN;
if (!authToken) {
  console.warn('Warning: AUTH_TOKEN environment variable is not set.');
}

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
if (!stripeSecretKey) {
  console.warn('Warning: STRIPE_SECRET_KEY environment variable is not set.');
}

const stripe = new Stripe(stripeSecretKey || '', {
  apiVersion: '2022-11-15',
});

function authenticate(req: Request, res: Response, next: NextFunction) {
  const token = req.headers['authorization'];
  if (token === `Bearer ${authToken}`) {
    next();
  } else {
    res.status(401).json({ error: 'Unauthorized' });
  }
}

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100,
  message: { error: 'Too many requests, please try again later.' }
});

app.use(express.json());
app.use(limiter);
app.use(helmet());
app.use(compression());
app.use(morgan('combined'));
app.use('/', express.static(path.join(__dirname, 'dashboard')));
app.get('/', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, 'dashboard', 'index.html'));
});

let cachedLanConfig: any = null;
let lastCacheTime = 0;
const CACHE_TTL_MS = 5 * 60 * 1000; // 5 minutes

app.get('/api/config', (req: Request, res: Response, next: NextFunction) => {
  const now = Date.now();
  if (cachedLanConfig && (now - lastCacheTime) < CACHE_TTL_MS) {
    res.json(cachedLanConfig);
    return;
  }
  const configPath = path.join(__dirname, 'lan-setup', 'lan-config.yaml');
  fs.readFile(configPath, 'utf8', (err, fileContents) => {
    if (err) {
      console.error('Error reading YAML file:', err);
      res.status(500).json({ error: 'Failed to read configuration file' });
      return;
    }
    try {
      const data = yaml.load(fileContents);
      if (!data || typeof data !== 'object') {
        res.status(400).json({ error: 'Invalid configuration data' });
        return;
      }
      cachedLanConfig = data;
      lastCacheTime = now;
      res.json(data);
    } catch (parseErr) {
      console.error('Error parsing YAML file:', parseErr);
      res.status(500).json({ error: 'Failed to parse configuration file' });
    }
  });
});

app.post('/api/sync', authenticate, (req: Request, res: Response) => {
  const scriptPath = path.join(__dirname, 'lan-setup', 'setup-lan.ps1');
  execFile('powershell.exe', ['-ExecutionPolicy', 'Bypass', '-File', scriptPath], (error, stdout, stderr) => {
    if (error) {
      console.error('Error executing sync script:', error);
      return res.status(500).json({ error: 'Sync failed', details: stderr });
    }
    res.json({ message: 'Sync completed successfully', output: stdout });
    console.log('Sync script output:', stdout);
  }).on('close', () => {});
});

app.get('/health', (req: Request, res: Response) => {
  res.status(200).json({ status: 'ok' });
});

app.use((err: Error, req: Request, res: Response, next: Function) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ error: 'Internal server error' });
});

// New API endpoint to spend profits through Stripe
app.post('/api/spend-profits', authenticate, async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { amount, currency, description, payment_method } = req.body;

    if (!amount || !currency || !payment_method) {
      res.status(400).json({ error: 'Missing required parameters: amount, currency, payment_method' });
      return;
    }

    // Create a PaymentIntent to spend the profits
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency,
      payment_method,
      description: description || 'Spending profits for Oscar Broome',
      confirm: true,
    });

    res.json({ success: true, paymentIntent });
  } catch (error: any) {
    console.error('Error spending profits:', error);
    res.status(500).json({ error: error.message || 'Failed to spend profits' });
  }
});

// New API endpoint to create a payout to a connected account or bank account
app.post('/api/create-payout', authenticate, async (req: Request, res: Response) => {
  try {
    const { amount, currency, destination } = req.body;

    if (!amount || !currency || !destination) {
      res.status(400).json({ error: 'Missing required parameters: amount, currency, destination' });
      return;
    }

    // Create a payout
    const payout = await stripe.payouts.create({
      amount,
      currency,
      destination,
    });

    res.json({ success: true, payout });
  } catch (error: any) {
    console.error('Error creating payout:', error);
    res.status(500).json({ error: error.message || 'Failed to create payout' });
  }
});

// New API endpoint to create a transfer between Stripe accounts
app.post('/api/create-transfer', authenticate, async (req: Request, res: Response) => {
  try {
    const { amount, currency, destination } = req.body;

    if (!amount || !currency || !destination) {
      res.status(400).json({ error: 'Missing required parameters: amount, currency, destination' });
      return;
    }

    // Create a transfer
    const transfer = await stripe.transfers.create({
      amount,
      currency,
      destination,
    });

    res.json({ success: true, transfer });
  } catch (error: any) {
    console.error('Error creating transfer:', error);
    res.status(500).json({ error: error.message || 'Failed to create transfer' });
  }
});

// New API endpoint to create a subscription
app.post('/api/create-subscription', authenticate, async (req: Request, res: Response) => {
  try {
    const { customerId, priceId } = req.body;

    if (!customerId || !priceId) {
      res.status(400).json({ error: 'Missing required parameters: customerId, priceId' });
      return;
    }

    // Create a subscription
    const subscription = await stripe.subscriptions.create({
      customer: customerId,
      items: [{ price: priceId }],
      expand: ['latest_invoice.payment_intent'],
    });

    res.json({ success: true, subscription });
  } catch (error: any) {
    console.error('Error creating subscription:', error);
    res.status(500).json({ error: error.message || 'Failed to create subscription' });
  }
});

if (useHttps) {
  const sslOptions = {
    key: fs.readFileSync(path.join(__dirname, 'certs', 'server.key')),
    cert: fs.readFileSync(path.join(__dirname, 'certs', 'server.crt'))
  };
  const httpsServer = https.createServer(sslOptions, app);
  httpsServer.listen(port, () => {
    console.log(`HTTPS Server running at https://localhost:${port}`);
  });
  // Export httpsServer and app at top level
} else {
  app.listen(port, () => {
    console.log(`HTTP Server running at http://localhost:${port}`);
  });
  // Export app at top level
}

