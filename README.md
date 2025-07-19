# Burrow HTML and Markdown

<img src="/src/icon/icon.png" width="100">

Burrow is an HTML, markdown, and SVG viewer, code editor, and debugger built with Electron. It allows you to easily burrow into markup files by providing a quick way to switch between viewing, editing, and debugging files.

## Screenshot

<img src="/images/screenshot.png" width="500">

## Developing

Before build commands can be run `npm` must be installed and dependencies must be installed with `npm install`. 

To create and run a development distribution run `npm start` and to create a production build run `npm run build`. To lint your code for issues, run `npm run lint`.

## Serving the build

After running `npm run build`, you can host the build files over HTTP so that other devices on your network can access them. Run `npm run serve` and navigate to `http://<your-ip-address>:5000/` from any device on the LAN.
