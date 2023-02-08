import React from 'react'
import './coins.css'
import Coin1 from '../../assets/images/coin1.png'
import Coin2 from '../../assets/images/coin2.png'
import Coin3 from '../../assets/images/coin3.png'
import Svg3 from '../../assets/chevron-right.svg'
import { Link } from 'react-router-dom';

const Coins = () => {
  return (
    <div className="section-coins">
                <div className="bullion-coins">
                    <p className='coins-name'>Bullion coins</p>
                    <div className="link-icon">
                        <Link className='links' to="/bcoins">Show all</Link>
                        <img src={Svg3} alt="" />
                    </div>
                    <img className='img-coins' src={Coin1} alt="" />
                </div>
                <div className="exclusive-coins">
                    <p className='coins-name'>Exclusive coins</p>
                    <div className="link-icon">
                        <Link className='links' to="/ecoins">Show all</Link>
                        <img src={Svg3} alt="" />
                    </div>
                    <img className='img-coins' src={Coin2} alt="" />
                </div>

                <div className="commemorative-coins">
                    <p className='coins-name'>Commemorative coins</p>
                    <div className="link-icon">
                        <Link className='links' to="/ccoins">Show all</Link>
                        <img src={Svg3} alt="" />
                    </div>
                    <img className='img-coins' src={Coin3} alt="" />
                </div>
            </div>
  )
}

export default Coins