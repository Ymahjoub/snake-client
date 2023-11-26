const net = require("net")
const {IP, PORT} = require("./constants")

const connection = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  conn.setEncoding("utf8");

  conn.on("data", (data) => {
    console.log("server says:", data);
  });

  conn.on("connect", () => {
    console.log("connected to the server");
    conn.write("Name: YM")
  });

  conn.on("close", () => {
    console.log("Connection closed");
  });

  conn.on("error", (err) => {
    console.error("Error:", err);
  });

  return conn;
};

module.exports = {
  connection,
}
