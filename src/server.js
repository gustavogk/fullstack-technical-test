const express = require("express");
const userRoutes = require("./routes/userRoutes");
const documentRoutes = require("./routes/documentRoutes");

const app = express();
app.use(express.json());

app.use("/users", userRoutes);
app.use("/documents", documentRoutes);

app.listen(3001, () => {
  console.log("Server running on http://localhost:3001");
});
