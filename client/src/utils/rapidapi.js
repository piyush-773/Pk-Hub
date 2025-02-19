import axios from "axios";

const baseUrl = "http://localhost:8000/api/v1/";

export const fetchData = async (url) => {
  try {
    const { data } = await axios.get(`${baseUrl}${url}`);
    return data;
  } catch (error) {
    console.error("Error fetching data: ", error);
    throw error;
  }
};