import axios from "axios";


const API = {
    getInventory: function(){
        return axios.get("/inventory");
    }
}

export default API;