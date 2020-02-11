import axios from "axios";

// axios.create({
//     // baseURL: __dirname,
//     responseType: "json"
//   });

export default {
    //get user's orders
    getOrder: function(email) {
       
        return axios.get("http://localhost:3002/api/orders/" + email); 
    }, 
    saveOrder: function(orderObj) {
        return axios.post("http://localhost:3002/api/orders", orderObj); 
    }, 
    deleteOrder: function(id) {
        return axios.delete("http://localhost:3002/api/orders/" + id);
    }, 
    // get all events
    getEvents: function() {
        return axios.get("http://localhost:3002/api/events"); 
    }
    
}

