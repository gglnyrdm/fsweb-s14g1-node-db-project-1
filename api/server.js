const express = require("express");
const router = require("./accounts/accounts-router")
const server = express();

server.use(express.json());


server.use('/api/accounts', router);

server.use((err, req, res, next) => {
    res.status((err.status || 500)).json({
      customMessage:"Global error handler üzerinde hata oluştu",
      message:err.message
    })
  });

module.exports = server;
