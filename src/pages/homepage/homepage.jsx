import React from 'react';

import './homepage.styles.scss';

const HomePage = () => (
    
    <div className='homepage'>
        <div className='menu'>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>Caravanas</h1>
                    <span className='subtitle'>Ver mas</span>                
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>Collares</h1>
                    <span className='subtitle'>Ver mas</span>                
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>Bolsos</h1>
                    <span className='subtitle'>Ver mas</span>                
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>Pulseras</h1>
                    <span className='subtitle'>Ver mas</span>                
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>Monederos</h1>
                    <span className='subtitle'>Ver mas</span>                
                </div>
            </div>       
        </div>
    
    </div>
);

export default HomePage;