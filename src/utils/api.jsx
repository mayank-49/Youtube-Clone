import axios from "axios";
const BASE_URL = "https://youtube138.p.rapidapi.com"

const options = {
    params: {
      hl: 'en',
      gl: 'IN'
    },
    headers: {
      'x-rapidapi-key': import.meta.env.VITE_YOUTUBE_API_KEY,
      'x-rapidapi-host': 'youtube138.p.rapidapi.com'
    }
};
export async function fetchDataFromApi(url){
    const {data} = await axios.get(`${BASE_URL}/${url}`,options)
    return data;
}