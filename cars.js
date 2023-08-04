const { Socket } = require('dgram');
const express = require('express');
//creation of express app
const app = express();
const http = require('http');
const path = require('path');
const server = http.createServer(app);
const {Server} = require("socket.io");
const io = new Server(server);
const rooms = {};




