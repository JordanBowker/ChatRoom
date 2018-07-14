A Chat room application using Socket.io 
=========================================

This repository contains a chat room app and node.js server. 
Code for the server and heavy influence for this repository taken from https://github.com/luixaviles/socket-io-typescript-chat

# Running Server and Client locally
## Prerequisites

1. [NodeJS](https://nodejs.org)
2. [Git](https://git-scm.com)
3. [Angular CLI](https://cli.angular.io/)

## Clone repository

In order to start the project use:

```bash
git clone https://github.com/JordanBowker/ChatRoom
cd ChatRoom
```
The repo contains a server and a client.

## Run Server

To run server locally, just install dependencies and run `gulp` task to create a build:

```bash
cd server
npm install -g gulp-cli
npm install
gulp build
npm start
```

The `socket.io` server will be running on port `8080`

## Run Angular Client

Open other command line window and run following commands:

```bash
$ cd client
$ npm install
$ ng serve
```

The client app runs at [http://localhost:4200](http://localhost:4200/)

## License

MIT
