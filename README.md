# Burrow HTML and Markdown

<img src="/src/icon/icon.png" width="100">

Burrow is an HTML, markdown, and SVG viewer, code editor, and debugger built with Electron. It allows you to easily burrow into markup files by providing a quick way to switch between viewing, editing, and debugging files.

## Screenshot

<img src="/images/screenshot.png" width="500">

## Developing

Before build commands can be run `npm` must be installed and dependencies must be installed with `npm install`. 

To create and run a development distribution run `npm start` and to create a production build run `npm run build`. To lint your code for issues, run `npm run lint`.

After building you can serve the output over HTTP so other devices on your LAN can access it by running `npm run serve`. This will start a local server on port 8080 serving the `build` directory.
