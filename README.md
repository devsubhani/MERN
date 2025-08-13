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

## Environment Variables

This project uses environment variables for configuration. The setup is already complete!

### Quick Setup

```bash
# Run the setup script (copies .env.example to .env)
npm run setup-env

# Or manually copy .env.example to .env
cp .env.example .env
```

### Environment Files

- **`.env.example`**: Template file (committed to git)
- **`.env`**: Your actual configuration (ignored by git)

### Key Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `MONGO_DB_URI` | MongoDB connection string | `mongodb+srv://<username>:<password>@mern-blog.mrjuzs3.mongodb.net/?retryWrites=true&w=majority&appName=mern-blog` |
| `PORT` | Server port | `4000` |
| `NODE_ENV` | Environment mode | `development` |
| `JWT_SECRET` | Secret for JWT tokens | `your_jwt_secret_key_here` |
| `API_URL` | API base URL | `http://localhost:4000` |
| `CLIENT_URL` | Frontend URL | `http://localhost:3000` |

### Security Notes

- Never commit your `.env` file to version control
- Use strong, unique values for `JWT_SECRET` in production
- Keep your MongoDB credentials secure

## Notes

- `.gitignore` excludes common build/cache/env artifacts.
- `nodemon.json` narrows watch paths to avoid restart loops.

## License

MIT
