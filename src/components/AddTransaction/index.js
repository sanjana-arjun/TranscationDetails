import React, {Component} from 'react'
import './index.css' // Import the CSS file

class AddTransaction extends Component {
  state = {
    date: '',
    transactionType: 'credit',
    amount: '',
    description: '',
    error: null,
  }

  handleSubmit = e => {
    e.preventDefault()
    const {date, transactionType, amount, description} = this.state

    // Validation
    if (!date || !amount || isNaN(amount) || amount <= 0) {
      this.setState({error: 'Please enter a valid date and amount'})
      return
    }

    // Create new transaction
    const newTransaction = {
      date,
      type: transactionType,
      amount: parseFloat(amount),
      description,
    }

    // Pass new transaction to parent component
    this.props.onTransactionAdded(newTransaction)

    // Clear form
    this.resetForm()
  }

  handleInputChange = event => {
    const {name, value} = event.target
    this.setState({[name]: value})
  }

  handleCancel = () => {
    this.resetForm()
    this.props.onCancel()
  }

  resetForm = () => {
    this.setState({
      date: '',
      transactionType: 'credit',
      amount: '',
      description: '',
      error: null,
    })
  }

  render() {
    const {date, transactionType, amount, description, error} = this.state

    return (
      <div className="form-container">
        <p>New Transcation</p>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>
              Date:
              <input
                type="date"
                name="date"
                value={date}
                onChange={this.handleInputChange}
                required
              />
            </label>
          </div>
          <div>
            <label>
              Type:
              <select
                name="transactionType"
                value={transactionType}
                onChange={this.handleInputChange}
              >
                <option value="credit">Credit</option>
                <option value="debit">Debit</option>
              </select>
            </label>
          </div>
          <div>
            <label>
              Amount:
              <input
                type="number"
                name="amount"
                value={amount}
                onChange={this.handleInputChange}
                min="0"
                required
              />
            </label>
          </div>
          <div>
            <label>
              Description:
              <input
                type="text"
                name="description"
                value={description}
                onChange={this.handleInputChange}
              />
            </label>
          </div>
          <button type="submit">Add Transaction</button>
          <button type="button" className="cancel" onClick={this.handleCancel}>
            Cancel
          </button>
          {error && <p className="error-message">{error}</p>}
        </form>
      </div>
    )
  }
}

export default AddTransaction
