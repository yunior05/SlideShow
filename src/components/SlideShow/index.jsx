import React from 'react';
import './styles.css';

class SlideShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentImage: 0
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        const { currentImage } = this.state,
            { value } = e.target;

        e.preventDefault();
        e.stopPropagation();
        this.setState({ currentImage: currentImage + parseInt(value) });
    }

    render() {
        const { currentImage } = this.state,
            { images } = this.props,
            imgIndex = Math.abs(currentImage % images.length);

        return (
            <div className="slide">
                <button onClick={this.handleClick} value={-1}>Previous</button>
                <div className="slide_container">
                    <div className="slide_images" style={{ marginLeft: imgIndex * -100 + '%' }}>
                        {images.map(img => {
                            return <img className="slide_image" src={img}></img>
                        })}
                    </div>
                </div>
                <button onClick={this.handleClick} value={1}>Next</button>
            </div>)
    }
}

export default SlideShow;