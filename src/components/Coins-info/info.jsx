import React from 'react'
import './info.css'
import Coin from '../../assets/images/coin1.png'

const Info = () => {
  return (
    <div className="container-i">
      <div className="container-info">
        <div className="left-info">
          <div><img src={Coin} alt="" /></div>
          <div><img src={Coin} alt="" /></div>
        </div>

        <div className="right-info">
          <div className="text-info">
            <h2>Canadian Beaver</h2>
            <p>"Canadian beaver". Unique coin with the image of a beaver. Face value - 5 cents. Created under Elizabeth II.</p>

            <p>In the center of the obverse is a portrait of Queen Elizabeth II, the profile is directed to the right. The inscription on the left semicircle (English) ELIZABETH II, on the right semicircle D · G · REGINA (ELIZABETH II QUEEN by the Grace of GOD) with dots. Below is a mint mark.</p>

            <p>In the center of the coin reverse is a Canadian beaver on a rock sticking out of the water. At the top is a semicircle with the inscription "5 cents" between two maple leaves. At the bottom in two lines is the inscription CANADA (CANADA) and the year of minting.
            </p>
          </div>
          <table>
            <tr>
              <th>Issuing Country</th>
              <th>CANADA</th>
            </tr>
            <tr>
              <td>Composition</td>
              <td>Nickel</td>
            </tr>
            <tr>
              <td>Quality</td>
              <td>BU</td>
            </tr>
            <tr>
              <td>Denomination</td>
              <td>5 cents</td>
            </tr>
            <tr>
              <td>Year</td>
              <td>1965</td>
            </tr>
            <tr>
              <td>Weight</td>
              <td>4.54 g</td>
            </tr>
            <tr>
              <td>Price</td>
              <td>40$</td>
            </tr>
          </table>
        </div>
      </div>
    </div>

  )
}

export default Info