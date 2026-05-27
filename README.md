# U-Short 🚀

A modern and fast URL shortener built with **FastAPI**, **PostgreSQL**, **Redis Cache (Valkey/GLIDE)**, and a **Next.js** frontend.  
U-Short generates short URLs instantly, improves redirect performance using Redis caching, and automatically removes expired URLs after 30 days using scheduled cleanup jobs.

---

# 🌐 Live Demo

## Frontend
https://u-short-red.vercel.app

## Backend API
https://u-shortner.vercel.app

---

## ✨ Features

- 🔗 Shorten long URLs instantly
- ⚡ Fast redirects using Redis caching
- 🗄️ PostgreSQL database for persistent storage
- ⏳ Automatic URL expiration after 30 days
- 🧹 Automatic cleanup of expired URLs
- 🌐 Modern frontend built with Next.js
- 🚀 FastAPI backend API
- 📦 Async architecture for better performance
- ☁️ Fully deployed on Vercel

---

# 🛠️ Tech Stack

## Frontend
- Next.js
- Tailwind CSS

## Backend
- FastAPI
- Python
- AsyncIO

## Database & Cache
- PostgreSQL (Neon)
- Redis / Valkey
- GLIDE client library

## Deployment
- Vercel

---

# 📂 Project Structure

```bash
u-short-frontend/
│
├── app/
├── components/
├── public/
├── package.json
└── README.md


u-short-backend/
│
├── api/
│   ├── __init__.py
│   ├── database.py
│
├── .dockerignore
├── .env
├── .gitignore
├── .python-version
├── Dockerfile
├── main.py
├── pyproject.toml
├── README.md
├── requirements.txt
└── uv.lock
```

---

# ⚡ System Architecture

```text
User → Next.js Frontend → FastAPI Backend → PostgreSQL
                                 ↓
                              Redis Cache
```

---

# ⚡ Redis Caching

U-Short uses Redis as a caching layer to improve redirect performance.

## Flow

1. User requests shortened URL
2. Backend first checks Redis cache
3. If cache hit → redirect instantly
4. If cache miss → fetch from PostgreSQL
5. Store result back into Redis

This reduces database load and improves response speed.

---

# ⏳ URL Expiration System

Every shortened URL automatically expires after **30 days**.

The backend periodically:

- Finds expired URLs
- Removes them from PostgreSQL
- Removes cached entries from Redis

---

# 📡 API Endpoints

## Shorten URL

```http
POST /shorten?url=https://example.com
```

### Response

```json
{
  "short_url": "https://u-shortner.vercel.app/abc123"
}
```

---

## Redirect URL

```http
GET /{code}
```

Redirects to the original URL.

---

# ⚙️ Local Development Setup

## Clone Repository

```bash
git clone https://github.com/your-username/u-short.git
cd u-short
```

---

# 🔧 Backend Setup

## Create Virtual Environment

```bash
python -m venv .venv
```

## Activate Virtual Environment

### Linux / macOS

```bash
source .venv/bin/activate
```

### Windows

```bash
.venv\Scripts\activate
```

---

## Install Dependencies

```bash
pip install -r requirements.txt
```

---

## Environment Variables

Create a `.env` file:

```env
DATABASE_URL=your_neon_postgresql_url

REDIS_HOST=localhost
REDIS_PORT=6379
REDIS_PASSWORD=your_password

BASE_URL=http://localhost:8000
```

Example Redis connection string:

```env
redis://:password@localhost:6379
```

---

## Run Backend

```bash
uvicorn main:app --reload
```

Backend runs on:

```txt
http://127.0.0.1:8000
```

---

# 💻 Frontend Setup

```bash
npm install
npm run dev
```

Frontend runs on:

```txt
http://localhost:3000
```

---

# 🔐 CORS Configuration

Since frontend and backend are deployed separately, CORS must be enabled properly in FastAPI.

Example:

```python
from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://u-short-red.vercel.app"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
```

---

# 📦 Example requirements.txt

```txt
fastapi
uvicorn
sqlalchemy
asyncpg
python-dotenv
redis
glide-for-redis
```

---

# 🚀 Future Improvements

- Custom short URLs
- Analytics dashboard
- QR code generation
- Click tracking
- User authentication
- Rate limiting

---

# 👩‍💻 Author

**Prerna Kumari Sharma**

- GitHub: https://github.com/prerna12github
