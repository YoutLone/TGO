# TGO

Taungoo restaurant frontend built with React + Vite + Tailwind.

## Prerequisites

- Node.js 18+ (or 20+ recommended)
- npm
- Docker Desktop (for containerized run)

## Run Locally (without Docker)

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Open:
- http://localhost:5173

## Build

```bash
npm run build
```

## Docker

This project includes:
- `Dockerfile` with multi-stage targets:
  - `production` (Nginx serving built static files)
  - `development` (Vite dev server)
- `docker-compose.yml` with services:
  - `web` (production)
  - `web-dev` (development)

### Production container

```bash
docker compose up --build web
```

Open:
- http://localhost:8080

### Development container (hot reload)

```bash
docker compose up --build web-dev
```

Open:
- http://localhost:5173

## Docker Files

- [`Dockerfile`](/Users/thanmyohtet/Desktop/TGO/Dockerfile)
- [`docker-compose.yml`](/Users/thanmyohtet/Desktop/TGO/docker-compose.yml)
- [`nginx.conf`](/Users/thanmyohtet/Desktop/TGO/nginx.conf)
- [`.dockerignore`](/Users/thanmyohtet/Desktop/TGO/.dockerignore)
