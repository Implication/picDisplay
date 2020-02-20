import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID OrnnyTnGcAaxttdRpCHWhWosCHB20rRqnIeWUoom4X0"
  }
});
