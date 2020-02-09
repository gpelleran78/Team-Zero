import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

class App extends Component {

    render() {

        const style = {
            width: '100%',
            height: '400px',
            border: '3px solid #e49b7f',
        }

        return (
            <div className='App container'>
                <div className="row">
                    <Map
                        google={this.props.google}
                        zoom={15}
                        initialCenter={{
                            lat: 33.3696939,
                            lng: -111.801682
                        }}
                        style={style}>

                        <Marker
                            title={'Road Runner Coffee'}
                            name={'Road Runner'}
                            position={{ lat: 33.3696939, lng: -111.801682 }} />

                    </Map>
                </div>
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyC1mW3O4KKOT9sS-L4bZhLtxGYMP_HP9KE')
})(App);