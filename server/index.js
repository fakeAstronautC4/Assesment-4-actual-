const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const { getCompliment, getFortune, deleteFortune, postWisdom, updateWisdom } = require('./controller')

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);


app.delete("/api/fortune/delete", deleteFortune);

app.post("/api/wisdom/:banana", postWisdom);

app.put('/api/wisdom/update', updateWisdom);

app.listen(4000, () => console.log("Server running on 4000"));