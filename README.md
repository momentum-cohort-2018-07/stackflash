# Stackflash

[Click here for the `create-react-app` README.](README.cra.md)

## Setup for development

After cloning the repo, you need to install all dependencies by running:

```
yarn install
```

You then need to make a `.env` file. This file sets up environment variables used in configuration. A sample one is provided at `.env.sample`. You can copy that to `.env`.

## Running the app

To start the app, run:

```
yarn start
```

## Setting up your own instance of the API

If you want to use your own instance of the API for development -- a very good idea -- then you can! 

1. Go to https://glitch.com/edit/#!/stackflash-api. Click the "Remix" button, as seen below:

![Remix the API using Glitch](docs/remix-api.png)

2. Once you do that, click "Show" to open up a window with the URL of your new API instance.

3. Edit your `.env.sample` file to have the URL of your API instance. It should look like this:

```
REACT_APP_USER_TOKEN=cc91a260-b4a5-11e8-a605-d9da8e6b09d2
REACT_APP_API_DOMAIN=https://tall-bay.glitch.me/
```
4. Then copy and paste both of those items into the .env file which is probably enmpty right now.  

5. Start/Restart yarn in the terminal:
  ```
  if you are already running the app:

    control + c to cancel the server then type yarn start in the terminal.  The browser should reload
  ```
  If you haven't started running the app:
  
    In the terminal type yarn start
