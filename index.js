import express from "express";
import dotenv from "dotenv";
import bodyparser from "body-parser";

const app = express();
app.use(bodyparser.json());
dotenv.config();
const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/bhlf", (req, res) => {
  const data = req.body.res;
  const odN = [];
  const evn = [];
  const alph = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i] % 2 === 0) {
      evn.push(data[i]);
    } else {
      odN.push(data[i]);
    }
    alph.push(String.fromCharCode(data[i]));
  }
  const response = {
    is_success: true,
    user_id: "john_doe_17091999",
    email: "john@xyz.com",
    roll_number: "ABCD123",
    odd_numbers: [],
    even_numbers: [],
    alphabets: [],
  };

  res.status(200).json(response);
});

// const dataa = ["a", "1", "334", "4", "R"];
// console.log(dataa[0] + 1);

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
