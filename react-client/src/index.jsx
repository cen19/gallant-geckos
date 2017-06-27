import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import LocationsEntrySet from './components/LocationsEntrySet.jsx';

// import more components such as templates

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      locations: []
    };
  }


  submit (values) {
    console.log(`the client has submitted "${values}"`);

  }
  // have another event listener for the submit address in here

  render () {
    console.log('RENDERINGGG');
    return (
      <div>
        <h1>Midpoint</h1>
        <LocationsEntrySet onSubmit={this.submit.bind(this)}/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));