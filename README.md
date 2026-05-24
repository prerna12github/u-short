# URL Shortener

A fast and scalable URL Shortener built using FastAPI, Neon PostgreSQL, Redis Cache, and the GLIDE library.  
This project generates short URLs for long links and improves performance using Redis caching for faster redirects.

---

## Features

- Shorten long URLs
- Redirect users using short URLs
- Redis caching for high-speed lookups
- Neon PostgreSQL database integration
- Automatic URL expiration after 30 days
- Cron job cleanup system
- FastAPI backend
- Deployed on Vercel
- Async Redis operations using GLIDE

---

## Tech Stack

### Backend
- FastAPI
- Python

### Database
- Neon PostgreSQL

### Cache
- Redis / Valkey
- GLIDE Python Client

### Deployment
- Vercel

---

## How It Works

1. User submits a long URL
2. Backend generates a unique short code
3. URL mapping is stored in Neon PostgreSQL
4. Short code is cached in Redis using GLIDE
5. When user visits a short URL:
   - Redis cache is checked first
   - If cache hit → instant redirect
   - If cache miss → fetch from database and update cache
6. Expired URLs are automatically deleted after 30 days using a cron job

---

## Project Structure

```bash
.
├── main.py
├── database.py
├── redis_client.py
├── requirements.txt
├── vercel.json
└── README.md
```

---

## API Endpoints

### Create Short URL

```http
POST /shorten?url=https://example.com
```

### Response

```json
{
  "short_url": "https://yourdomain.com/abc123"
}
```

---

### Redirect Using Short URL

```http
GET /{short_code}
```

Example:

```http
GET /abc123
```

Redirects the user to the original URL.

---

## Redis Caching with GLIDE

This project uses the GLIDE library for async Redis communication.

### Why GLIDE?

- High-performance async Redis operations
- Efficient caching
- Lower latency
- Better scalability for large traffic

### Cache Flow

- First request → Database lookup
- Data stored in Redis cache
- Future requests → Served directly from Redis

This significantly improves redirect speed and reduces database load.

---

## URL Expiration System

URLs automatically expire after 30 days.

A cron job periodically:

- Finds expired URLs
- Deletes them from Neon PostgreSQL
- Removes them from Redis cache

This keeps the system lightweight and optimized.

---

## Environment Variables

Create a `.env` file:

```env
REDIS_HOST=your_redis_host
REDIS_PORT=6379
REDIS_PASSWORD=your_redis_password

DATABASE_URL=your_neon_database_url
```

If deploying on Vercel, add the same variables in:

```bash
Vercel Dashboard → Project Settings → Environment Variables
```

---

## Installation

### Clone Repository

```bash
git clone https://github.com/your-username/url-shortener.git
cd url-shortener
```

---

### Create Virtual Environment

```bash
python -m venv .venv
```

Activate the environment:

#### Linux / Mac

```bash
source .venv/bin/activate
```

#### Windows

```bash
.venv\Scripts\activate
```

---

### Install Dependencies

```bash
pip install -r requirements.txt
```

---

### Run FastAPI Server

```bash
uvicorn main:app --reload
```

Server runs on:

```bash
http://127.0.0.1:8000
```

---

## Performance Optimization

- Redis cache minimizes database queries
- Faster redirects
- Reduced response time
- Better scalability under high traffic
- Async operations using GLIDE improve efficiency

---

## Future Improvements

- User authentication
- Analytics dashboard
- Click tracking
- Custom short URLs
- QR code generation
- Rate limiting
- URL preview support

---

## Author

Built using FastAPI, Neon PostgreSQL, Redis, GLIDE, and Python.
