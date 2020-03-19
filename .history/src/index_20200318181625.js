import React from 'react';
import ReactDOM from 'react-dom';



class App extends React.Component {
    constructor(props) {
        super(props);

        this.state= { lat: null,long: null, errorMessage: '' }
        

        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                console.log(position)
                this.setState({ lat: position.coords.latitude})
                this.setState({ long: position.coords.longitude})
            },
            (err) => console.log(err)
        );
    }
    render ()
     {
        
        return (
            <div>
                <div>Latitude: {this.state.lat}</div>
                <div>Longitude: {this.state.long}</div>
            </div>
        

        )
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));

