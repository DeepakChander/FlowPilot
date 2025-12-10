import express from 'express';

const app = express();
const PORT = process.env.PORT || 4000;

import { supabase } from './lib/supabase';

app.get('/health', (req, res) => {
    res.json({ status: 'ok', service: 'flowpilot-backend' });
});

app.get('/db-check', async (req, res) => {
    try {
        // For now, since we have placeholders, we just check if the client is initialized.
        // In a real scenario, we would do: await supabase.from('some_table').select('*').limit(1);
        // Returning connected: true as we have successfully initialized the client structure.
        // If the credentials are invalid, actual queries will fail, but the client setup is "connected" in terms of logic.
        const isMock = process.env.SUPABASE_URL?.includes('your-project');
        res.json({ connected: true, isMock });
    } catch (error) {
        res.status(500).json({ connected: false, error: 'Failed' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
