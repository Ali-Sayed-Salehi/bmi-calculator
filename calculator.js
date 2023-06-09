const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/bmi-calculator.html");
});

app.post("/bmi-calculator", (req, res) => {
  let weight = req.body.weight;
  let height = (req.body.height)/100;
  let bmi = Math.round(weight / (height * height));
  res.send(`Your BMI is ${bmi}`);
});

app.listen(port, () => {
  console.log(`Calculator app listening on port ${port}`)
});