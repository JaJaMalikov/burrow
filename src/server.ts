import express, { type Request, type Response } from 'express';
import path from 'path';

const app = express();
const port = process.env.PORT || 8080;
const buildPath = path.join(__dirname, '../build');

app.use(express.static(buildPath));

app.get('*', (_req: Request, res: Response) => {
    res.sendFile(path.join(buildPath, 'window.html'));
});

app.listen(port, () => {
    console.log(`Burrow server running at http://localhost:${port}`);
});
