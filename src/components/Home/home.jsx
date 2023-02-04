import React, { useState} from 'react';
import './home.css';
import { Link } from 'react-router-dom';
import Coin1 from '../../assets/images/coin1.png'
import Coin2 from '../../assets/images/coin2.png'
import Coin3 from '../../assets/images/coin3.png'
import Svg1 from '../../assets/chevron-up.svg'
import Svg2 from '../../assets/chevron-down.svg'
import Svg3 from '../../assets/chevron-right.svg'

const Home = () => {

    const [svg1, setSvg1] = useState(false)
    const [form, setForm] = useState(false)
    const [coin,setCoin] = useState(true)

    const onClickButton = (e)=>{
        e.preventDefault()
    }

    const onClickSvg = () => {
        setSvg1(true)
        setForm(true)
        setCoin(false)
    }
    const onClickSvg2 = ()=>{
        setSvg1(false)
        setForm(false)
        setCoin(true)
    }
    return (
        <div className='container'>
            <form action="">
                <div className="header">
                    <h1>HOMEPAGE</h1>
                    <p>Input field</p>
                    <div className="input-search">
                        <input type="text" />
                        <button onClick={onClickButton}>Search</button>
                    </div>
                    <div className="filter">
                        <p>Advanced filter</p>
                        <div className="svg" >
                            {svg1 ? <img onClick={onClickSvg2} src={Svg1} alt="" /> : <img onClick={onClickSvg}  src={Svg2} alt="" />}
                        </div>
                    </div>
                </div>
                {form?<div className="section-filter">
                    <div className="left-f">
                        <p>Issuing country</p>
                        <select>
                            <option>Canada</option>
                            <option>ABŞ</option>
                            <option>Almaniya</option>
                        </select>

                        <p>Metal</p>
                        <select>
                            <option>Gold</option>
                            <option>Silver</option>
                            <option>Platin</option>
                        </select>

                        <p>Quality of the coin</p>
                        <select>
                            <option>Proof</option>
                        </select>
                    </div>
                    <div className="right-f">
                        <div>
                            <p>Price</p>
                            <label>from
                                <input type="text" />
                            </label>
                            <label>to
                                <input type="text" />
                            </label>
                        </div>
                        <div>
                            <p>Year of issue</p>
                            <label>from
                                <input type="text" />
                            </label>
                            <label>to
                                <input type="text" />
                            </label>
                        </div>
                    </div>
                </div>:null}
            </form>
            {coin?<div className="section-coins">
                <div className="bullion-coins">
                    <p className='coins-name'>Bullion coins</p>
                    <div className="link-icon">
                        <Link className='links' to="/">Show all</Link>
                        <img src={Svg3} alt="" />
                    </div>
                    <img className='img-coins' src={Coin1} alt="" />
                </div>
                <div className="exclusive-coins">
                    <p className='coins-name'>Exclusive coins</p>
                    <div className="link-icon">
                        <Link className='links' to="/">Show all</Link>
                        <img src={Svg3} alt="" />
                    </div>
                    <img className='img-coins' src={Coin2} alt="" />
                </div>

                <div className="commemorative-coins">
                    <p className='coins-name'>Commemorative coins</p>
                    <div className="link-icon">
                        <Link className='links' to="/">Show all</Link>
                        <img src={Svg3} alt="" />
                    </div>
                    <img className='img-coins' src={Coin3} alt="" />
                </div>
            </div>:null}
        </div>
    )
}

export default Home