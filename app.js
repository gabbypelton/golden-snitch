import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import path from "path";

import facebookRouter from "./server/routes/facebook";

const app = express();
app.use(helmet());
app.use(express.json());
app.use(cors());
app.use(
  morgan("method :url :status :res[content-length] - :response-time ms", {
    skip: (req, res) => process.env.NODE_ENV === "test",
  })
);

app.use("/facebook", facebookRouter);
app.use(express.static(path.join(__dirname, "client", "build")));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(5000, () => {
  console.log("listening on port 5000");
});

export default app;
