# CelestiaWeb
The repository containing the source code for the website of the Discord bot "Celestia".<br>
Follow the steps below if you're interested in hosting the website locally.<br>
<br>
Frontend - Angular 12<br>
Backend - Fastify & discordJS

<strong>Disclaimer: Node.js 16.6.0 or newer is required!</strong> (or else discord.js is very likely going to break in the backend!)<br>
If you only want to access the frontend, feel free to use an older version.

## Quick Start Guide
1. Run `npm install` (or `yarn` if you use yarn) in both frontend and backend folder.
### Frontend
2. Use `ng serve` to build and start the website.<br>
(Make sure you're in /frontend, or else you'll very likely get a 'An invalid configuration file was found' error message)
3. Access the website via the web-browser under `localhost:4200`.
### Backend
#### Option 1
4. Build the project using `call npm run build`.
5. Run the compiled js files using `node dist/server.js` (server.js being the entry point of the backend).
6. Run `curl http://localhost:8080`.

#### Option 2 (Recommended for Windows)
4. Write yourself a .bat script containing following lines:<br>
```
call npm run build
node dist/server.js
curl http://localhost:8080
pause
```
5. Save the script in /backend and double click it to run the backend.
