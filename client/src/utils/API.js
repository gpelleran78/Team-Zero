import axios from "axios";

// axios.create({
//     // baseURL: __dirname,
//     responseType: "json"
//   });

export default {
    //get user's orders
    getOrder: function(email) {
       
        return axios.get("/api/orders/" + email); 
    }, 
    saveOrder: function(orderObj) {
        return axios.post("/api/orders", orderObj); 
    }, 
    deleteOrder: function(id) {
        return axios.delete("/api/orders/" + id);
    }, 
    // get all events
    getEvents: function() {
        return axios.get("/api/events"); 
    }
    
}

