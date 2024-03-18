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
  const {data} = req.body.res;
  const alphabets = [];
  const even_numbers = [];
  const odd_numbers = [];

  for (const char of data) {
    if (char.length === 1 && char.match(/[a-z]/i)) {
      alphabets.push(char.toUpperCase());
    } else {
      const number = parseInt(char, 10);
      if (!isNaN(number)) { 
        if (number % 2 === 0) {
          even_numbers.push(number);
        } else {
          odd_numbers.push(number);
        }
      }
    }
  }
  const response = {
    is_success: true,
    user_id: "rahul_goyal_01092003",
    email: "rahul1120.be21@chitkara.edu.in",
    roll_number: "2110991120",
    odd_numbers: [],
    even_numbers: [],
    alphabets: [],
  };

  res.status(200).json(response);
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});

export default app;
