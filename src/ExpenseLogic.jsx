import React, { useState } from 'react';

function Allexpenses() {
  const [expenses, setExpenses] = useState([]);
  const [amount, setAmount] = useState('');

  // Function to add an expense to the list
  function addExpense(expense) {
    const newExpense = {
      id: Date.now(),
      amount: amount,
      ...expense
    };
    setExpenses([...expenses, newExpense]);
    setAmount(''); // clear the amount after setting it
  }

  // Function to remove an expense from the list
  function removeExpense(id) {
    const filteredExpenses = expenses.filter(expense => expense.id !== id);
    setExpenses(filteredExpenses);
  }

  // Function to update an expense in the list
  function updateExpense(updatedExp) {
    const updatedExpenses = expenses.map(expense => {
      if (expense.id === updatedExp.id) {
        // if id is the same then update it. push the updated expenses into the expense.
        return { ...expense, ...updatedExp };
      }
      return expense;
    });
    setExpenses(updatedExpenses);
    setAmount(" ");
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-700 text-white flex flex-col items-center py-12 px-[580px]">
      <h2 className="text-5xl font-bold mb-12">Expense Tracker</h2>
      <div className="w-full max-w-4xl px-8">
        {/* Input Form */}
        <form className="mb-10">
          <label htmlFor="input-form" className="block">
            <input
              type="text"
              placeholder="Enter your expense Amount"
              className="w-full px-5 py-4 rounded-full bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </label>
        </form>
        <div className="flex justify-center mb-10">
          <button
            onClick={() => addExpense({ description: 'New Expense : ', amount: amount })}
            className="px-8 py-4 rounded-full bg-green-600 hover:bg-green-700 transition duration-200 text-white font-semibold shadow-md"
          >
            Add Expense
          </button>
        </div>
        {/* Expense List */}
        <div className="space-y-8">
          {expenses.map(expense => (
            <div
              key={expense.id}
              className="bg-gray-800 p-8 rounded-2xl shadow-lg flex flex-col md:flex-row items-center justify-between gap-5"
            >
              <input
                type="text"
                placeholder="Update Expense Amount"
                className="w-full md:w-auto px-4 py-3 rounded-full bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-200 mb-4 md:mb-0"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
              <span className="text-xl font-medium">
                {expense.description} - ${expense.amount}
              </span>
              <div className="flex flex-col md:flex-row md:space-x-6 mt-4 md:mt-0">
                <button
                  onClick={() =>
                    updateExpense({
                      id: expense.id,
                      description: 'Update Expense is : ',
                      amount: amount
                    })
                  }
                  className="px-6 py-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition duration-200 text-white font-semibold shadow"
                >
                  Update
                </button>
                <button
                  onClick={() => removeExpense(expense.id)}
                  className="px-6 py-3 rounded-full bg-red-600 hover:bg-red-700 transition duration-200 text-white font-semibold shadow mt-3 md:mt-0"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Allexpenses;
