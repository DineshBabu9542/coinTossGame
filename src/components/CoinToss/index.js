// Write your code here

import {Component} from 'react'
import './index.css'

const headCoinImg = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'

const tailCoinImg = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {changeCoin: headCoinImg, headsCount: 0, tailsCount: 0}

  onChangeCoin = () => {
    const {headsCount, tailsCount} = this.state
    const toss = Math.floor(Math.random() * 2)
    let tossImg = ''

    let latestHeadsCount = headsCount
    let latestTailsCount = tailsCount

    if (toss === 0) {
      tossImg = headCoinImg
      latestHeadsCount += 1
    } else {
      tossImg = tailCoinImg
      latestTailsCount += 1
    }

    this.setState({
      changeCoin: tossImg,
      headsCount: latestHeadsCount,
      tailsCount: latestTailsCount,
    })
  }

  render() {
    const {changeCoin, headsCount, tailsCount} = this.state

    const totalCount = headsCount + tailsCount
    return (
      <div className="bg-container">
        <div className="white-bg-container">
          <h1 className="toss-heading">Coin Toss Game</h1>
          <p className="heads-description">Heads (or) Tails</p>
          <div className="img-toss-container">
            <img className="img-toss" src={changeCoin} alt="toss result" />
          </div>
          <div className="btn-con">
            <button
              type="button"
              className="button"
              onClick={this.onChangeCoin}
            >
              Toss Coin
            </button>
          </div>
          <div className="total-container">
            <p>Total: {totalCount}</p>
            <p>Heads: {headsCount}</p>
            <p>Tails: {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
