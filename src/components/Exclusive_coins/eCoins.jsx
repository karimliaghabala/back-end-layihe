import React, { useEffect, useState } from 'react'
import '../Search-result/search-result.css'
import { Link } from 'react-router-dom'

const Bcoins = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://excample-api.vercel.app/')
            .then(res => res.json())
            .then(apiData => setData(apiData))
    }, [])
    console.log(data[0])
    return (
        <div>
            <h1>Exclusive coins</h1>
            <div className='container-c'>
                <div className="left-rows">
                    <ul>
                        {data?.map((post) => (
                            <li key={post.id}>{post.typecoins=="Exclusive coins"?
                                <div className="coin-row" >
                                    <div><img className="img-c" src={post.link1} alt="img" /></div>
                                    <div>
                                        <Link to="/info">{post.texth1}</Link>
                                        <p>{post.textshort}</p>
                                    </div>
                                </div>:null}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <Link className='back' to='/'>Back</Link>
        </div>

    )
}

export default Bcoins