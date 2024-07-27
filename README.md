# Transaction Management System

## Overview

The Transaction Management System is a React-based application for managing financial transactions. It allows users to add new transactions, view a list of existing transactions, and calculate running balances. The system features a clean and user-friendly interface for recording and tracking both debit and credit transactions.

## Features

- **Add Transaction**: A form to add new transactions including date, type (credit or debit), amount, and description.
- **Transaction List**: Displays a table of transactions with the running balance updated dynamically.
- **Running Balance**: Calculates and displays the running balance based on the transactions entered.
- **Modal Interface**: Provides a modal for adding transactions to enhance user experience.

## Components

### AddTransaction

A form component for adding a new transaction. It includes fields for:

- **Date**: The date of the transaction.
- **Type**: The type of transaction (credit or debit).
- **Amount**: The amount of the transaction.
- **Description**: A brief description of the transaction.

### TransactionsList

Displays a list of transactions in a table format. Features include:

- **Transaction Table**: Shows date, description, debit, credit, and running balance.
- **Add Transaction Button**: Opens the `AddTransaction` component in a modal for adding new transactions.
- **Running Balance Calculation**: Calculates and displays the running balance based on the transactions.

### Installation

1. Navigate into the project directory:

   ```bash
   cd transaction-management-system
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

   The application will be running on `http://localhost:3000`.

## Usage

- **Add a Transaction**: Click the "+ Add Transaction" button to open the form, fill out the details, and submit.
- **View Transactions**: The transaction list will update with the new transaction, and the running balance will be recalculated.
- **Cancel Adding Transaction**: Click the "Cancel" button to close the form without adding a transaction.

## File Structure

- `src/components/AddTransaction.js`: Component for adding transactions.
- `src/components/TransactionsList.js`: Component for displaying transactions and managing the list.
- `src/index.css`: CSS file for styling the components.
- `src/App.js`: Main application file that includes the `TransactionsList` component.
