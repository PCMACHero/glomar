import React, { Component } from 'react';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default class MyCarousel extends Component {
    render() {
        return (
            <Carousel autoPlay={true} width={"100%"} infiniteLoop={true} showStatus={false} showThumbs={false} >
                <div>
                    <img src="/images/tes1.jpg" />
                    <p className="legend">MANNY RAMIREZ</p>
                </div>
                
                <div>
                    <img src="/images/tes3.jpg" />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src="/images/tes4.jpg" />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src="/images/tes5.jpg" />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src="/images/tes6.jpg" />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src="/images/tes7.gif" />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src="/images/tes8.jpg" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
    }
}