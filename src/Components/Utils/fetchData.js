import axios from "axios";
const BaseUrl = "https://youtube-v31.p.rapidapi.com";

const options = {
  params: {
    maxResults: "48",
  },
  headers: {
    "X-RapidAPI-Key": "2821733488msh5b388454ee637cep1e1d8ejsn0ccc3c3d3b5e",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchData = async (url) => {
  try {
    const { data } = await axios.get(`${BaseUrl}/${url}`, options);
    return data;
  } catch (error) {
    console.log("error", error);
  }
};
