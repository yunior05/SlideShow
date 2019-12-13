import React from 'react';
import ReactDOM from 'react-dom';
import images from './images';
import SlideShow from './components/SlideShow/';

class App extends React.Component {
    render() {
        return <SlideShow images={images} />
    }
}

ReactDOM.render(<App />, document.getElementById("app"));
