# Tic Tac Toe

Bootstrapped using Parcel(React)

## To view the project on a browser:

Link :https://icefire-tictactoe.web.app/

## To try it out locally

- `npm run build` — This will output a production build in the `dist` directory.
- `npm run start` — This will spawn a development server with a default port of `1234`.

## Custom port

You can use the `-p` flag to specify a port for development. To do this, you can either run `npm start` with an additional flag:

```
npm start -- -p 3000
```

Or edit the `start` script directly:

```
parcel index.html -p 3000
```


## What it looks like

![Screenshot 2021-07-27 193558](https://user-images.githubusercontent.com/55898039/127168233-d5a1af33-21e2-4515-a966-30d908f44dcb.png)

## Deploy to GitHub Pages

You can also deploy your project using GitHub pages.
First install the `gh-pages` [package](https://github.com/tschaub/gh-pages):

`npm i -D gh-pages`

With Parcel's `--public-url` flag, use the following scripts for deployment:

```
"scripts": {
  "start": "parcel index.html",
  "build": "parcel build index.html --public-url '.'",
  "predeploy": "rm -rf dist && parcel build index.html --public-url '.'",
  "deploy": "gh-pages -d dist"
},
```

Then follow the normal procedure in GitHub Pages and select the `gh-pages` branch.
