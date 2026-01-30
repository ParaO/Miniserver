# Miniserver

Minimal example:
- `server/` = Node + Express, serves one static welcome page

## Prerequisites

- Install **Node.js (LTS)** on the machine you want to run this on.
	- Node.js is the runtime that actually executes `server/index.js`.
	- `npm` comes with Node.js and is used to download the dependencies below.
- Quick check:

```powershell
node -v
npm -v
```

## Dependencies

These are defined in `server/package.json` and installed with `npm`:

- Runtime (used when the server runs):
	- `express`: the web server framework (routing + static file serving)
	- `livereload` + `connect-livereload`: auto-refresh the browser when you save files in `server/public`
- Dev (developer convenience):
	- `nodemon`: restarts the server automatically when you edit server code

## Run (Windows / PowerShell)

Install deps:

```powershell
cd g:\koodaus\node\test_port_forward_web
npm --prefix server install
```

Start server (port 3001):

```powershell
npm run dev
```

Open:
- http://localhost:3001/
