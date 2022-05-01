import axios from "axios";
const KEY = "AIzaSyBl7qYzkKceKHsRR-6m8pthOhNu4DPzHwY";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 10,
    key: KEY,
  },
});
