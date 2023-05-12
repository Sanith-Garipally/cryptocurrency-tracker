import {Component} from 'react'
import Loader from 'react-loader-spinner'
import './index.css'
import CryptocurrencyItem from '../CryptocurrencyItem'

class CryptocurrenciesList extends Component {
  state = {
    ccList: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getCcList()
  }

  getCcList = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const updatedData = data.map(object => ({
      id: object.id,
      currencyName: object.currency_name,
      usdValue: object.usd_value,
      euroValue: object.euro_value,
      currencyLogo: object.currency_logo,
    }))
    this.setState({
      ccList: updatedData,
      isLoading: false,
    })
  }

  render() {
    const {ccList, isLoading} = this.state
    return (
      <>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <div className="bg-container-cl">
            <h1 className="main-heading">Cryptocurrency Tracker</h1>
            <div className="cc-img-container">
              <img
                className="cc-img"
                alt="cryptocurrency"
                src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
              />
            </div>
            <ul className="ul-list-container">
              <li className="header-list-item">
                <p>Coin Type</p>
                <div className="usd-euro-container">
                  <p>USD</p>
                  <p>EURO</p>
                </div>
              </li>
              {ccList.map(object => (
                <CryptocurrencyItem key={object.id} item={object} />
              ))}
            </ul>
          </div>
        )}
      </>
    )
  }
}

export default CryptocurrenciesList
