const express = require("express");
const cors = require("cors");
const router = express.Router();
const fs = require("fs");
const app = express();
const logger = require('./logger'); // Adjust the path accordingly based on the location of logger.js

const baseFile = '../sellter_server/static/build/springVersion/'


app.use(cors());

app.get("/download/spring/agent/jdk", (req, res, next) => {

  logger.info('Incoming request:', {
    method: req.method,
    url: req.originalUrl,
    query: req.query,
    headers: req.headers
  })

  fileName = "openJdk11.zip";
  const stream = fs.createReadStream(baseFile + fileName);
  res.setHeader("Content-Disposition", `attachment; filename=${fileName}`);
  stream.pipe(res);

  console.log("res OUT");
});

app.get("/download/spring/agent/ap", (req, res, next) => {

  logger.info('Incoming request:', {
    method: req.method,
    url: req.originalUrl,
    query: req.query,
    headers: req.headers
  })

  fileName = "sellter.agent-0.0.1-SNAPSHOT.jar";
  installName = "sellterAgent.jar"
  const stream = fs.createReadStream(baseFile + fileName);
  res.setHeader("Content-Disposition", `attachment; filename=${installName}`);
  stream.pipe(res);

  console.log("res OUT");
});


app.get("/download/agent", (req, res, next) => {
  logger.info('Incoming request:', {
    method: req.method,
    url: req.originalUrl,
    query: req.query,
    headers: req.headers
  })

  filePath = "../static/build/sellter_agent.exe";
  fileName = "agent.exe";
  res.setHeader("Content-type", `some/type`);
  fs.createReadStream(filePath).pipe(res);

  console.log("res OUT");
});

app.get("/download/source", (req, res, next) => {
  logger.info('Incoming request:', {
    method: req.method,
    url: req.originalUrl,
    query: req.query,
    headers: req.headers
  })

  filePath = "../static/build/source.zip";
  fileName = "source.zip";
  res.setHeader("Content-type", `some/type`);
  fs.createReadStream(filePath).pipe(res);

  console.log("res OUT");
});

app.get("/download/packageJson", (req, res, next) => {
  logger.info('Incoming request:', {
    method: req.method,
    url: req.originalUrl,
    query: req.query,
    headers: req.headers
  })

  filePath = "../static/build/package.json";
  fileName = "package.json";
  const data = fs.readFileSync(filePath, "utf8");
  res.send(data);

  // res.setHeader("Content-type", `some/type`);
  // fs.createReadStream(filePath).pipe(res);

  console.log("res OUT");
});

app.get("/download/regiAdd", (req, res, next) => {
  logger.info('Incoming request:', {
    method: req.method,
    url: req.originalUrl,
    query: req.query,
    headers: req.headers
  })

  // filePath = "D:/Workspace/js/sellter_demo_server_v0/static/build/regiAdd_startProgram.bat";
  filePath = "../static/build/regiAdd_startProgram.bat";
  fileName = "regiAdd_startProgram.bat";
  const data = fs.readFileSync(filePath, "utf8");
  res.send(data);

  // res.setHeader("Content-type", `some/type`);
  // fs.createReadStream(filePath).pipe(res);

  console.log("res OUT");
});

app.get("/agent/version", (req, res, next) => {
  logger.info('Incoming request:', {
    method: req.method,
    url: req.originalUrl,
    query: req.query,
    headers: req.headers
  })

  res.send("Sample v0.0.1");

  // res.setHeader("Content-type", `some/type`);
  // fs.createReadStream(filePath).pipe(res);

  console.log("res OUT");
});

console.log("server listen Start in Port 8887");
app.listen(8887);
