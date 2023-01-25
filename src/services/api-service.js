import axios from "axios";

class ApiService {

    getData() {
        return axios.get('v1/cryptocurrency/listings/latest?limit=5', {
            headers: {
                'X-CMC_PRO_API_KEY': '9ddf9590-9d3d-4ff8-8590-238ab02fed92',
                "Content-Type": "application/json;charset=UTF-8",
                "Access-Control-Allow-Origin": "*",
            },
        }).then(response => {
            return response.data;
        })
    }

    getMetadata(id) {
        return axios.get("v2/cryptocurrency/info?id=" + id, {
            headers: {
                'X-CMC_PRO_API_KEY': '9ddf9590-9d3d-4ff8-8590-238ab02fed92',
                "Content-Type": "application/json;charset=UTF-8",
                "Access-Control-Allow-Origin": "*",
            },
        }).then(response => {
            return response.data;
        });
    }
}

export default new ApiService();
