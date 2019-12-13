import React from 'react';
// import './styles.css'; Todo: Css Loader

function RenderImages({ images }) {
    return images.map(img => {
            return <img src={img}></img>
        })
}

class SlideShow extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            images: this.props.images
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
        e.preventDefault();
        this.setState({ currentImage: this.state.currentImage + 1});
    }

    render() {
        const { images } = this.state;
        return (
        <div className="slide_container">
            <RenderImages images={images} />
        </div>)
    }
}

export default SlideShow;