const dotenv = require("dotenv");
dotenv.config();

const backEnd = "http://" + process.env.BACKEND_SERVICE + ":" + process.env.BACKEND_SERVICE_PORT;
const frontEnd = "http://" + process.env.SERVICE_NAME + ":" + process.env.SERVICE_PORT;

console.log("Using backend: " + backEnd);
console.log("Using front: " + frontEnd);

module.exports = {
  devServer: {
    port: 8001, 
    proxy: {
      "/api": {
        target: backEnd,
        pathRewrite: {'^/api': ''}
      }
    },
  }
};

