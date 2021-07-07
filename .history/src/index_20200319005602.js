import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';



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
            return <SeasonDisplay lat={this.state.lat} long={this.state.long}/>
        }

        return <i className="spinner loading icon"></i> 
        
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));

