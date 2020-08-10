import axios from "axios";


const API = {
    getInventory: function(){
        return axios.get("/inventory");
    },
    getModels: function(){
        return axios.get("/inventory/model");
    },
    getLogs: function(){
        return axios.get("/inventory/logs");
    }
}

export default API;