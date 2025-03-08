// src/Expenses.js
import React, { useState, useEffect } from 'react';

const Expenses = () => {
  const [amount, setAmount]     = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate]         = useState('');
  const [expenses, setExpenses] = useState([]);
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));

  const fetchExpenses = async () => {
    try {
      const response = await fetch(`http://localhost:5001/api/expenses/${currentUser._id}`);
      if (response.ok) {
        const data = await response.json();
        setExpenses(data);
      } else {
        alert('Error fetching expenses.');
      }
    } catch (error) {
      console.error('Error fetching expenses:', error);
    }
  };

  useEffect(() => {
    if (currentUser) {
      fetchExpenses();
    }
  }, [currentUser]);

  const handleAddExpense = async (e) => {
    e.preventDefault();
    // Pattern-based validation
    if (isNaN(amount) || Number(amount) <= 0) {
      alert('Amount must be a positive number.');
      return;
    }
    if (!/^[A-Za-z\s]+$/.test(category)) {
      alert('Category must contain only letters.');
      return;
    }
    try {
      const response = await fetch('http://localhost:5001/api/expenses', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: currentUser._id,
          amount: parseFloat(amount),
          category,
          date: date || new Date().toISOString().split('T')[0]
        })
      });
      if (response.ok) {
        await fetchExpenses();
        setAmount('');
        setCategory('');
        setDate('');
      } else {
        alert('Error adding expense.');
      }
    } catch (error) {
      console.error('Error adding expense:', error);
    }
  };

  // Calculate today’s total expenses and top 3 spending categories
  const today = new Date().toISOString().split('T')[0];
  const todaysExpenses = expenses.filter(exp => exp.date.slice(0, 10) === today);
  const todaysTotal = todaysExpenses.reduce((sum, exp) => sum + exp.amount, 0);

  useEffect(() => {
    if (todaysTotal > 100) {
      alert('Alert: Your daily expense threshold has been exceeded!');
    }
  }, [todaysTotal]);

  const categoryTotals = {};
  expenses.forEach(exp => {
    categoryTotals[exp.category] = (categoryTotals[exp.category] || 0) + exp.amount;
  });
  const topCategories = Object.entries(categoryTotals)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3);

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Expenses</h2>
      <form onSubmit={handleAddExpense}>
        <div>
          <label>
            Amount:&nbsp;
            <input type="text" value={amount} onChange={(e) => setAmount(e.target.value)} required />
          </label>
        </div>
        <div>
          <label>
            Category:&nbsp;
            <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} required />
          </label>
        </div>
        <div>
          <label>
            Date:&nbsp;
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
          </label>
        </div>
        <button type="submit">Add Expense</button>
      </form>

      <h3>Your Expenses</h3>
      <ul>
        {expenses.map(exp => (
          <li key={exp._id}>
            {exp.date.slice(0, 10)}: {exp.category} - ${exp.amount.toFixed(2)}
          </li>
        ))}
      </ul>

      <h3>Top 3 Spending Categories</h3>
      <ul>
        {topCategories.map(([cat, total]) => (
          <li key={cat}>{cat}: ${total.toFixed(2)}</li>
        ))}
      </ul>
    </div>
  );
};

export default Expenses;
