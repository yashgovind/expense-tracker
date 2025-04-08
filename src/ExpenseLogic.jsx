import React, { useState } from 'react';

function Allexpenses() {
  const [expenses, setExpenses] = useState([]);
  const [amount, setAmount] = useState('');

  // Add expense
  function addExpense(expense) {
    if (!amount.trim()) return; // prevent empty input
    const newExpense = {
      id: Date.now(),
      amount: amount,
      ...expense
    };
    setExpenses([...expenses, newExpense]);
    setAmount('');
  }

  // Remove expense
  function removeExpense(id) {
    const filteredExpenses = expenses.filter(expense => expense.id !== id);
    setExpenses(filteredExpenses);
  }

  // Update expense
  function updateExpense(updatedExp) {
    if (!amount.trim()) return; // prevent empty update
    const updatedExpenses = expenses.map(expense => {
      if (expense.id === updatedExp.id) {
        return { ...expense, ...updatedExp };
      }
      return expense;
    });
    setExpenses(updatedExpenses);
    setAmount('');
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white flex flex-col items-center py-12 px-4 sm:px-8 md:px-16">
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Expense Tracker</h2>

      <div className="w-full max-w-3xl">
        {/* Input Form */}
        <form className="mb-8 w-full">
          <input
            type="number"
            placeholder="Enter expense amount"
            className="w-full px-5 py-4 rounded-xl bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </form>

        {/* Add Button */}
        <div className="flex justify-center mb-10">
          <button
            onClick={() => addExpense({ description: 'New Expense', amount: amount })}
            className="px-8 py-4 rounded-xl bg-green-600 hover:bg-green-700 active:scale-95 transition duration-200 text-white font-semibold shadow-lg"
          >
            + Add Expense
          </button>
        </div>

        {/* Expense List */}
        <div className="space-y-8">
          {expenses.length <= 0 ? (
            <p className="text-center text-gray-400">No expenses added yet.</p>
          ) : (
            expenses.map(expense => (
              <div
                key={expense.id}
                className="bg-gray-800 p-6 rounded-2xl shadow-lg flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-8"
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 w-full">
                  <input
                    type="number"
                    placeholder="Update amount"
                    className="flex-1 px-4 py-3 rounded-xl bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-200"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  />
                  <span className="text-lg sm:text-xl font-medium whitespace-nowrap">
                    {expense.description} - <strong>${expense.amount}</strong>
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                  <button
                    onClick={() =>
                      updateExpense({
                        id: expense.id,
                        description: 'Updated Expense',
                        amount: amount
                      })
                    }
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-yellow-500 hover:bg-yellow-600 active:scale-95 transition duration-200 text-white font-semibold shadow"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => removeExpense(expense.id)}
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-red-600 hover:bg-red-700 active:scale-95 transition duration-200 text-white font-semibold shadow"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Allexpenses;
