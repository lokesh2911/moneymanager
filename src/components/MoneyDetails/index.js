// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {balanceAmount, incomeAmount, expensesAmount} = props
  return (
    <div className="money-detail-container">
      <div className="balance-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="detail-img"
        />
        <div>
          <p className="detail-text">Your Balance</p>
          <p className="detail-money" data-testid="balanceAmount">
            Rs {balanceAmount}
          </p>
        </div>
      </div>
      <div className="income-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="detail-img"
        />
        <div>
          <p className="detail-text">Your Income</p>
          <p className="detail-money" data-testid="incomeAmount">
            Rs {incomeAmount}
          </p>
        </div>
      </div>
      <div className="expenses-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="detail-img"
        />
        <div>
          <p className="detail-text">Your Expenses</p>
          <p className="detail-money">{expensesAmount}</p>
        </div>
      </div>
    </div>
  )
}
export default MoneyDetails

