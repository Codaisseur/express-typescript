import express, { Request, Response, Application } from "express";
import morgan from "morgan";
import cors from "cors";

const app: Application = express();
const PORT: string | number = process.env.PORT || 4000;

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

app.get("/", (req: Request, res: Response) => {
  res.send({ message: "Hello World" });
});

app.post("/", (req: Request, res: Response) => {
  res.send({ message: "You posted", body: req.body });
});
