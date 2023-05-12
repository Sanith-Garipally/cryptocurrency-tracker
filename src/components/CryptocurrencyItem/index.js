import './index.css'

const CryptocurrencyItem = props => {
  const {item} = props
  const {currencyName, usdValue, euroValue, currencyLogo} = item

  return (
    <li className="list-item">
      <div className="name-crypto-container">
        <img className="cl-img" alt={currencyName} src={currencyLogo} />
        <p>{currencyName}</p>
      </div>
      <div className="usd-euro-container">
        <p>{usdValue}</p>
        <p>{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
