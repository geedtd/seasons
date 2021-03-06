import React from 'react';
import ReactDOM from 'react-dom';



class App extends React.Component {
    constructor(props) {
        super(props);

        this.state= { lat: null }
        this.state= { long: null}

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
                <div>Latitude: {this.state.lat}</div>
            </div>
        

        )
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));

