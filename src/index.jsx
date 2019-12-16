import React from 'react';
import ReactDOM from 'react-dom';
import images from './images';
import SlideShow from './components/SlideShow/';

class App extends React.Component {
    render() {
        return <SlideShow images={images} transitionTime={5000} />
    }
}

ReactDOM.render(<App />, document.getElementById("app"));
