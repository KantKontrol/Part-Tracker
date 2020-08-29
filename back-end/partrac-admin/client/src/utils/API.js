import axios from "axios";


const API = {
    getInventory: function(){
        return axios.get("/inventory");
    },
    getModels: function(cancelSource){
        try {
            return axios.get("/inventory/model", { cancelToken: cancelSource.token });
          } catch (error) {
              
            if (axios.isCancel(error)) {
              console.log("cancelled");
            } else {
              throw error;
            }
          }
    },
    getLogs: function(){
        return axios.get("/inventory/logs");
    }
}

export default API;