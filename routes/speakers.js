const express = require("express");

const router = express.Router();

module.exports = (params) => {
  const { speakersService } = params;

  router.get("/", async (request, response) => {
    const speakers = await speakersService.getList();
    console.log(speakers);
    response.render("layout", { pageTitle: "Speakers", template: "speakers", speakers });
  });

  router.get("/:shortname", (request, response) =>
    response.send(`Details page of ${request.params.shortname}`)
  );

  return router;
};
