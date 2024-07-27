import React, {Component} from 'react'
import AddTransaction from '../AddTransaction' // Import the AddTransaction component
import './index.css' // Import the CSS file

class TransactionsList extends Component {
  state = {
    transactions: [
      {
        date: '2024-02-17',
        type: 'credit',
        amount: 5000,
        description: 'Credited to Office Account',
      },
      {
        date: '2024-02-18',
        type: 'debit',
        amount: 500,
        description: 'Snacks Party',
      },
      {
        date: '2024-02-18',
        type: 'debit',
        amount: 285,
        description: 'Printing sheets for office documents',
      },
      {
        date: '2024-02-20',
        type: 'debit',
        amount: 300,
        description: 'Misc Expenses',
      },
    ],
    showAddTransaction: false,
  }

  handleAddTransactionClick = () => {
    this.setState({showAddTransaction: true})
  }

  handleTransactionAdded = newTransaction => {
    this.setState(prevState => ({
      transactions: [...prevState.transactions, newTransaction].sort(
        (a, b) => new Date(b.date) - new Date(a.date),
      ),
      showAddTransaction: false,
    }))
  }

  handleCancel = () => {
    this.setState({showAddTransaction: false})
  }

  calculateRunningBalance = () => {
    const {transactions} = this.state
    let balance = 0
    const transactionsWithBalance = transactions.map(transaction => {
      if (transaction.type === 'credit') {
        balance += transaction.amount
      } else if (transaction.type === 'debit') {
        balance -= transaction.amount
      }
      return {...transaction, runningBalance: balance}
    })
    return transactionsWithBalance
  }

  render() {
    const {showAddTransaction} = this.state
    const transactions = this.calculateRunningBalance()

    return (
      <div className="container">
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Description</th>
              <th>Debit</th>
              <th>Credit</th>

              <th>
                <button
                  className="add-transaction-button"
                  onClick={this.handleAddTransactionClick}
                >
                  + Add Transaction
                </button>

                {showAddTransaction && (
                  <AddTransaction
                    onTransactionAdded={this.handleTransactionAdded}
                    onCancel={this.handleCancel}
                  />
                )}
              </th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => (
              <tr key={transaction.date + transaction.amount}>
                <td>{transaction.date}</td>
                <td>{transaction.description}</td>
                <td>
                  {transaction.type === 'debit' ? transaction.amount : ''}
                </td>
                <td>
                  {transaction.type === 'credit' ? transaction.amount : ''}
                </td>
                <td>{transaction.runningBalance.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {showAddTransaction && (
          <div className="modal-overlay">
            <div className="modal-content">
              <button className="close-button" onClick={this.handleCancel}>
                &times;
              </button>
              <AddTransaction
                onTransactionAdded={this.handleTransactionAdded}
                onCancel={this.handleCancel}
              />
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default TransactionsList
