import React, { Component } from "react";
import Wrapper from "../Wrapper/Wrapper";
// import { resolve } from "path";


class EventPage extends Component {
    
    componentDidMount() {
        fetch('http://api.eventful.com/json/events/search?app_key=sZb9GCCRXJmW654Z&where=32.746682,-117.162741&within=25', {
            method: 'GET',
            // body: JSON.stringify(data),
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                "Accept": 'application/json',
            }})
        .then(res => res.json())
        .then(data => {
            console.log('This is event data:', data);
            this.setState({ eventData : data });
        })
    }

    state = {
        
    }

    render() {
        return (
            <Wrapper>
                <h1>this is the event page</h1>
            </Wrapper>
        )
    }
}

export default EventPage; 