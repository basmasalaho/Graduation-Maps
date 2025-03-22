import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "792f1da8755947a2a8ffa862dc7498e3",
    },
});
