const express = require("express");
const cors = require("cors");
const router = express.Router();
const fs = require("fs");
const app = express();

app.use(cors());

app.get("/download/agent/browser", (req, res, next) => {
  console.log("req IN");

  filePath = "../static/build/sellter_agent.exe";
  fileName = "agent.exe";
  const stream = fs.createReadStream(filePath);
  res.setHeader("Content-Disposition", `attachment; filename=${fileName}`);
  stream.pipe(res);

  console.log("res OUT");
});

app.get("/download/agent", (req, res, next) => {
  console.log("req IN");

  filePath = "../static/build/sellter_agent.exe";
  fileName = "agent.exe";
  res.setHeader("Content-type", `some/type`);
  fs.createReadStream(filePath).pipe(res);

  console.log("res OUT");
});

app.get("/download/source", (req, res, next) => {
  console.log("req IN");

  filePath = "../static/build/source.zip";
  fileName = "source.zip";
  res.setHeader("Content-type", `some/type`);
  fs.createReadStream(filePath).pipe(res);

  console.log("res OUT");
});

app.get("/download/packageJson", (req, res, next) => {
  console.log("req IN");

  filePath = "../static/build/package.json";
  fileName = "package.json";
  const data = fs.readFileSync(filePath, "utf8");
  res.send(data);

  // res.setHeader("Content-type", `some/type`);
  // fs.createReadStream(filePath).pipe(res);

  console.log("res OUT");
});

app.get("/download/regiAdd", (req, res, next) => {
  console.log("req IN");

  // filePath = "D:/Workspace/js/sellter_demo_server_v0/static/build/regiAdd_startProgram.bat";
  filePath = "../static/build/regiAdd_startProgram.bat";
  fileName = "regiAdd_startProgram.bat";
  const data = fs.readFileSync(filePath, "utf8");
  res.send(data);

  // res.setHeader("Content-type", `some/type`);
  // fs.createReadStream(filePath).pipe(res);

  console.log("res OUT");
});

console.log("server listen Start in Port 8887");
app.listen(8887);
