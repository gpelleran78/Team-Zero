import axios from "axios";

export default {

    getOrder: function(id) {
        return axios.get("http://localhost:3002/api/order/" + id); 
    }, 
    saveOrder: function(postOrder) {
        return axios.post("http://localhost:3002/api/order", postOrder); 
    }, 
    deleteOrder: function(id) {
        return axios.delete("http://localhost:3002/api/order/" + id);
    }, 
    getEvents: function() {
        return axios.get("http://localhost:3002/api/events"); 
    }
    
}

