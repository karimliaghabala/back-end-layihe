import React, { useEffect, useState } from 'react'
import '../Search-result/search-result.css'
import Coin from '../../assets/images/coin1.png'
import {Link} from 'react-router-dom'

const Bcoins = () => {
    const [data,setData] = useState([])
    useEffect(()=>{
        fetch('https://excample-api.vercel.app/')
        .then(res=>res.json())
        .then(apiData=>setData(apiData))
    },[])
    console.log(data[0])
    return (
        <div className='container-c'>
            <div className="left-rows">
                <div className="coin-row">
                    <div><img className="img-c" src={Coin} alt="" /></div>
                    <div>
                        <Link to="/info">Canadian beaver</Link>
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
    )
}

export default Bcoins