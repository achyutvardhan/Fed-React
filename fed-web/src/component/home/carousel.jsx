
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import desktop from "../../Img/Desktop.png"
import desktop1 from "../../Img/Desktop.png"
import desktop2 from "../../Img/Desktop.png"
// import desktop3 from "../Img/Desktop.png"
// import { module } from '../../public/webpack.config';

class DemoCarousel extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src={desktop} alt="image1"/>
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={desktop1} alt="image2"/>
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={desktop2} alt="image3"/>
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
    }
}

ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));


export default DemoCarousel;