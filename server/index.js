const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3031;

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

const eventos = require("./routes/eventos");
app.use("/api/eventos", eventos);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
