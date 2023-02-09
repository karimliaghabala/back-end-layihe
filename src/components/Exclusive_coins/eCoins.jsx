import React from 'react'
import '../Search-result/search-result.css'
import Coin from '../../assets/images/coin1.png'
import { Link } from 'react-router-dom'

const Ecoins = () => {
    return (
        <div>
            <h1>Exclusive coins</h1>
            <div className='container-c'>
                <div className="left-rows">
                    <div className="coin-row">
                        <div><img className="img-c" src={Coin} alt="" /></div>
                        <div>
                            <Link to="/info">Canadian Beaver</Link>
                            <p>"Canadian beaver". Unique coin with the image of a beaver. Face value - 5 cents. Created under Elizabeth II.</p>
                        </div>
                    </div>
                    <div className="coin-row">
                        <div><img className="img-c" src={Coin} alt="" /></div>
                        <div>
                            <Link to="/info">Canadian Beaver</Link>
                            <p>"Canadian beaver". Unique coin with the image of a beaver. Face value - 5 cents. Created under Elizabeth II.</p>
                        </div>
                    </div>
                    <div className="coin-row">
                        <div><img className="img-c" src={Coin} alt="" /></div>
                        <div>
                            <Link to="/info">Canadian Beaver</Link>
                            <p>"Canadian beaver". Unique coin with the image of a beaver. Face value - 5 cents. Created under Elizabeth II.</p>
                        </div>
                    </div>
                </div>

                <div className="right-rows">
                    <div className="coin-row">
                        <div><img className="img-c" src={Coin} alt="" /></div>
                        <div>
                            <Link to="/info">Canadian Beaver</Link>
                            <p>"Canadian beaver". Unique coin with the image of a beaver. Face value - 5 cents. Created under Elizabeth II.</p>
                        </div>
                    </div>
                    <div className="coin-row">
                        <div><img className="img-c" src={Coin} alt="" /></div>
                        <div>
                            <Link to="/info">Canadian Beaver</Link>
                            <p>"Canadian beaver". Unique coin with the image of a beaver. Face value - 5 cents. Created under Elizabeth II.</p>
                        </div>
                    </div>
                    <div className="coin-row">
                        <div><img className="img-c" src={Coin} alt="" /></div>
                        <div>
                            <Link to="/info">Canadian Beaver</Link>
                            <p>"Canadian beaver ". Unique coin with the image of a beaver. Face value - 5 cents. Created under Elizabeth II.</p>
                        </div>
                    </div>
                    <Link className='back' to='/'>Back</Link>
                </div>
            </div>
        </div>
    )
}

export default Ecoins