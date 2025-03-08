// // // // // // // // src/Expenses.js
// // // // // // // import React, { useState, useEffect } from 'react';

// // // // // // // const Expenses = () => {
// // // // // // //   const [amount, setAmount]     = useState('');
// // // // // // //   const [category, setCategory] = useState('');
// // // // // // //   const [date, setDate]         = useState('');
// // // // // // //   const [expenses, setExpenses] = useState([]);
// // // // // // //   const currentUser = JSON.parse(localStorage.getItem('currentUser'));

// // // // // // //   const fetchExpenses = async () => {
// // // // // // //     try {
// // // // // // //       const response = await fetch(`http://localhost:5001/api/expenses/${currentUser._id}`);
// // // // // // //       if (response.ok) {
// // // // // // //         const data = await response.json();
// // // // // // //         setExpenses(data);
// // // // // // //       } else {
// // // // // // //         alert('Error fetching expenses.');
// // // // // // //       }
// // // // // // //     } catch (error) {
// // // // // // //       console.error('Error fetching expenses:', error);
// // // // // // //     }
// // // // // // //   };

// // // // // // //   useEffect(() => {
// // // // // // //     if (currentUser) {
// // // // // // //       fetchExpenses();
// // // // // // //     }
// // // // // // //   }, [currentUser]);

// // // // // // //   const handleAddExpense = async (e) => {
// // // // // // //     e.preventDefault();
// // // // // // //     // Pattern-based validation
// // // // // // //     if (isNaN(amount) || Number(amount) <= 0) {
// // // // // // //       alert('Amount must be a positive number.');
// // // // // // //       return;
// // // // // // //     }
// // // // // // //     if (!/^[A-Za-z\s]+$/.test(category)) {
// // // // // // //       alert('Category must contain only letters.');
// // // // // // //       return;
// // // // // // //     }
// // // // // // //     try {
// // // // // // //       const response = await fetch('http://localhost:5001/api/expenses', {
// // // // // // //         method: 'POST',
// // // // // // //         headers: { 'Content-Type': 'application/json' },
// // // // // // //         body: JSON.stringify({
// // // // // // //           userId: currentUser._id,
// // // // // // //           amount: parseFloat(amount),
// // // // // // //           category,
// // // // // // //           date: date || new Date().toISOString().split('T')[0]
// // // // // // //         })
// // // // // // //       });
// // // // // // //       if (response.ok) {
// // // // // // //         await fetchExpenses();
// // // // // // //         setAmount('');
// // // // // // //         setCategory('');
// // // // // // //         setDate('');
// // // // // // //       } else {
// // // // // // //         alert('Error adding expense.');
// // // // // // //       }
// // // // // // //     } catch (error) {
// // // // // // //       console.error('Error adding expense:', error);
// // // // // // //     }
// // // // // // //   };

// // // // // // //   // Calculate today’s total expenses and top 3 spending categories
// // // // // // //   const today = new Date().toISOString().split('T')[0];
// // // // // // //   const todaysExpenses = expenses.filter(exp => exp.date.slice(0, 10) === today);
// // // // // // //   const todaysTotal = todaysExpenses.reduce((sum, exp) => sum + exp.amount, 0);

// // // // // // //   useEffect(() => {
// // // // // // //     if (todaysTotal > 100) {
// // // // // // //       alert('Alert: Your daily expense threshold has been exceeded!');
// // // // // // //     }
// // // // // // //   }, [todaysTotal]);

// // // // // // //   const categoryTotals = {};
// // // // // // //   expenses.forEach(exp => {
// // // // // // //     categoryTotals[exp.category] = (categoryTotals[exp.category] || 0) + exp.amount;
// // // // // // //   });
// // // // // // //   const topCategories = Object.entries(categoryTotals)
// // // // // // //     .sort((a, b) => b[1] - a[1])
// // // // // // //     .slice(0, 3);

// // // // // // //   return (
// // // // // // //     <div style={{ padding: '1rem' }}>
// // // // // // //       <h2>Expenses</h2>
// // // // // // //       <form onSubmit={handleAddExpense}>
// // // // // // //         <div>
// // // // // // //           <label>
// // // // // // //             Amount:&nbsp;
// // // // // // //             <input type="text" value={amount} onChange={(e) => setAmount(e.target.value)} required />
// // // // // // //           </label>
// // // // // // //         </div>
// // // // // // //         <div>
// // // // // // //           <label>
// // // // // // //             Category:&nbsp;
// // // // // // //             <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} required />
// // // // // // //           </label>
// // // // // // //         </div>
// // // // // // //         <div>
// // // // // // //           <label>
// // // // // // //             Date:&nbsp;
// // // // // // //             <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
// // // // // // //           </label>
// // // // // // //         </div>
// // // // // // //         <button type="submit">Add Expense</button>
// // // // // // //       </form>

// // // // // // //       <h3>Your Expenses</h3>
// // // // // // //       <ul>
// // // // // // //         {expenses.map(exp => (
// // // // // // //           <li key={exp._id}>
// // // // // // //             {exp.date.slice(0, 10)}: {exp.category} - ${exp.amount.toFixed(2)}
// // // // // // //           </li>
// // // // // // //         ))}
// // // // // // //       </ul>

// // // // // // //       <h3>Top 3 Spending Categories</h3>
// // // // // // //       <ul>
// // // // // // //         {topCategories.map(([cat, total]) => (
// // // // // // //           <li key={cat}>{cat}: ${total.toFixed(2)}</li>
// // // // // // //         ))}
// // // // // // //       </ul>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default Expenses;





// // // // // // import React, { useState, useEffect } from 'react';

// // // // // // const Expenses = () => {
// // // // // //   const [amount, setAmount] = useState('');
// // // // // //   const [category, setCategory] = useState('');
// // // // // //   const [date, setDate] = useState('');
// // // // // //   const [expenses, setExpenses] = useState([]);
// // // // // //   const currentUser = JSON.parse(localStorage.getItem('currentUser'));

// // // // // //   const fetchExpenses = async () => {
// // // // // //     try {
// // // // // //       const response = await fetch(`http://localhost:5001/api/expenses/${currentUser._id}`);
// // // // // //       if (response.ok) {
// // // // // //         const data = await response.json();
// // // // // //         setExpenses(data);
// // // // // //       } else {
// // // // // //         alert('Error fetching expenses.');
// // // // // //       }
// // // // // //     } catch (error) {
// // // // // //       console.error('Error fetching expenses:', error);
// // // // // //     }
// // // // // //   };

// // // // // //   useEffect(() => {
// // // // // //     if (currentUser) {
// // // // // //       fetchExpenses();
// // // // // //     }
// // // // // //   }, [currentUser]);

// // // // // //   const handleAddExpense = async (e) => {
// // // // // //     e.preventDefault();
// // // // // //     if (isNaN(amount) || Number(amount) <= 0) {
// // // // // //       alert('Amount must be a positive number.');
// // // // // //       return;
// // // // // //     }
// // // // // //     if (!/^[A-Za-z\s]+$/.test(category)) {
// // // // // //       alert('Category must contain only letters.');
// // // // // //       return;
// // // // // //     }
// // // // // //     try {
// // // // // //       const response = await fetch('http://localhost:5001/api/expenses', {
// // // // // //         method: 'POST',
// // // // // //         headers: { 'Content-Type': 'application/json' },
// // // // // //         body: JSON.stringify({
// // // // // //           userId: currentUser._id,
// // // // // //           amount: parseFloat(amount),
// // // // // //           category,
// // // // // //           date: date || new Date().toISOString().split('T')[0],
// // // // // //         }),
// // // // // //       });
// // // // // //       if (response.ok) {
// // // // // //         await fetchExpenses();
// // // // // //         setAmount('');
// // // // // //         setCategory('');
// // // // // //         setDate('');
// // // // // //       } else {
// // // // // //         alert('Error adding expense.');
// // // // // //       }
// // // // // //     } catch (error) {
// // // // // //       console.error('Error adding expense:', error);
// // // // // //     }
// // // // // //   };

// // // // // //   const handleGetRecommendations = async () => {
// // // // // //     try {
// // // // // //       const response = await fetch("http://localhost:5002/api/ai-recommendations", {
// // // // // //         method: "POST",
// // // // // //         headers: { "Content-Type": "application/json" },
// // // // // //         body: JSON.stringify({ user: currentUser }),
// // // // // //       });
// // // // // //       if (response.ok) {
// // // // // //         const data = await response.json();
// // // // // //         alert(`Recommendations: ${data.text}`);
// // // // // //       } else {
// // // // // //         alert("Error fetching recommendations.");
// // // // // //       }
// // // // // //     } catch (error) {
// // // // // //       console.error("Error fetching recommendations:", error);
// // // // // //     }
// // // // // //   };

// // // // // //   const today = new Date().toISOString().split('T')[0];
// // // // // //   const todaysExpenses = expenses.filter((exp) => exp.date.slice(0, 10) === today);
// // // // // //   const todaysTotal = todaysExpenses.reduce((sum, exp) => sum + exp.amount, 0);

// // // // // //   useEffect(() => {
// // // // // //     if (todaysTotal > 100) {
// // // // // //       alert('Alert: Your daily expense threshold has been exceeded!');
// // // // // //     }
// // // // // //   }, [todaysTotal]);

// // // // // //   const categoryTotals = {};
// // // // // //   expenses.forEach((exp) => {
// // // // // //     categoryTotals[exp.category] = (categoryTotals[exp.category] || 0) + exp.amount;
// // // // // //   });
// // // // // //   const topCategories = Object.entries(categoryTotals)
// // // // // //     .sort((a, b) => b[1] - a[1])
// // // // // //     .slice(0, 3);

// // // // // //   return (
// // // // // //     <div style={{ padding: '1rem' }}>
// // // // // //       <h2>Expenses</h2>
// // // // // //       <form onSubmit={handleAddExpense}>
// // // // // //         <div>
// // // // // //           <label>
// // // // // //             Amount:&nbsp;
// // // // // //             <input type="text" value={amount} onChange={(e) => setAmount(e.target.value)} required />
// // // // // //           </label>
// // // // // //         </div>
// // // // // //         <div>
// // // // // //           <label>
// // // // // //             Category:&nbsp;
// // // // // //             <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} required />
// // // // // //           </label>
// // // // // //         </div>
// // // // // //         <div>
// // // // // //           <label>
// // // // // //             Date:&nbsp;
// // // // // //             <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
// // // // // //           </label>
// // // // // //         </div>
// // // // // //         <button type="submit">Add Expense</button>
// // // // // //         <button type="button" onClick={handleGetRecommendations}>
// // // // // //           Get Recommendations
// // // // // //         </button>
// // // // // //       </form>

// // // // // //       <h3>Your Expenses</h3>
// // // // // //       <ul>
// // // // // //         {expenses.map((exp) => (
// // // // // //           <li key={exp._id}>
// // // // // //             {exp.date.slice(0, 10)}: {exp.category} - ${exp.amount.toFixed(2)}
// // // // // //           </li>
// // // // // //         ))}
// // // // // //       </ul>

// // // // // //       <h3>Top 3 Spending Categories</h3>
// // // // // //       <ul>
// // // // // //         {topCategories.map(([cat, total]) => (
// // // // // //           <li key={cat}>
// // // // // //             {cat}: ${total.toFixed(2)}
// // // // // //           </li>
// // // // // //         ))}
// // // // // //       </ul>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default Expenses;





// // // // // import React, { useState, useEffect } from 'react';

// // // // // const Expenses = () => {
// // // // //   const [amount, setAmount] = useState('');
// // // // //   const [category, setCategory] = useState('');
// // // // //   const [date, setDate] = useState('');
// // // // //   const [expenses, setExpenses] = useState([]);
// // // // //   const currentUser = JSON.parse(localStorage.getItem('currentUser'));

// // // // //   const fetchExpenses = async () => {
// // // // //     try {
// // // // //       const response = await fetch(`http://localhost:5001/api/expenses/${currentUser._id}`);
// // // // //       if (response.ok) {
// // // // //         const data = await response.json();
// // // // //         setExpenses(data);
// // // // //       } else {
// // // // //         alert('Error fetching expenses.');
// // // // //       }
// // // // //     } catch (error) {
// // // // //       console.error('Error fetching expenses:', error);
// // // // //     }
// // // // //   };

// // // // //   useEffect(() => {
// // // // //     if (currentUser) {
// // // // //       fetchExpenses();
// // // // //     }
// // // // //   }, [currentUser]);

// // // // //   const handleAddExpense = async (e) => {
// // // // //     e.preventDefault();
// // // // //     if (isNaN(amount) || Number(amount) <= 0) {
// // // // //       alert('Amount must be a positive number.');
// // // // //       return;
// // // // //     }
// // // // //     if (!/^[A-Za-z\s]+$/.test(category)) {
// // // // //       alert('Category must contain only letters.');
// // // // //       return;
// // // // //     }
// // // // //     try {
// // // // //       const response = await fetch('http://localhost:5001/api/expenses', {
// // // // //         method: 'POST',
// // // // //         headers: { 'Content-Type': 'application/json' },
// // // // //         body: JSON.stringify({
// // // // //           userId: currentUser._id,
// // // // //           amount: parseFloat(amount),
// // // // //           category,
// // // // //           date: date || new Date().toISOString().split('T')[0],
// // // // //         }),
// // // // //       });
// // // // //       if (response.ok) {
// // // // //         await fetchExpenses();
// // // // //         setAmount('');
// // // // //         setCategory('');
// // // // //         setDate('');
// // // // //       } else {
// // // // //         alert('Error adding expense.');
// // // // //       }
// // // // //     } catch (error) {
// // // // //       console.error('Error adding expense:', error);
// // // // //     }
// // // // //   };

// // // // //   const handleGetRecommendations = async () => {
// // // // //     try {
// // // // //       // Send user name and expenses to the backend
// // // // //       const userExpensesData = {
// // // // //         name: currentUser.name,
// // // // //         expenses: expenses.map((exp) => ({
// // // // //           date: exp.date,
// // // // //           category: exp.category,
// // // // //           amount: exp.amount,
// // // // //         })),
// // // // //       };

// // // // //       const response = await fetch("http://localhost:5002/api/ai-recommendations", {
// // // // //         method: "POST",
// // // // //         headers: { "Content-Type": "application/json" },
// // // // //         body: JSON.stringify(userExpensesData),
// // // // //       });
// // // // //       if (response.ok) {
// // // // //         const data = await response.json();
// // // // //         alert(`Recommendations: ${data.text}`);
// // // // //       } else {
// // // // //         alert("Error fetching recommendations.");
// // // // //       }
// // // // //     } catch (error) {
// // // // //       console.error("Error fetching recommendations:", error);
// // // // //     }
// // // // //   };

// // // // //   const today = new Date().toISOString().split('T')[0];
// // // // //   const todaysExpenses = expenses.filter((exp) => exp.date.slice(0, 10) === today);
// // // // //   const todaysTotal = todaysExpenses.reduce((sum, exp) => sum + exp.amount, 0);

// // // // //   useEffect(() => {
// // // // //     if (todaysTotal > 100) {
// // // // //       alert('Alert: Your daily expense threshold has been exceeded!');
// // // // //     }
// // // // //   }, [todaysTotal]);

// // // // //   const categoryTotals = {};
// // // // //   expenses.forEach((exp) => {
// // // // //     categoryTotals[exp.category] = (categoryTotals[exp.category] || 0) + exp.amount;
// // // // //   });
// // // // //   const topCategories = Object.entries(categoryTotals)
// // // // //     .sort((a, b) => b[1] - a[1])
// // // // //     .slice(0, 3);

// // // // //   return (
// // // // //     <div style={{ padding: '1rem' }}>
// // // // //       <h2>Expenses</h2>
// // // // //       <form onSubmit={handleAddExpense}>
// // // // //         <div>
// // // // //           <label>
// // // // //             Amount:&nbsp;
// // // // //             <input type="text" value={amount} onChange={(e) => setAmount(e.target.value)} required />
// // // // //           </label>
// // // // //         </div>
// // // // //         <div>
// // // // //           <label>
// // // // //             Category:&nbsp;
// // // // //             <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} required />
// // // // //           </label>
// // // // //         </div>
// // // // //         <div>
// // // // //           <label>
// // // // //             Date:&nbsp;
// // // // //             <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
// // // // //           </label>
// // // // //         </div>
// // // // //         <button type="submit">Add Expense</button>
// // // // //         <button type="button" onClick={handleGetRecommendations}>
// // // // //           Get Recommendations
// // // // //         </button>
// // // // //       </form>

// // // // //       <h3>Your Expenses</h3>
// // // // //       <ul>
// // // // //         {expenses.map((exp) => (
// // // // //           <li key={exp._id}>
// // // // //             {exp.date.slice(0, 10)}: {exp.category} - ${exp.amount.toFixed(2)}
// // // // //           </li>
// // // // //         ))}
// // // // //       </ul>

// // // // //       <h3>Top 3 Spending Categories</h3>
// // // // //       <ul>
// // // // //         {topCategories.map(([cat, total]) => (
// // // // //           <li key={cat}>
// // // // //             {cat}: ${total.toFixed(2)}
// // // // //           </li>
// // // // //         ))}
// // // // //       </ul>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default Expenses;


// // // // import React, { useState, useEffect } from 'react';

// // // // const Expenses = () => {
// // // //   const [amount, setAmount] = useState('');
// // // //   const [category, setCategory] = useState('');
// // // //   const [date, setDate] = useState('');
// // // //   const [expenses, setExpenses] = useState([]);
// // // //   const currentUser = JSON.parse(localStorage.getItem('currentUser')); // Assuming this stores user session

// // // //   const fetchExpenses = async () => {
// // // //     try {
// // // //       const response = await fetch(`http://localhost:5001/api/expenses/${currentUser._id}`);
// // // //       if (response.ok) {
// // // //         const data = await response.json();
// // // //         setExpenses(data);
// // // //       } else {
// // // //         alert('Error fetching expenses.');
// // // //       }
// // // //     } catch (error) {
// // // //       console.error('Error fetching expenses:', error);
// // // //     }
// // // //   };

// // // //   useEffect(() => {
// // // //     if (currentUser) {
// // // //       fetchExpenses();
// // // //     }
// // // //   }, [currentUser]);

// // // //   const handleAddExpense = async (e) => {
// // // //     e.preventDefault();
// // // //     if (isNaN(amount) || Number(amount) <= 0) {
// // // //       alert('Amount must be a positive number.');
// // // //       return;
// // // //     }
// // // //     if (!/^[A-Za-z\s]+$/.test(category)) {
// // // //       alert('Category must contain only letters.');
// // // //       return;
// // // //     }
// // // //     try {
// // // //       const response = await fetch('http://localhost:5001/api/expenses', {
// // // //         method: 'POST',
// // // //         headers: { 'Content-Type': 'application/json' },
// // // //         body: JSON.stringify({
// // // //           userId: currentUser._id,
// // // //           amount: parseFloat(amount),
// // // //           category,
// // // //           date: date || new Date().toISOString().split('T')[0],
// // // //         }),
// // // //       });
// // // //       if (response.ok) {
// // // //         await fetchExpenses();
// // // //         setAmount('');
// // // //         setCategory('');
// // // //         setDate('');
// // // //       } else {
// // // //         alert('Error adding expense.');
// // // //       }
// // // //     } catch (error) {
// // // //       console.error('Error adding expense:', error);
// // // //     }
// // // //   };

// // // //   const handleGetRecommendations = async () => {
// // // //     try {
// // // //       const response = await fetch("http://localhost:5002/api/ai-recommendations", {
// // // //         method: "POST",
// // // //         headers: { "Content-Type": "application/json" },
// // // //         body: JSON.stringify({ user_id: currentUser._id }), // Send user_id
// // // //       });
  
// // // //       if (response.ok) {
// // // //         const data = await response.json();
// // // //         alert(`Recommendations: ${data.text}`);
// // // //       } else {
// // // //         alert("Error fetching recommendations.");
// // // //       }
// // // //     } catch (error) {
// // // //       console.error("Error fetching recommendations:", error);
// // // //     }
// // // //   };
  

// // // //   const today = new Date().toISOString().split('T')[0];
// // // //   const todaysExpenses = expenses.filter((exp) => exp.date.slice(0, 10) === today);
// // // //   const todaysTotal = todaysExpenses.reduce((sum, exp) => sum + exp.amount, 0);

// // // //   useEffect(() => {
// // // //     if (todaysTotal > 100) {
// // // //       alert('Alert: Your daily expense threshold has been exceeded!');
// // // //     }
// // // //   }, [todaysTotal]);

// // // //   const categoryTotals = {};
// // // //   expenses.forEach((exp) => {
// // // //     categoryTotals[exp.category] = (categoryTotals[exp.category] || 0) + exp.amount;
// // // //   });
// // // //   const topCategories = Object.entries(categoryTotals)
// // // //     .sort((a, b) => b[1] - a[1])
// // // //     .slice(0, 3);

// // // //   return (
// // // //     <div style={{ padding: '1rem' }}>
// // // //       <h2>Expenses</h2>
// // // //       <form onSubmit={handleAddExpense}>
// // // //         <div>
// // // //           <label>
// // // //             Amount:&nbsp;
// // // //             <input type="text" value={amount} onChange={(e) => setAmount(e.target.value)} required />
// // // //           </label>
// // // //         </div>
// // // //         <div>
// // // //           <label>
// // // //             Category:&nbsp;
// // // //             <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} required />
// // // //           </label>
// // // //         </div>
// // // //         <div>
// // // //           <label>
// // // //             Date:&nbsp;
// // // //             <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
// // // //           </label>
// // // //         </div>
// // // //         <button type="submit">Add Expense</button>
// // // //         <button type="button" onClick={handleGetRecommendations}>
// // // //           Get Recommendations
// // // //         </button>
// // // //       </form>

// // // //       <h3>Your Expenses</h3>
// // // //       <ul>
// // // //         {expenses.map((exp) => (
// // // //           <li key={exp._id}>
// // // //             {exp.date.slice(0, 10)}: {exp.category} - ${exp.amount.toFixed(2)}
// // // //           </li>
// // // //         ))}
// // // //       </ul>

// // // //       <h3>Top 3 Spending Categories</h3>
// // // //       <ul>
// // // //         {topCategories.map(([cat, total]) => (
// // // //           <li key={cat}>
// // // //             {cat}: ${total.toFixed(2)}
// // // //           </li>
// // // //         ))}
// // // //       </ul>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Expenses;



// // // import React, { useState, useEffect } from 'react';

// // // const Expenses = () => {
// // //   const [amount, setAmount] = useState('');
// // //   const [category, setCategory] = useState('');
// // //   const [date, setDate] = useState('');
// // //   const [expenses, setExpenses] = useState([]);

// // //   const currentUser = JSON.parse(localStorage.getItem('currentUser'));

// // //   const fetchExpenses = async () => {
// // //     try {
// // //       const response = await fetch(`http://localhost:5001/api/expenses/${currentUser._id}`);
// // //       if (response.ok) {
// // //         const data = await response.json();
// // //         setExpenses(data);
// // //       } else {
// // //         alert('Error fetching expenses.');
// // //       }
// // //     } catch (error) {
// // //       console.error('Error fetching expenses:', error);
// // //     }
// // //   };

// // //   useEffect(() => {
// // //     if (currentUser) {
// // //       fetchExpenses();
// // //     }
// // //   }, [currentUser]);

// // //   const handleAddExpense = async (e) => {
// // //     e.preventDefault();
// // //     if (isNaN(amount) || Number(amount) <= 0) {
// // //       alert('Amount must be a positive number.');
// // //       return;
// // //     }
// // //     if (!/^[A-Za-z\s]+$/.test(category)) {
// // //       alert('Category must contain only letters.');
// // //       return;
// // //     }
// // //     try {
// // //       const response = await fetch('http://localhost:5001/api/expenses', {
// // //         method: 'POST',
// // //         headers: { 'Content-Type': 'application/json' },
// // //         body: JSON.stringify({ userId: currentUser._id, amount: parseFloat(amount), category, date }),
// // //       });
// // //       if (response.ok) {
// // //         await fetchExpenses();
// // //         setAmount('');
// // //         setCategory('');
// // //         setDate('');
// // //       } else {
// // //         alert('Error adding expense.');
// // //       }
// // //     } catch (error) {
// // //       console.error('Error adding expense:', error);
// // //     }
// // //   };

// // //   const handleGetRecommendations = async () => {
// // //     try {
// // //       const response = await fetch('http://localhost:5002/api/ai-recommendations', {
// // //         method: 'POST',
// // //         headers: { 'Content-Type': 'application/json' },
// // //         body: JSON.stringify({ user: currentUser, expenses }),
// // //       });
// // //       if (response.ok) {
// // //         const data = await response.json();
// // //         alert(`Recommendations: ${data.text}`);
// // //       } else {
// // //         alert('Error fetching recommendations.');
// // //       }
// // //     } catch (error) {
// // //       console.error('Error fetching recommendations:', error);
// // //     }
// // //   };

// // //   return (
// // //     <div>
// // //       <h1>Expense Tracker</h1>
// // //       <form onSubmit={handleAddExpense}>
// // //         <input type="text" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
// // //         <input type="text" placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} />
// // //         <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
// // //         <button type="submit">Add Expense</button>
// // //       </form>
// // //       <ul>
// // //         {expenses.map((expense) => (
// // //           <li key={expense._id}>{expense.category}: ₹{expense.amount} on {expense.date}</li>
// // //         ))}
// // //         <button type="button" onClick={handleGetRecommendations}>Get Recommendations</button>
// // //       </ul>
// // //     </div>
// // //   );
// // // };

// // // export default Expenses;



// // import React, { useState, useEffect } from 'react';

// // const Expenses = () => {
// //   const [amount, setAmount] = useState('');
// //   const [category, setCategory] = useState('');
// //   const [date, setDate] = useState('');
// //   const [expenses, setExpenses] = useState([]);
// //   const [recommendations, setRecommendations] = useState(''); // For storing recommendations

// //   const currentUser = JSON.parse(localStorage.getItem('currentUser'));

// //   const fetchExpenses = async () => {
// //     try {
// //       const response = await fetch(`http://localhost:5001/api/expenses/${currentUser._id}`);
// //       if (response.ok) {
// //         const data = await response.json();
// //         setExpenses(data);
// //       } else {
// //         alert('Error fetching expenses.');
// //       }
// //     } catch (error) {
// //       console.error('Error fetching expenses:', error);
// //     }
// //   };

// //   useEffect(() => {
// //     if (currentUser) {
// //       fetchExpenses();
// //     }
// //   }, [currentUser]);

// //   const handleAddExpense = async (e) => {
// //     e.preventDefault();
// //     if (isNaN(amount) || Number(amount) <= 0) {
// //       alert('Amount must be a positive number.');
// //       return;
// //     }
// //     if (!/^[A-Za-z\s]+$/.test(category)) {
// //       alert('Category must contain only letters.');
// //       return;
// //     }
// //     try {
// //       const response = await fetch('http://localhost:5001/api/expenses', {
// //         method: 'POST',
// //         headers: { 'Content-Type': 'application/json' },
// //         body: JSON.stringify({ userId: currentUser._id, amount: parseFloat(amount), category, date }),
// //       });
// //       if (response.ok) {
// //         await fetchExpenses();
// //         setAmount('');
// //         setCategory('');
// //         setDate('');
// //       } else {
// //         alert('Error adding expense.');
// //       }
// //     } catch (error) {
// //       console.error('Error adding expense:', error);
// //     }
// //   };

// //   const handleGetRecommendations = async () => {
// //     try {
// //       const response = await fetch('http://localhost:5002/api/ai-recommendations', {
// //         method: 'POST',
// //         headers: { 'Content-Type': 'application/json' },
// //         body: JSON.stringify({ user: currentUser, expenses }),
// //       });
// //       if (response.ok) {
// //         const data = await response.json();
// //         setRecommendations(data.text); // Update state with the recommendations
// //       } else {
// //         alert('Error fetching recommendations.');
// //       }
// //     } catch (error) {
// //       console.error('Error fetching recommendations:', error);
// //     }
// //   };

// //   return (
// //     <div>
// //       <h1>Expense Tracker</h1>
// //       <form onSubmit={handleAddExpense}>
// //         <input
// //           type="text"
// //           placeholder="Amount"
// //           value={amount}
// //           onChange={(e) => setAmount(e.target.value)}
// //         />
// //         <input
// //           type="text"
// //           placeholder="Category"
// //           value={category}
// //           onChange={(e) => setCategory(e.target.value)}
// //         />
// //         <input
// //           type="date"
// //           value={date}
// //           onChange={(e) => setDate(e.target.value)}
// //         />
// //         <button type="submit">Add Expense</button>
// //       </form>
// //       <ul>
// //         {expenses.map((expense) => (
// //           <li key={expense._id}>
// //             {expense.category}: ₹{expense.amount} on {expense.date}
// //           </li>
// //         ))}
// //       </ul>
// //       <button type="button" onClick={handleGetRecommendations}>
// //         Get Recommendations
// //       </button>
// //       {recommendations && ( // Conditionally render recommendations if they exist
// //         <div>
// //           <h2>Recommendations</h2>
// //           <p>{recommendations}</p>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default Expenses;


// import React, { useState, useEffect } from 'react';

// const Expenses = () => {
//   const [amount, setAmount] = useState('');
//   const [category, setCategory] = useState('');
//   const [date, setDate] = useState('');
//   const [expenses, setExpenses] = useState([]);
//   const [recommendations, setRecommendations] = useState(''); // Store recommendations

//   const currentUser = JSON.parse(localStorage.getItem('currentUser'));

//   const fetchExpenses = async () => {
//     try {
//       const response = await fetch(`http://localhost:5001/api/expenses/${currentUser._id}`);
//       if (response.ok) {
//         const data = await response.json();
//         setExpenses(data);
//       } else {
//         alert('Error fetching expenses.');
//       }
//     } catch (error) {
//       console.error('Error fetching expenses:', error);
//     }
//   };

//   useEffect(() => {
//     if (currentUser) {
//       fetchExpenses();
//     }
//   }, [currentUser]);

//   const handleAddExpense = async (e) => {
//     e.preventDefault();
//     if (isNaN(amount) || Number(amount) <= 0) {
//       alert('Amount must be a positive number.');
//       return;
//     }
//     if (!/^[A-Za-z\s]+$/.test(category)) {
//       alert('Category must contain only letters.');
//       return;
//     }
//     try {
//       const response = await fetch('http://localhost:5001/api/expenses', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ userId: currentUser._id, amount: parseFloat(amount), category, date }),
//       });
//       if (response.ok) {
//         await fetchExpenses();
//         setAmount('');
//         setCategory('');
//         setDate('');
//       } else {
//         alert('Error adding expense.');
//       }
//     } catch (error) {
//       console.error('Error adding expense:', error);
//     }
//   };

//   const handleGetRecommendations = async () => {
//     try {
//       const response = await fetch('http://localhost:5002/api/ai-recommendations', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ user: currentUser, expenses }),
//       });
//       if (response.ok) {
//         const data = await response.json();
//         setRecommendations(data.text); // Update state with the recommendations
//       } else {
//         alert('Error fetching recommendations.');
//       }
//     } catch (error) {
//       console.error('Error fetching recommendations:', error);
//     }
//   };

//   return (
//     <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
//       <h1>Expense Tracker</h1>
//       <form onSubmit={handleAddExpense} style={{ marginBottom: '20px' }}>
//         <input
//           type="text"
//           placeholder="Amount"
//           value={amount}
//           onChange={(e) => setAmount(e.target.value)}
//           style={{ marginRight: '10px' }}
//         />
//         <input
//           type="text"
//           placeholder="Category"
//           value={category}
//           onChange={(e) => setCategory(e.target.value)}
//           style={{ marginRight: '10px' }}
//         />
//         <input
//           type="date"
//           value={date}
//           onChange={(e) => setDate(e.target.value)}
//           style={{ marginRight: '10px' }}
//         />
//         <button type="submit">Add Expense</button>
//       </form>
//       <ul style={{ listStyleType: 'none', padding: '0' }}>
//         {expenses.map((expense) => (
//           <li key={expense._id} style={{ marginBottom: '10px' }}>
//             {expense.category}: ₹{expense.amount} on {expense.date}
//           </li>
//         ))}
//       </ul>
//       <button type="button" onClick={handleGetRecommendations} style={{ marginTop: '20px' }}>
//         Get Recommendations
//       </button>
//       {recommendations && (
//         <div style={{ marginTop: '20px' }}>
//           <h2>Recommendations</h2>
//           {recommendations.split('\n').map((line, index) => {
//             if (line.startsWith('* **')) {
//               return (
//                 <p key={index} style={{ fontWeight: 'bold', marginLeft: '20px' }}>
//                   {line.replace('* **', '')}
//                 </p>
//               );
//             } else if (line.startsWith('**')) {
//               return (
//                 <p key={index} style={{ marginLeft: '40px' }}>
//                   {line.replace('**', '- ')}
//                 </p>
//               );
//             }
//             return <p key={index}>{line}</p>;
//           })}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Expenses;




import React, { useState, useEffect } from 'react';

const Expenses = () => {
  // Existing states
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');
  const [expenses, setExpenses] = useState([]);
  const [recommendations, setRecommendations] = useState('');
  const [sharedExpenses, setSharedExpenses] = useState([]);

  // New states for expense sharing UI
  const [shareExpenseVisible, setShareExpenseVisible] = useState(false);
  const [selectedExpense, setSelectedExpense] = useState(null);
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState('');
  const [shareAmount, setShareAmount] = useState('');

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

  // Fetch shared expenses for the current user
  const fetchSharedExpenses = async () => {
    try {
      const response = await fetch(`http://localhost:5001/api/shared-expenses/${currentUser._id}`);
      if (response.ok) {
        const data = await response.json();
        setSharedExpenses(data);
      } else {
        alert('Error fetching shared expenses.');
      }
    } catch (error) {
      console.error('Error fetching shared expenses:', error);
    }
  };

  useEffect(() => {
    if (currentUser) {
      fetchExpenses();
      fetchSharedExpenses();
    }
  }, [currentUser]);

  const handleAddExpense = async (e) => {
    e.preventDefault();
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
        body: JSON.stringify({ userId: currentUser._id, amount: parseFloat(amount), category, date }),
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

  // Opens the sharing panel for a specific expense.
  const handleOpenShare = async (expense) => {
    setSelectedExpense(expense);
    setShareExpenseVisible(true);
    // Fetch list of all users for sharing (will filter out the current user on client side).
    try {
      const response = await fetch('http://localhost:5001/api/users');
      if (response.ok) {
        const data = await response.json();
        const filteredUsers = data.filter(user => user._id !== currentUser._id);
        setUsers(filteredUsers);
      } else {
        alert('Error fetching users.');
      }
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  // Handles the actual sharing of the expense.
  const handleShareExpense = async () => {
    if (isNaN(shareAmount) || Number(shareAmount) <= 0) {
      alert('Please enter a valid amount to share.');
      return;
    }
    if (Number(shareAmount) > Number(selectedExpense.amount)) {
      alert('Shared amount cannot exceed the original expense amount.');
      return;
    }
    try {
      const response = await fetch('http://localhost:5001/api/expenses/share', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          expenseId: selectedExpense._id,
          sharedBy: currentUser._id,
          sharedWith: selectedUser,
          sharedAmount: parseFloat(shareAmount),
        }),
      });
      if (response.ok) {
        await fetchSharedExpenses();
        setShareExpenseVisible(false);
        setSelectedExpense(null);
        setSelectedUser('');
        setShareAmount('');
        alert('Expense shared successfully.');
      } else {
        alert('Error sharing expense.');
      }
    } catch (error) {
      console.error('Error sharing expense:', error);
    }
  };

  // Existing recommendation button handler remains unchanged.
  const handleGetRecommendations = async () => {
    try {
      const response = await fetch('http://localhost:5002/api/ai-recommendations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user: currentUser, expenses }),
      });
      if (response.ok) {
        const data = await response.json();
        setRecommendations(data.text);
      } else {
        alert('Error fetching recommendations.');
      }
    } catch (error) {
      console.error('Error fetching recommendations:', error);
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Expense Tracker</h1>
      <form onSubmit={handleAddExpense} style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          style={{ marginRight: '10px' }}
        />
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={{ marginRight: '10px' }}
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          style={{ marginRight: '10px' }}
        />
        <button type="submit">Add Expense</button>
      </form>
      <ul style={{ listStyleType: 'none', padding: '0' }}>
        {expenses.map((expense) => (
          <li key={expense._id} style={{ marginBottom: '10px' }}>
            {expense.category}: ₹{expense.amount} on {expense.date}
            <button onClick={() => handleOpenShare(expense)} style={{ marginLeft: '1px' }}>
              Share Expense
            </button>
          </li>
        ))}
      </ul>

      {/* Share expense panel */}
      {shareExpenseVisible && selectedExpense && (
        <div style={{ border: '1px solid #ccc', padding: '10px', marginTop: '20px' }}>
          <h3>
            Share Expense: {selectedExpense.category} - ₹{selectedExpense.amount}
          </h3>
          <label>Select User to share with:</label>
          <select
            value={selectedUser}
            onChange={(e) => setSelectedUser(e.target.value)}
            style={{ marginLeft: '10px', marginBottom: '10px' }}
          >
            <option value="">Select User</option>
            {users.map((user) => (
              <option key={user._id} value={user._id}>
                {user.name} ({user.email})
              </option>
            ))}
          </select>
          <div>
            <label>Share Amount: </label>
            <input
              type="number"
              value={shareAmount}
              onChange={(e) => setShareAmount(e.target.value)}
              style={{ marginLeft: '10px' }}
            />
          </div>
          <button onClick={handleShareExpense} style={{ marginTop: '10px' }}>
            Confirm Share
          </button>
          <button
            onClick={() => setShareExpenseVisible(false)}
            style={{ marginLeft: '10px', marginTop: '10px' }}
          >
            Cancel
          </button>
        </div>
      )}

      <button type="button" onClick={handleGetRecommendations} style={{ marginTop: '20px' }}>
        Get Recommendations
      </button>
      {recommendations && (
        <div style={{ marginTop: '20px' }}>
          <h2>Recommendations</h2>
          {recommendations.split('\n').map((line, index) => {
            if (line.startsWith('* **')) {
              return (
                <p key={index} style={{ fontWeight: 'bold', marginLeft: '20px' }}>
                  {line.replace('* **', '')}
                </p>
              );
            } else if (line.startsWith('**')) {
              return (
                <p key={index} style={{ marginLeft: '40px' }}>
                  {line.replace('**', '- ')}
                </p>
              );
            }
            return <p key={index}>{line}</p>;
          })}
        </div>
      )}

      {/* Shared Expenses Section */}
      <div style={{ marginTop: '30px' }}>
        <h2>Shared Expenses</h2>
        {sharedExpenses.length === 0 ? (
          <p>No shared expenses yet.</p>
        ) : (
          <ul style={{ listStyleType: 'none', padding: '0' }}>
            {sharedExpenses.map((shared) => (
              <li key={shared._id} style={{ marginBottom: '10px' }}>
                {shared.expense.category}: ₹{shared.sharedAmount}{' '}
                {shared.sharedBy._id === currentUser._id
                  ? `shared with ${shared.sharedWith.name}`
                  : `received from ${shared.sharedBy.name}`}{' '}
                on{' '}
                {new Date(shared.sharedAt).toLocaleDateString()}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Expenses;
