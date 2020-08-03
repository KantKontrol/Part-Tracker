import axios from "axios";


const API = {
    getInventory: function(){
        return axios.get("/inventory");
    },
    getModels: function(){
        return axios.get("/inventory/model");
    }
}

export default API;