import axios from "axios";

const http = axios.create({
    baseURL: "https://opentdb.com/api.php?amount=10",
});

export default {
    list() {
        return http.get("");
    },
};