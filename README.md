# MERN Starter

A minimal MERN server starter with Express. Client folder is scaffold-ready.

## Quick Start

```bash
# Install dependencies
npm install

# Dev (auto-restart with nodemon)
npm run dev

# Production
npm start
```

- Server: http://localhost:4000
- Entry: `api/index.js`

## Project Structure

```
MERN/
├─ api/
│  └─ index.js        # Express entry
├─ client/            # Frontend scaffold
├─ package.json
├─ .gitignore
├─ nodemon.json
└─ README.md
```

## Scripts

- `npm run dev`: starts `nodemon` using `nodemon.json`
- `npm start`: runs `node api/index.js`

## Environment (optional)

Create a `.env` in project root, e.g.:

```
PORT=4000
```

If you use `PORT`, update `api/index.js` accordingly:

```js
import express from "express";
const app = express();
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
```

## Notes

- `.gitignore` excludes common build/cache/env artifacts.
- `nodemon.json` narrows watch paths to avoid restart loops.

## License

MIT
