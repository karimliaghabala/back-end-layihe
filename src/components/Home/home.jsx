import React, { useState, useEffect,useRef } from 'react';
import Coins from '../Coins/coins'
import '../Search-result/search-result.css'
import './home.css';
import Svg1 from '../../assets/chevron-up.svg'
import Svg2 from '../../assets/chevron-down.svg'
import {Link} from 'react-router-dom'

const Home = () => {
    const [svg1, setSvg1] = useState(false)
    const [form, setForm] = useState(false)
    const [coin, setCoin] = useState(true)
    const [searchr, setSearchr] = useState(false)
    const [data, setData] = useState([])
    const [sData, setSData] = useState([])
    const inputRef = useRef(null);

    const onClickButton = (e) => {
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
    const onClickSvg2 = () => {
        setSvg1(false)
        setForm(false)
        setCoin(true)
        setSearchr(false)
    }
    const falseData = () => {
        setForm(false)
        setSvg1(false)
        setSearchr(false)
        setCoin(true)
    }
    useEffect(() => {
        fetch('https://excample-api.vercel.app/')
            .then(res => res.json())
            .then(apiData => setData(apiData))
    }, [])
    useEffect(() => {
        const url = 'https://excample-api.vercel.app/search'
        const query = encodeURIComponent(inputRef.value)
        fetch(`${url}?q=${query}`)
            .then(res => res.json())
            .then(apiSData => setSData(apiSData))
    }, [])
    console.log(sData)
    console.log(inputRef.value)
    return (
        <div className='container'>
            <form action="">
                <div className="header">
                    <h1 onClick={falseData}>HOMEPAGE</h1>
                    <p>Input field</p>
                    <div className="input-search">
                        <input type="text" ref={inputRef} />
                        <button onClick={onClickButton} >Search</button>
                    </div>
                    <div className="filter">
                        <p>Advanced filter</p>
                        <div className="svg" >
                            {svg1 ? <img onClick={onClickSvg2} src={Svg1} alt="" /> : <img onClick={onClickSvg} src={Svg2} alt="" />}
                        </div>
                    </div>
                </div>
                {form ? <div className="section-filter">
                    <div className="left-f">
                        <p>Issuing country</p>
                        <select>
                            {data?.map(item => (
                                <option>{item.country}</option>
                            ))}
                        </select>
                        <p>Composition</p>
                        <select>
                            {data?.map(item => (
                                <option>{item.composition}</option>
                            ))}
                        </select>

                        <p>Quality</p>
                        <select>
                            {data?.map(item => (
                                <option>{item.quality}</option>
                            ))}
                        </select>
                    </div>
                    <div className="right-f">
                        <div>
                            <p>Price</p>
                            <select>
                                {data?.map(item => (
                                    <option>{item.price}</option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <p>Year of issue</p>
                            <select>
                                {data?.map(item => (
                                    <option>{item.year}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div> : null}
            </form>
            {searchr ? <div>
                <h1>Coins</h1>
                <div className='container-c'>
                    <div className="left-rows">
                        <ul>
                            {data?.map((post) => (
                                <li key={post.id}>
                                    <div className="coin-row" >
                                        <div><img className="img-c" src={post.link1} alt="img" /></div>
                                        <div>
                                            <Link to="/info">{post.texth1}</Link>
                                            <p>{post.textshort}</p>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div> : null}
            {coin ? <Coins /> : null}
        </div>
    )
}

export default Home