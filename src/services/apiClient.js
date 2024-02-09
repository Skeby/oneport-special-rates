import axios from "axios";

export default axios.create({
  baseURL: "https://test-api.oneport365.com/api/live_rates",
});
