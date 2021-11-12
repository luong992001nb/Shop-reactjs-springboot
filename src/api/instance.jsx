import axios from "axios";

const instance = axios.create({
    baseURL: "https://600e39973bb1d100179de91e.mockapi.io/"
});
export default instance;