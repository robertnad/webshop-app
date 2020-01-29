import React from 'react';
import { Carousel } from 'antd';

const HomePage = () => {
    return (
        // <div>
        //     Welcome to home page!
        // </div>
        <div>
            <Carousel autoplay style={{textAlign: 'center', height: '600px', lineHeight: '600px', overflow: 'hidden'}}>
                <div>
                <h3 style={{color: 'white', background: '#8bbdd9'}}>New arrivals</h3>
                </div>
                <div>
                <h3 style={{color: 'white', background: '#8bbaaa'}}>20% of winter items</h3>
                </div>
                <div>
                <h3 style={{color: 'white', background: '#77757e'}}>Free shipping over 100$</h3>
                </div>
            </Carousel>
            <Carousel autoplay style={{textAlign: 'center', height: '600px', lineHeight: '600px', overflow: 'hidden'}}>
                <div>
                <h3 style={{color: 'white', background: '#8bbaaa'}}>New arrivals</h3>
                </div>
                <div>
                <h3 style={{color: 'white', background: '#8bb999'}}>20% of winter items</h3>
                </div>
                <div>
                <h3 style={{color: 'white', background: '#454e31'}}>Free shipping over 100$</h3>
                </div>
            </Carousel>
        </div>
    );
}

export default HomePage;