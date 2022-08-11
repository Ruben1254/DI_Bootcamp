import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import hongKong from './hongKong.jpg'
import Macao from './Macao.jpg'
import japan from './japan.jpg'
import LasVegas from './LasVegas.jpg'
import './Carousel.css'

class DemoCarousel extends Component {
    render() {
        return (
            <Carousel className='pics'>
                <div className='pics'>
                    <img src={hongKong} alt="HongKong" />
                    <p className="legend">Hong Kong</p>
                </div>
                <div className='pics'>
                    <img src={Macao} alt="Macao"/>
                    <p className="legend">Macao</p>
                </div>
                <div className='pics'>
                    <img src={japan} alt="japan" />
                    <p className="legend">Japan</p>
                </div>
                <div className='pics'>
                    <img src={LasVegas} alt="LasVegas" />
                    <p className='legend'>Las Vegas</p>
                </div>
            </Carousel>
        );
    }
}

export default DemoCarousel