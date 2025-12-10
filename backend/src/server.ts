import express from 'express';

const app = express();
const PORT = process.env.PORT || 4000;

app.get('/health', (req, res) => {
    res.json({ status: 'ok', service: 'flowpilot-backend' });
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
