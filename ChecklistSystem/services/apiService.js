const axios = require("axios");

const fetchApplicationData = async () => {
  const API_URL =
    "http://qa-gb.api.dynamatix.com:3100/api/applications/getApplicationById/67339ae56d5231c1a2c63639";

  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error.message);
    throw new Error("Failed to fetch application data");
  }
};

module.exports = { fetchApplicationData };
