import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

class SlideShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentImage: 0
        }

        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        const { transitionTime = 3000 } = this.props;

        this.interval = setInterval(() => {
            const { currentImage } = this.state;
            this.setState({ currentImage: currentImage + 1 });
        }, transitionTime);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    handleClick(e) {
        const { value } = e.target,
            { currentImage } = this.state;

        this.setState({ currentImage: currentImage + parseInt(value) });
    }

    render() {
        const { currentImage } = this.state,
            { images } = this.props,
            imgIndex = Math.abs(currentImage % images.length);

        return (
            <div className="slide">
                <div className="slide_number">{`${imgIndex + 1}/${images.length}`}</div>
                <button className="slide_button left" onClick={this.handleClick} value={-1}></button>
                <div className="slide_container">
                    <div className="slide_images" style={{ marginLeft: imgIndex * -100 + '%' }}>
                        {images.map(img => {
                            return <img className="slide_image" src={img}></img>
                        })}
                    </div>
                </div>
                <button className="slide_button right" onClick={this.handleClick} value={1}></button>
            </div>)
    }
}

SlideShow.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    transitionTime: PropTypes.number
}

export default SlideShow;