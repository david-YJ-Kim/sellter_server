// const axios = require("axios");
// const fs = require("fs");
// const Blob = require("buffer");

// axios({
//   method: "get",
//   url: "http://localhost:8889/download/agent/",
// }).then((res) => {
//   console.log(res);
//   console.log("res IN");
//   //   const blob = new Blob([res.data]);
//   // blob을 사용해 객체 URL을 생성합니다.
//   var imageName = "downloadedAgent.exe";

//   //   const file = new File([res.data], imageName);

//   fs.createWriteStream(imageName).write(res.env.FormData);

//   console.log("res OUT");
// });

const http = require("http"); // or 'https' for https:// URLs
const fs = require("fs");

const file = fs.createWriteStream("downloadedAgent.exe");
const request = http.get(
  "http://localhost:8889/download/agent/",
  function (response) {
    response.pipe(file);

    // after download completed close filestream
    file.on("finish", () => {
      file.close();
      console.log("Download Completed");
    });
  }
);
