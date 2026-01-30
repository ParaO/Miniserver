# Miniserver

Minimal example:
- `server/` = Node + Express, serves one static welcome page

## What is this?

This repo is intentionally a tiny practice project to learn:

- Visual Studio Code basics (opening a folder, Terminal, editing files, running a local server)
- How to use GitHub Copilot Chat as an “agent” while coding (ask for changes, explanations, debugging help)
- VS Code **Ports** view (port forwarding + the **Forwarded Address**) so a local/remote dev server can be opened easily in a browser

### VS Code + Copilot tips

- Ask for an explanation: “Explain what `server/index.js` does.”
- Ask for small changes: “Add a new paragraph and keep the styling clean.”
- Ask for debugging help: “Why does `npm run dev` fail? Here is the error…”
- Ask for guided steps: “How do I add a second HTML page and a route?”

### Ports / Forwarded Address

- This server listens on port **3001**.
- If you run it on your own machine, you usually open `http://localhost:3001/`.
- If you work in a remote environment (SSH/WSL/dev container/Codespaces), VS Code can show the port in the **Ports** view and provide a **Forwarded Address** link you can open in the browser.

Security note: if you make a forwarded port public / share the forwarded address, the service may become reachable from outside. Keep this as a demo-only project and stop forwarding when you don’t need it.

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
