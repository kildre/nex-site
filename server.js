import express from "express";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

// eslint-disable-next-line no-param-reassign, no-underscore-dangle
const __dirname = dirname(fileURLToPath(import.meta.url));
// const __dirname = fileURLToPath(import.meta.url);
// const _dirname = path.dirname(_filename);
const app = express();
const port = 3000;

app.set("views engine", "ejs");
app.set("views", path.join("./views"));

app.use(express.static(path.join(__dirname, "./static")));

app.get("/", (req, res) => {
  res.render("pages/index", {pageTitle: "Bonjour!"}
  )
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./static/speakers.html"));
});

app.listen(port, () => {
  // eslint-disable-next-line
  console.log(`Express Server Listening on port: ${port}`);
});
