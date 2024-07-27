import React, {Component} from 'react'
import TransactionsList from './components/TransactionsList'
import AddTransaction from './components/AddTransaction'
import './App.css'

class App extends Component {
  state = {
    transactions: [
      {
        date: '2024-02-17',
        type: 'credit',
        amount: 5000,
        description: 'Initial Credit',
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
        description: 'Printing Sheets',
      },
      {
        date: '2024-02-20',
        type: 'debit',
        amount: 300,
        description: 'Misc Expense',
      },
    ],
  }

  handleTransactionAdded = newTransaction => {
    this.setState(prevState => ({
      transactions: [...prevState.transactions, newTransaction],
    }))
  }

  render() {
    const {transactions} = this.state

    return (
      <div className="conatiner">
        <h1 className="header">Transaction Management</h1>

        <TransactionsList transactions={transactions} />
      </div>
    )
  }
}

export default App
