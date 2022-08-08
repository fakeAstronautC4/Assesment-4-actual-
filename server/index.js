const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const { getCompliment, getFortune, deleteFortune, postWisdom } = require('./controller')

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);


app.delete("/api/fortune/delete", deleteFortune);

app.post("http://localhost:4000/api/wisdom", postWisdom)

app.listen(4000, () => console.log("Server running on 4000"));
