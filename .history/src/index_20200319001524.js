import React from 'react';
import ReactDOM from 'react-dom';



class App extends React.Component {
    
    state= { lat: null,long: null, errorMessage: '' }

    componentDidMount() { 
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({ lat: position.coords.latitude})
                this.setState({ long: position.coords.longitude})
            },
            (err) =>  this.setState({ errorMessage: err.message })
        );
    };

    componentDidUpdate() {
        console.log('Component did update.')
    };

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

