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
            (err) => {
                console.log(err)
                this.setState({ errorMessage: err.message })
            }
        );
    }
    render ()
     {
        if(this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>
        }
        if(!this.state.errorMessage && this.state.lat && this.state.long) {
            return (
            <div>
                Latitude: {this.state.lat} <br/>
                Longitude: {this.state.long}
            </div>
            
            )
        }

        return <div>Loading...</div>
        
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));

