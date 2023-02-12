import React, { useState, useEffect } from 'react'
import './info.css'
import Coin from '../../assets/images/coin1.png'
import { Link } from 'react-router-dom'

const Info = () => {

  const [data, setData] = useState([])
  useEffect(() => {
    fetch('https://excample-api.vercel.app/')
      .then(res => res.json())
      .then(apiData => setData(apiData))
  }, [])
  return (
    <ul className="container-i">
      {data?.map(item=>(
              <li className="container-info">
              <div className="left-info">
                <div><img src={item.link1} alt="" /></div>
                <div><img src={item.link2} alt="" /></div>
              </div>
              <div className="right-info">
                <div className="text-info">
                  <h2>{item.texth1}</h2>
                  <p>{item.text}</p>
                </div>
                <table>
                  <tbody>
                    <tr>
                    <th>Issuing Country</th>
                    <th>{item.country}</th>
                  </tr>
                  <tr>
                    <td>Composition</td>
                    <td>{item.composition}</td>
                  </tr>
                  <tr>
                    <td>Quality</td>
                    <td>{item.quality}</td>
                  </tr>
                  <tr>
                    <td>Denomination</td>
                    <td>{item.denomination}</td>
                  </tr>
                  <tr>
                    <td>Year</td>
                    <td>{item.year}</td>
                  </tr>
                  <tr>
                    <td>Weight</td>
                    <td>{item.weight}</td>
                  </tr>
                  <tr>
                    <td>Price</td>
                    <td>{item.price}</td>
                  </tr>
                  </tbody>
                </table>
                <Link to="/">Back</Link>
              </div>
            </li>
      ))}

    </ul>

  )
}

export default Info