import axios from "axios";

export default {
    getOrder: function(id) {
        return axios.get("/api/order/" + id); 
    }, 
    saveOrder: function(postOrder) {
        return axios.post("/api/order", postOrder); 
    }, 
    deleteOrder: function(id) {
        return axios.delete("/api/order/" + id);
    }, 
    getEvents: function() {
        return axios.get("/api/events"); 
    }
}