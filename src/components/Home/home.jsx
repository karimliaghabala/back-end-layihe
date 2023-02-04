import React, { useState} from 'react';
import Coins from '../Coins/coins'
import Search_result from '../Search-result/search-result'
import './home.css';
import Svg1 from '../../assets/chevron-up.svg'
import Svg2 from '../../assets/chevron-down.svg'

const Home = () => {

    const [svg1, setSvg1] = useState(false)
    const [form, setForm] = useState(false)
    const [coin,setCoin] = useState(true)
    const [searchr,setSearchr] = useState(false)

    const onClickButton = (e)=>{
        e.preventDefault()
        setForm(false)
        setSvg1(false)
        setSearchr(true)
        setCoin(false)
    }

    const onClickSvg = () => {
        setSvg1(true)
        setForm(true)
        setCoin(false)
        setSearchr(false)
    }
    const onClickSvg2 = ()=>{
        setSvg1(false)
        setForm(false)
        setCoin(true)
        setSearchr(false)
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
            {searchr?<Search_result /> :null}
            {coin? <Coins /> :null}
        </div>
    )
}

export default Home