const express = require("express");
const path = require("path");
const cookieSession = require("cookie-session");

const FeedbackService = require("./services/FeedbackService");
const SpeakerService = require("./services/SpeakerService");

const feedbackService = new FeedbackService("./data/feedback.json");
const speakersService = new SpeakerService("./data/speakers.json");

const routes = require("./routes");




// eslint-disable-next-line no-param-reassign, no-underscore-dangle
// const __dirname = dirname(fileURLToPath(import.meta.url));
// const __dirname = fileURLToPath(import.meta.url);
// const _dirname = path.dirname(_filename);
const app = express();
const port = 3000;

app.set("trust proxy", 1)

app.use(
  cookieSession({
   name: "session",
   keys: ["ddfer43erw", "445rresdfgw21"]
}))

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));

app.use(express.static(path.join(__dirname, "./static")));

app.use("/", routes({feedbackService, speakersService}));

app.listen(port, () => {
  // eslint-disable-next-line
  console.log(`Express Server Listening on port: ${port}`);
});
