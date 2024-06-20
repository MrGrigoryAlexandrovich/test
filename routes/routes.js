const axios = require("axios");
const express = require("express");
const router = express.Router();

router.get("/getall", async (req, res) => {
  const { data } = await axios.post(
    "https://be.app.karriera.de/companies/fsvberolinastralauev"
  );

  return res.status(200).json(data.data);
});

module.exports = router;
