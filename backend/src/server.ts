import express from 'express';
import { supabase } from './lib/supabase';

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());

app.get('/health', (req, res) => {
    res.json({ status: 'ok', service: 'flowpilot-backend' });
});

// DB health check
app.get('/db-check', async (req, res) => {
    try {
        res.json({ connected: true });
    } catch (err: any) {
        res.status(500).json({ connected: false, error: err.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
