# Miniserver

Minimal example:
- `server/` = Node + Express, serves one static welcome page

## Mikä tämä on?

Tämä repo on tarkoituksella pieni harjoitusprojekti, jonka avulla voi opetella:

- Visual Studio Coden perusworkflow (kansion avaaminen, Terminal, tiedostojen muokkaus ja ajaminen)
- GitHub Copilot Chat -agentin hyödyntäminen koodin kanssa (kysy, pyydä muutoksia, anna sen tehdä toistuvat työvaiheet)
- VS Code **Ports** -näkymän käyttö (portin “forwardaus” ja **Forwarded Address**), jolla paikallinen/remote-ympäristön palvelu saadaan helposti auki selaimeen

### VS Code + Copilot -vinkkejä

- Pyydä agenttia selittämään tiedosto: “Selitä mitä `server/index.js` tekee.”
- Pyydä pieniä muutoksia: “Lisää sivulle uusi kappale ja pidä tyylit siistinä.”
- Pyydä debuggausapua: “Miksi `npm run dev` ei käynnisty? Tässä virhe…”
- Pyydä ohjattuja askeleita: “Miten lisään toisen HTML-sivun ja reitin?”

### Ports / Forwarded Address

- Tämä serveri kuuntelee portissa **3001**.
- Jos ajat projektia *omalla koneella*, avaat yleensä suoraan `http://localhost:3001/`.
- Jos työskentelet *remote-ympäristössä* (esim. SSH/WSL/dev container/Codespaces), VS Code näyttää **Ports**-näkymässä portin ja tarjoaa **Forwarded Address** -osoitteen, jolla saat palvelun näkyviin selaimeen.

Turva: jos teet portista Public/jaat osoitetta muille, huomioi että palvelu voi näkyä ulospäin. Pidä projekti tarkoituksella “demo-only” ja sulje portin forwardaus kun et tarvitse sitä.

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
