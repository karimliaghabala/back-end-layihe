import React from 'react'
import './search-result.css'
import Coin from '../../assets/images/coin1.png'

const Search_result = () => {
    return (
        <div className='container-c'>
            <div className="left-rows">
                <div className="coin-row">
                    <div><img className="img-c" src={Coin} alt="" /></div>
                    <div>
                        <h4>Canadian Beaver</h4>
                        <p>"Canadian beaver". Unique coin with the image of a beaver. Face value - 5 cents. Created under Elizabeth II.</p>
                    </div>
                </div>
                <div className="coin-row">
                    <div><img className="img-c" src={Coin} alt="" /></div>
                    <div>
                        <h4>Canadian Beaver</h4>
                        <p>"Canadian beaver". Unique coin with the image of a beaver. Face value - 5 cents. Created under Elizabeth II.</p>
                    </div>
                </div>
                <div className="coin-row">
                    <div><img className="img-c" src={Coin} alt="" /></div>
                    <div>
                        <h4>Canadian Beaver</h4>
                        <p>"Canadian beaver". Unique coin with the image of a beaver. Face value - 5 cents. Created under Elizabeth II.</p>
                    </div>
                </div>
            </div>

            <div className="right-rows">
                <div className="coin-row">
                    <div><img className="img-c" src={Coin} alt="" /></div>
                    <div>
                        <h4>Canadian Beaver</h4>
                        <p>"Canadian beaver". Unique coin with the image of a beaver. Face value - 5 cents. Created under Elizabeth II.</p>
                    </div>
                </div>
                <div className="coin-row">
                    <div><img className="img-c" src={Coin} alt="" /></div>
                    <div>
                        <h4>Canadian Beaver</h4>
                        <p>"Canadian beaver". Unique coin with the image of a beaver. Face value - 5 cents. Created under Elizabeth II.</p>
                    </div>
                </div>
                <div className="coin-row">
                    <div><img className="img-c" src={Coin} alt="" /></div>
                    <div>
                        <h4>Canadian Beaver</h4>
                        <p>"Canadian beaver". Unique coin with the image of a beaver. Face value - 5 cents. Created under Elizabeth II.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search_result