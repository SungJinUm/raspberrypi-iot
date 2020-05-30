const express = require("express");
const app = express();
const cors = require("cors");
const Gpio = require("pigpio");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.listen(4040, () => {
  console.log("start server");
});

let status = 1;
app.post("/light-main", (req, res) => {
  //GPIO 사용 서브모터 제어 코드
  status = status * -1;
  res.json({ nowStatus: status });
});