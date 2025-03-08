// // // // import React, { useState, useEffect } from 'react';

// // // // const Expenses = () => {
// // // //   // Existing states
// // // //   const [amount, setAmount] = useState('');
// // // //   const [category, setCategory] = useState('');
// // // //   const [date, setDate] = useState('');
// // // //   const [expenses, setExpenses] = useState([]);
// // // //   const [recommendations, setRecommendations] = useState('');
// // // //   const [sharedExpenses, setSharedExpenses] = useState([]);

// // // //   // New states for expense sharing UI
// // // //   const [shareExpenseVisible, setShareExpenseVisible] = useState(false);
// // // //   const [selectedExpense, setSelectedExpense] = useState(null);
// // // //   const [users, setUsers] = useState([]);
// // // //   const [selectedUser, setSelectedUser] = useState('');
// // // //   const [shareAmount, setShareAmount] = useState('');

// // // //   const currentUser = JSON.parse(localStorage.getItem('currentUser'));

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

// // // //   // Fetch shared expenses for the current user
// // // //   const fetchSharedExpenses = async () => {
// // // //     try {
// // // //       const response = await fetch(`http://localhost:5001/api/shared-expenses/${currentUser._id}`);
// // // //       if (response.ok) {
// // // //         const data = await response.json();
// // // //         setSharedExpenses(data);
// // // //       } else {
// // // //         alert('Error fetching shared expenses.');
// // // //       }
// // // //     } catch (error) {
// // // //       console.error('Error fetching shared expenses:', error);
// // // //     }
// // // //   };

// // // //   useEffect(() => {
// // // //     if (currentUser) {
// // // //       fetchExpenses();
// // // //       fetchSharedExpenses();
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
// // // //         body: JSON.stringify({ userId: currentUser._id, amount: parseFloat(amount), category, date }),
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

// // // //   // Opens the sharing panel for a specific expense.
// // // //   const handleOpenShare = async (expense) => {
// // // //     setSelectedExpense(expense);
// // // //     setShareExpenseVisible(true);
// // // //     // Fetch list of all users for sharing (will filter out the current user on client side).
// // // //     try {
// // // //       const response = await fetch('http://localhost:5001/api/users');
// // // //       if (response.ok) {
// // // //         const data = await response.json();
// // // //         const filteredUsers = data.filter(user => user._id !== currentUser._id);
// // // //         setUsers(filteredUsers);
// // // //       } else {
// // // //         alert('Error fetching users.');
// // // //       }
// // // //     } catch (error) {
// // // //       console.error('Error fetching users:', error);
// // // //     }
// // // //   };

// // // //   // Handles the actual sharing of the expense.
// // // //   const handleShareExpense = async () => {
// // // //     if (isNaN(shareAmount) || Number(shareAmount) <= 0) {
// // // //       alert('Please enter a valid amount to share.');
// // // //       return;
// // // //     }
// // // //     if (Number(shareAmount) > Number(selectedExpense.amount)) {
// // // //       alert('Shared amount cannot exceed the original expense amount.');
// // // //       return;
// // // //     }
// // // //     try {
// // // //       const response = await fetch('http://localhost:5001/api/expenses/share', {
// // // //         method: 'POST',
// // // //         headers: { 'Content-Type': 'application/json' },
// // // //         body: JSON.stringify({
// // // //           expenseId: selectedExpense._id,
// // // //           sharedBy: currentUser._id,
// // // //           sharedWith: selectedUser,
// // // //           sharedAmount: parseFloat(shareAmount),
// // // //         }),
// // // //       });
// // // //       if (response.ok) {
// // // //         await fetchSharedExpenses();
// // // //         setShareExpenseVisible(false);
// // // //         setSelectedExpense(null);
// // // //         setSelectedUser('');
// // // //         setShareAmount('');
// // // //         alert('Expense shared successfully.');
// // // //       } else {
// // // //         alert('Error sharing expense.');
// // // //       }
// // // //     } catch (error) {
// // // //       console.error('Error sharing expense:', error);
// // // //     }
// // // //   };

// // // //   // Existing recommendation button handler remains unchanged.
// // // //   const handleGetRecommendations = async () => {
// // // //     try {
// // // //       const response = await fetch('http://localhost:5002/api/ai-recommendations', {
// // // //         method: 'POST',
// // // //         headers: { 'Content-Type': 'application/json' },
// // // //         body: JSON.stringify({ user: currentUser, expenses }),
// // // //       });
// // // //       if (response.ok) {
// // // //         const data = await response.json();
// // // //         setRecommendations(data.text);
// // // //       } else {
// // // //         alert('Error fetching recommendations.');
// // // //       }
// // // //     } catch (error) {
// // // //       console.error('Error fetching recommendations:', error);
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
// // // //       <h1>Expense Tracker</h1>
// // // //       <form onSubmit={handleAddExpense} style={{ marginBottom: '20px' }}>
// // // //         <input
// // // //           type="text"
// // // //           placeholder="Amount"
// // // //           value={amount}
// // // //           onChange={(e) => setAmount(e.target.value)}
// // // //           style={{ marginRight: '10px' }}
// // // //         />
// // // //         <input
// // // //           type="text"
// // // //           placeholder="Category"
// // // //           value={category}
// // // //           onChange={(e) => setCategory(e.target.value)}
// // // //           style={{ marginRight: '10px' }}
// // // //         />
// // // //         <input
// // // //           type="date"
// // // //           value={date}
// // // //           onChange={(e) => setDate(e.target.value)}
// // // //           style={{ marginRight: '10px' }}
// // // //         />
// // // //         <button type="submit">Add Expense</button>
// // // //       </form>
// // // //       <ul style={{ listStyleType: 'none', padding: '0' }}>
// // // //         {expenses.map((expense) => (
// // // //           <li key={expense._id} style={{ marginBottom: '10px' }}>
// // // //             {expense.category}: ₹{expense.amount} on {expense.date}
// // // //             <button onClick={() => handleOpenShare(expense)} style={{ marginLeft: '1px' }}>
// // // //               Share Expense
// // // //             </button>
// // // //           </li>
// // // //         ))}
// // // //       </ul>

// // // //       {/* Share expense panel */}
// // // //       {shareExpenseVisible && selectedExpense && (
// // // //         <div style={{ border: '1px solid #ccc', padding: '10px', marginTop: '20px' }}>
// // // //           <h3>
// // // //             Share Expense: {selectedExpense.category} - ₹{selectedExpense.amount}
// // // //           </h3>
// // // //           <label>Select User to share with:</label>
// // // //           <select
// // // //             value={selectedUser}
// // // //             onChange={(e) => setSelectedUser(e.target.value)}
// // // //             style={{ marginLeft: '10px', marginBottom: '10px' }}
// // // //           >
// // // //             <option value="">Select User</option>
// // // //             {users.map((user) => (
// // // //               <option key={user._id} value={user._id}>
// // // //                 {user.name} ({user.email})
// // // //               </option>
// // // //             ))}
// // // //           </select>
// // // //           <div>
// // // //             <label>Share Amount: </label>
// // // //             <input
// // // //               type="number"
// // // //               value={shareAmount}
// // // //               onChange={(e) => setShareAmount(e.target.value)}
// // // //               style={{ marginLeft: '10px' }}
// // // //             />
// // // //           </div>
// // // //           <button onClick={handleShareExpense} style={{ marginTop: '10px' }}>
// // // //             Confirm Share
// // // //           </button>
// // // //           <button
// // // //             onClick={() => setShareExpenseVisible(false)}
// // // //             style={{ marginLeft: '10px', marginTop: '10px' }}
// // // //           >
// // // //             Cancel
// // // //           </button>
// // // //         </div>
// // // //       )}

// // // //       <button type="button" onClick={handleGetRecommendations} style={{ marginTop: '20px' }}>
// // // //         Get Recommendations
// // // //       </button>
// // // //       {recommendations && (
// // // //         <div style={{ marginTop: '20px' }}>
// // // //           <h2>Recommendations</h2>
// // // //           {recommendations.split('\n').map((line, index) => {
// // // //             if (line.startsWith('* **')) {
// // // //               return (
// // // //                 <p key={index} style={{ fontWeight: 'bold', marginLeft: '20px' }}>
// // // //                   {line.replace('* **', '')}
// // // //                 </p>
// // // //               );
// // // //             } else if (line.startsWith('**')) {
// // // //               return (
// // // //                 <p key={index} style={{ marginLeft: '40px' }}>
// // // //                   {line.replace('**', '- ')}
// // // //                 </p>
// // // //               );
// // // //             }
// // // //             return <p key={index}>{line}</p>;
// // // //           })}
// // // //         </div>
// // // //       )}

// // // //       {/* Shared Expenses Section */}
// // // //       <div style={{ marginTop: '30px' }}>
// // // //         <h2>Shared Expenses</h2>
// // // //         {sharedExpenses.length === 0 ? (
// // // //           <p>No shared expenses yet.</p>
// // // //         ) : (
// // // //           <ul style={{ listStyleType: 'none', padding: '0' }}>
// // // //             {sharedExpenses.map((shared) => (
// // // //               <li key={shared._id} style={{ marginBottom: '10px' }}>
// // // //                 {shared.expense.category}: ₹{shared.sharedAmount}{' '}
// // // //                 {shared.sharedBy._id === currentUser._id
// // // //                   ? `shared with ${shared.sharedWith.name}`
// // // //                   : `received from ${shared.sharedBy.name}`}{' '}
// // // //                 on{' '}
// // // //                 {new Date(shared.sharedAt).toLocaleDateString()}
// // // //               </li>
// // // //             ))}
// // // //           </ul>
// // // //         )}
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Expenses;



// // // // src/Expenses.js
// // // import React, { useState, useEffect } from 'react';
// // // import { useNavigate } from 'react-router-dom';
// // // import 'bootstrap/dist/css/bootstrap.min.css';
// // // import './Expenses.css'; // custom styles
// // // import 'bootstrap/dist/css/bootstrap.min.css';


// // // const Expenses = () => {
// // //   // Existing states
// // //   const [amount, setAmount] = useState('');
// // //   const [category, setCategory] = useState('');
// // //   const [date, setDate] = useState('');
// // //   const [expenses, setExpenses] = useState([]);
// // //   const [recommendations, setRecommendations] = useState('');
// // //   const [sharedExpenses, setSharedExpenses] = useState([]);

// // //   // New states for expense sharing UI
// // //   const [shareExpenseVisible, setShareExpenseVisible] = useState(false);
// // //   const [selectedExpense, setSelectedExpense] = useState(null);
// // //   const [users, setUsers] = useState([]);
// // //   const [selectedUser, setSelectedUser] = useState('');
// // //   const [shareAmount, setShareAmount] = useState('');

// // //   const currentUser = JSON.parse(localStorage.getItem('currentUser'));
// // //   const navigate = useNavigate();

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

// // //   // Fetch shared expenses for the current user
// // //   const fetchSharedExpenses = async () => {
// // //     try {
// // //       const response = await fetch(`http://localhost:5001/api/shared-expenses/${currentUser._id}`);
// // //       if (response.ok) {
// // //         const data = await response.json();
// // //         setSharedExpenses(data);
// // //       } else {
// // //         alert('Error fetching shared expenses.');
// // //       }
// // //     } catch (error) {
// // //       console.error('Error fetching shared expenses:', error);
// // //     }
// // //   };

// // //   useEffect(() => {
// // //     if (currentUser) {
// // //       fetchExpenses();
// // //       fetchSharedExpenses();
// // //     } else {
// // //       // Redirect to login if there is no logged-in user
// // //       navigate('/login');
// // //     }
// // //   }, [currentUser, navigate]);

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

// // //   // Opens the sharing panel for a specific expense.
// // //   const handleOpenShare = async (expense) => {
// // //     setSelectedExpense(expense);
// // //     setShareExpenseVisible(true);
// // //     // Fetch list of all users for sharing
// // //     try {
// // //       const response = await fetch('http://localhost:5001/api/users');
// // //       if (response.ok) {
// // //         const data = await response.json();
// // //         const filteredUsers = data.filter(user => user._id !== currentUser._id);
// // //         setUsers(filteredUsers);
// // //       } else {
// // //         alert('Error fetching users.');
// // //       }
// // //     } catch (error) {
// // //       console.error('Error fetching users:', error);
// // //     }
// // //   };

// // //   // Handles the actual sharing of the expense.
// // //   const handleShareExpense = async () => {
// // //     if (isNaN(shareAmount) || Number(shareAmount) <= 0) {
// // //       alert('Please enter a valid amount to share.');
// // //       return;
// // //     }
// // //     if (Number(shareAmount) > Number(selectedExpense.amount)) {
// // //       alert('Shared amount cannot exceed the original expense amount.');
// // //       return;
// // //     }
// // //     try {
// // //       const response = await fetch('http://localhost:5001/api/expenses/share', {
// // //         method: 'POST',
// // //         headers: { 'Content-Type': 'application/json' },
// // //         body: JSON.stringify({
// // //           expenseId: selectedExpense._id,
// // //           sharedBy: currentUser._id,
// // //           sharedWith: selectedUser,
// // //           sharedAmount: parseFloat(shareAmount),
// // //         }),
// // //       });
// // //       if (response.ok) {
// // //         await fetchSharedExpenses();
// // //         setShareExpenseVisible(false);
// // //         setSelectedExpense(null);
// // //         setSelectedUser('');
// // //         setShareAmount('');
// // //         alert('Expense shared successfully.');
// // //       } else {
// // //         alert('Error sharing expense.');
// // //       }
// // //     } catch (error) {
// // //       console.error('Error sharing expense:', error);
// // //     }
// // //   };

// // //   // Existing recommendation button handler remains unchanged.
// // //   const handleGetRecommendations = async () => {
// // //     try {
// // //       const response = await fetch('http://localhost:5002/api/ai-recommendations', {
// // //         method: 'POST',
// // //         headers: { 'Content-Type': 'application/json' },
// // //         body: JSON.stringify({ user: currentUser, expenses }),
// // //       });
// // //       if (response.ok) {
// // //         const data = await response.json();
// // //         setRecommendations(data.text);
// // //       } else {
// // //         alert('Error fetching recommendations.');
// // //       }
// // //     } catch (error) {
// // //       console.error('Error fetching recommendations:', error);
// // //     }
// // //   };

// // //   return (
// // //     <div className="container mt-5" style={{ fontFamily: 'Arial, sans-serif' }}>
// // //       <h1 className="mb-4">Expense Tracker</h1>

// // //       {/* Add Expense Form */}
// // //       <form onSubmit={handleAddExpense} className="mb-4">
// // //         <div className="row g-2">
// // //           <div className="col-md-3">
// // //             <input
// // //               type="text"
// // //               placeholder="Amount"
// // //               value={amount}
// // //               onChange={(e) => setAmount(e.target.value)}
// // //               className="form-control"
// // //             />
// // //           </div>
// // //           <div className="col-md-3">
// // //             <input
// // //               type="text"
// // //               placeholder="Category"
// // //               value={category}
// // //               onChange={(e) => setCategory(e.target.value)}
// // //               className="form-control"
// // //             />
// // //           </div>
// // //           <div className="col-md-3">
// // //             <input
// // //               type="date"
// // //               value={date}
// // //               onChange={(e) => setDate(e.target.value)}
// // //               className="form-control"
// // //             />
// // //           </div>
// // //           <div className="col-md-3">
// // //             <button type="submit" className="btn btn-primary w-100">
// // //               Add Expense
// // //             </button>
// // //           </div>
// // //         </div>
// // //       </form>

// // //       {/* Expenses List */}
// // //       <ul className="list-group mb-4">
// // //         {expenses.map((expense) => (
// // //           <li key={expense._id} className="list-group-item d-flex justify-content-between align-items-center">
// // //             <span>
// // //               {expense.category}: ₹{expense.amount} on {expense.date}
// // //             </span>
// // //             <button onClick={() => handleOpenShare(expense)} className="btn btn-outline-secondary btn-sm">
// // //               Share Expense
// // //             </button>
// // //           </li>
// // //         ))}
// // //       </ul>

// // //       {/* Share Expense Panel */}
// // //       {shareExpenseVisible && selectedExpense && (
// // //         <div className="card mb-4">
// // //           <div className="card-body">
// // //             <h3 className="card-title">
// // //               Share Expense: {selectedExpense.category} - ₹{selectedExpense.amount}
// // //             </h3>
// // //             <div className="mb-3">
// // //               <label htmlFor="userSelect" className="form-label">
// // //                 Select User to share with:
// // //               </label>
// // //               <select
// // //                 id="userSelect"
// // //                 value={selectedUser}
// // //                 onChange={(e) => setSelectedUser(e.target.value)}
// // //                 className="form-select"
// // //               >
// // //                 <option value="">Select User</option>
// // //                 {users.map((user) => (
// // //                   <option key={user._id} value={user._id}>
// // //                     {user.name} ({user.email})
// // //                   </option>
// // //                 ))}
// // //               </select>
// // //             </div>
// // //             <div className="mb-3">
// // //               <label htmlFor="shareAmount" className="form-label">
// // //                 Share Amount:
// // //               </label>
// // //               <input
// // //                 id="shareAmount"
// // //                 type="number"
// // //                 value={shareAmount}
// // //                 onChange={(e) => setShareAmount(e.target.value)}
// // //                 className="form-control"
// // //               />
// // //             </div>
// // //             <div>
// // //               <button onClick={handleShareExpense} className="btn btn-success me-2">
// // //                 Confirm Share
// // //               </button>
// // //               <button
// // //                 onClick={() => setShareExpenseVisible(false)}
// // //                 className="btn btn-danger"
// // //               >
// // //                 Cancel
// // //               </button>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       )}

// // //       {/* Recommendations Section */}
// // //       <button
// // //         type="button"
// // //         onClick={handleGetRecommendations}
// // //         className="btn btn-info mb-4"
// // //       >
// // //         Get Recommendations
// // //       </button>
// // //       {recommendations && (
// // //         <div className="mb-4">
// // //           <h2>Recommendations</h2>
// // //           {recommendations.split('\n').map((line, index) => {
// // //             if (line.startsWith('* **')) {
// // //               return (
// // //                 <p key={index} className="fw-bold ms-3">
// // //                   {line.replace('* **', '')}
// // //                 </p>
// // //               );
// // //             } else if (line.startsWith('**')) {
// // //               return (
// // //                 <p key={index} className="ms-4">
// // //                   {line.replace('**', '- ')}
// // //                 </p>
// // //               );
// // //             }
// // //             return <p key={index}>{line}</p>;
// // //           })}
// // //         </div>
// // //       )}

// // //       {/* Shared Expenses Section */}
// // //       <div className="mb-4">
// // //         <h2>Shared Expenses</h2>
// // //         {sharedExpenses.length === 0 ? (
// // //           <p>No shared expenses yet.</p>
// // //         ) : (
// // //           <ul className="list-group">
// // //             {sharedExpenses.map((shared) => (
// // //               <li key={shared._id} className="list-group-item">
// // //                 {shared.expense.category}: ₹{shared.sharedAmount}{' '}
// // //                 {shared.sharedBy._id === currentUser._id
// // //                   ? `shared with ${shared.sharedWith.name}`
// // //                   : `received from ${shared.sharedBy.name}`}{' '}
// // //                 on {new Date(shared.sharedAt).toLocaleDateString()}
// // //               </li>
// // //             ))}
// // //           </ul>
// // //         )}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Expenses;


// // // src/Expenses.js
// // import React, { useState, useEffect } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import 'bootstrap/dist/css/bootstrap.min.css';
// // import './Expenses.css'; // Make sure this file includes the modal styles below

// // const Expenses = () => {
// //   // Existing states
// //   const [amount, setAmount] = useState('');
// //   const [category, setCategory] = useState('');
// //   const [date, setDate] = useState('');
// //   const [expenses, setExpenses] = useState([]);
// //   const [recommendations, setRecommendations] = useState('');
// //   const [sharedExpenses, setSharedExpenses] = useState([]);

// //   // New states for expense sharing UI
// //   const [shareExpenseVisible, setShareExpenseVisible] = useState(false);
// //   const [selectedExpense, setSelectedExpense] = useState(null);
// //   const [users, setUsers] = useState([]);
// //   const [selectedUser, setSelectedUser] = useState('');
// //   const [shareAmount, setShareAmount] = useState('');

// //   // New state for showing recommendations modal
// //   const [showModal, setShowModal] = useState(false);

// //   const currentUser = JSON.parse(localStorage.getItem('currentUser'));
// //   const navigate = useNavigate();

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

// //   // Fetch shared expenses for the current user
// //   const fetchSharedExpenses = async () => {
// //     try {
// //       const response = await fetch(`http://localhost:5001/api/shared-expenses/${currentUser._id}`);
// //       if (response.ok) {
// //         const data = await response.json();
// //         setSharedExpenses(data);
// //       } else {
// //         alert('Error fetching shared expenses.');
// //       }
// //     } catch (error) {
// //       console.error('Error fetching shared expenses:', error);
// //     }
// //   };

// //   useEffect(() => {
// //     if (currentUser) {
// //       fetchExpenses();
// //       fetchSharedExpenses();
// //     } else {
// //       // Redirect to login if there is no logged in user
// //       navigate('/login');
// //     }
// //   }, [currentUser, navigate]);

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

// //   // Opens the sharing panel for a specific expense.
// //   const handleOpenShare = async (expense) => {
// //     setSelectedExpense(expense);
// //     setShareExpenseVisible(true);
// //     // Fetch list of all users for sharing (will filter out the current user on client side).
// //     try {
// //       const response = await fetch('http://localhost:5001/api/users');
// //       if (response.ok) {
// //         const data = await response.json();
// //         const filteredUsers = data.filter(user => user._id !== currentUser._id);
// //         setUsers(filteredUsers);
// //       } else {
// //         alert('Error fetching users.');
// //       }
// //     } catch (error) {
// //       console.error('Error fetching users:', error);
// //     }
// //   };

// //   // Handles the actual sharing of the expense.
// //   const handleShareExpense = async () => {
// //     if (isNaN(shareAmount) || Number(shareAmount) <= 0) {
// //       alert('Please enter a valid amount to share.');
// //       return;
// //     }
// //     if (Number(shareAmount) > Number(selectedExpense.amount)) {
// //       alert('Shared amount cannot exceed the original expense amount.');
// //       return;
// //     }
// //     try {
// //       const response = await fetch('http://localhost:5001/api/expenses/share', {
// //         method: 'POST',
// //         headers: { 'Content-Type': 'application/json' },
// //         body: JSON.stringify({
// //           expenseId: selectedExpense._id,
// //           sharedBy: currentUser._id,
// //           sharedWith: selectedUser,
// //           sharedAmount: parseFloat(shareAmount),
// //         }),
// //       });
// //       if (response.ok) {
// //         await fetchSharedExpenses();
// //         setShareExpenseVisible(false);
// //         setSelectedExpense(null);
// //         setSelectedUser('');
// //         setShareAmount('');
// //         alert('Expense shared successfully.');
// //       } else {
// //         alert('Error sharing expense.');
// //       }
// //     } catch (error) {
// //       console.error('Error sharing expense:', error);
// //     }
// //   };

// //   // Modified recommendation button handler: Fetches recommendations and then displays them in a modal.
// //   const handleGetRecommendations = async () => {
// //     try {
// //       const response = await fetch('http://localhost:5002/api/ai-recommendations', {
// //         method: 'POST',
// //         headers: { 'Content-Type': 'application/json' },
// //         body: JSON.stringify({ user: currentUser, expenses }),
// //       });
// //       if (response.ok) {
// //         const data = await response.json();
// //         setRecommendations(data.text);
// //         setShowModal(true);
// //       } else {
// //         alert('Error fetching recommendations.');
// //       }
// //     } catch (error) {
// //       console.error('Error fetching recommendations:', error);
// //     }
// //   };

// //   return (
// //     <div className="container mt-5" style={{ fontFamily: 'Arial, sans-serif' }}>
// //       <h1 className="mb-4">Expense Tracker</h1>

// //       {/* Add Expense Form */}
// //       <form onSubmit={handleAddExpense} className="mb-4">
// //         <div className="row g-2">
// //           <div className="col-md-3">
// //             <input
// //               type="text"
// //               placeholder="Amount"
// //               value={amount}
// //               onChange={(e) => setAmount(e.target.value)}
// //               className="form-control"
// //             />
// //           </div>
// //           <div className="col-md-3">
// //             <input
// //               type="text"
// //               placeholder="Category"
// //               value={category}
// //               onChange={(e) => setCategory(e.target.value)}
// //               className="form-control"
// //             />
// //           </div>
// //           <div className="col-md-3">
// //             <input
// //               type="date"
// //               value={date}
// //               onChange={(e) => setDate(e.target.value)}
// //               className="form-control"
// //             />
// //           </div>
// //           <div className="col-md-3">
// //             <button type="submit" className="btn btn-primary w-100">
// //               Add Expense
// //             </button>
// //           </div>
// //         </div>
// //       </form>

// //       {/* Expenses List */}
// //       <ul className="list-group mb-4">
// //         {expenses.map((expense) => (
// //           <li key={expense._id} className="list-group-item d-flex justify-content-between align-items-center">
// //             <span>
// //               {expense.category}: ₹{expense.amount} on {expense.date}
// //             </span>
// //             <button onClick={() => handleOpenShare(expense)} className="btn btn-outline-secondary btn-sm">
// //               Share Expense
// //             </button>
// //           </li>
// //         ))}
// //       </ul>

// //       {/* Share Expense Panel */}
// //       {shareExpenseVisible && selectedExpense && (
// //         <div className="card mb-4">
// //           <div className="card-body">
// //             <h3 className="card-title">
// //               Share Expense: {selectedExpense.category} - ₹{selectedExpense.amount}
// //             </h3>
// //             <div className="mb-3">
// //               <label htmlFor="userSelect" className="form-label">
// //                 Select User to share with:
// //               </label>
// //               <select
// //                 id="userSelect"
// //                 value={selectedUser}
// //                 onChange={(e) => setSelectedUser(e.target.value)}
// //                 className="form-select"
// //               >
// //                 <option value="">Select User</option>
// //                 {users.map((user) => (
// //                   <option key={user._id} value={user._id}>
// //                     {user.name} ({user.email})
// //                   </option>
// //                 ))}
// //               </select>
// //             </div>
// //             <div className="mb-3">
// //               <label htmlFor="shareAmount" className="form-label">
// //                 Share Amount:
// //               </label>
// //               <input
// //                 id="shareAmount"
// //                 type="number"
// //                 value={shareAmount}
// //                 onChange={(e) => setShareAmount(e.target.value)}
// //                 className="form-control"
// //               />
// //             </div>
// //             <div>
// //               <button onClick={handleShareExpense} className="btn btn-success me-2">
// //                 Confirm Share
// //               </button>
// //               <button onClick={() => setShareExpenseVisible(false)} className="btn btn-danger">
// //                 Cancel
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       )}

// //       {/* Recommendations Section */}
// //       <button type="button" onClick={handleGetRecommendations} className="btn btn-info mb-4">
// //         Get Recommendations
// //       </button>

// //       {/* Recommendations Modal */}
// //       {showModal && (
// //         <div className="modal-overlay">
// //           <div className="modal-content">
// //             <button className="btn-close" onClick={() => setShowModal(false)}>
// //               &times;
// //             </button>
// //             <h2 className="mb-3">Recommendations</h2>
// //             <div>
// //               {recommendations.split('\n').map((line, index) => {
// //                 if (line.startsWith('* **')) {
// //                   return (
// //                     <p key={index} className="fw-bold ms-3">
// //                       {line.replace('* **', '')}
// //                     </p>
// //                   );
// //                 } else if (line.startsWith('**')) {
// //                   return (
// //                     <p key={index} className="ms-4">
// //                       {line.replace('**', '- ')}
// //                     </p>
// //                   );
// //                 }
// //                 return <p key={index}>{line}</p>;
// //               })}
// //             </div>
// //           </div>
// //         </div>
// //       )}

// //       {/* Shared Expenses Section */}
// //       <div className="mb-4">
// //         <h2>Shared Expenses</h2>
// //         {sharedExpenses.length === 0 ? (
// //           <p>No shared expenses yet.</p>
// //         ) : (
// //           <ul className="list-group">
// //             {sharedExpenses.map((shared) => (
// //               <li key={shared._id} className="list-group-item">
// //                 {shared.expense.category}: ₹{shared.sharedAmount}{' '}
// //                 {shared.sharedBy._id === currentUser._id
// //                   ? `shared with ${shared.sharedWith.name}`
// //                   : `received from ${shared.sharedBy.name}`}{' '}
// //                 on {new Date(shared.sharedAt).toLocaleDateString()}
// //               </li>
// //             ))}
// //           </ul>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Expenses;


// // src/Expenses.js
// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './Expenses.css'; // custom CSS for modal styles

// const Expenses = () => {
//   // Existing states
//   const [amount, setAmount] = useState('');
//   const [category, setCategory] = useState('');
//   const [date, setDate] = useState('');
//   const [expenses, setExpenses] = useState([]);
//   const [recommendations, setRecommendations] = useState('');
//   const [sharedExpenses, setSharedExpenses] = useState([]);

//   // New states for expense sharing UI
//   const [shareExpenseVisible, setShareExpenseVisible] = useState(false);
//   const [selectedExpense, setSelectedExpense] = useState(null);
//   const [users, setUsers] = useState([]);
//   const [selectedUser, setSelectedUser] = useState('');
//   const [shareAmount, setShareAmount] = useState('');

//   // New states for modal and loading spinner
//   const [showModal, setShowModal] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const currentUser = JSON.parse(localStorage.getItem('currentUser'));
//   const navigate = useNavigate();

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

//   // Fetch shared expenses for the current user
//   const fetchSharedExpenses = async () => {
//     try {
//       const response = await fetch(`http://localhost:5001/api/shared-expenses/${currentUser._id}`);
//       if (response.ok) {
//         const data = await response.json();
//         setSharedExpenses(data);
//       } else {
//         alert('Error fetching shared expenses.');
//       }
//     } catch (error) {
//       console.error('Error fetching shared expenses:', error);
//     }
//   };

//   useEffect(() => {
//     if (currentUser) {
//       fetchExpenses();
//       fetchSharedExpenses();
//     } else {
//       // Redirect to login if there is no logged in user
//       navigate('/login');
//     }
//   }, [currentUser, navigate]);

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

//   // Opens the sharing panel for a specific expense.
//   const handleOpenShare = async (expense) => {
//     setSelectedExpense(expense);
//     setShareExpenseVisible(true);
//     try {
//       const response = await fetch('http://localhost:5001/api/users');
//       if (response.ok) {
//         const data = await response.json();
//         const filteredUsers = data.filter(user => user._id !== currentUser._id);
//         setUsers(filteredUsers);
//       } else {
//         alert('Error fetching users.');
//       }
//     } catch (error) {
//       console.error('Error fetching users:', error);
//     }
//   };

//   // Handles the actual sharing of the expense.
//   const handleShareExpense = async () => {
//     if (isNaN(shareAmount) || Number(shareAmount) <= 0) {
//       alert('Please enter a valid amount to share.');
//       return;
//     }
//     if (Number(shareAmount) > Number(selectedExpense.amount)) {
//       alert('Shared amount cannot exceed the original expense amount.');
//       return;
//     }
//     try {
//       const response = await fetch('http://localhost:5001/api/expenses/share', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           expenseId: selectedExpense._id,
//           sharedBy: currentUser._id,
//           sharedWith: selectedUser,
//           sharedAmount: parseFloat(shareAmount),
//         }),
//       });
//       if (response.ok) {
//         await fetchSharedExpenses();
//         setShareExpenseVisible(false);
//         setSelectedExpense(null);
//         setSelectedUser('');
//         setShareAmount('');
//         alert('Expense shared successfully.');
//       } else {
//         alert('Error sharing expense.');
//       }
//     } catch (error) {
//       console.error('Error sharing expense:', error);
//     }
//   };

//   // Modified recommendation handler: Shows modal immediately and displays a loading spinner.
//   const handleGetRecommendations = async () => {
//     setShowModal(true);
//     setLoading(true);
//     try {
//       const response = await fetch('http://localhost:5002/api/ai-recommendations', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ user: currentUser, expenses }),
//       });
//       if (response.ok) {
//         const data = await response.json();
//         setRecommendations(data.text);
//       } else {
//         alert('Error fetching recommendations.');
//       }
//     } catch (error) {
//       console.error('Error fetching recommendations:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="container mt-5" style={{ fontFamily: 'Arial, sans-serif' }}>
//       <h1 className="mb-4">Expense Tracker</h1>

//       {/* Add Expense Form */}
//       <form onSubmit={handleAddExpense} className="mb-4">
//         <div className="row g-2">
//           <div className="col-md-3">
//             <input
//               type="text"
//               placeholder="Amount"
//               value={amount}
//               onChange={(e) => setAmount(e.target.value)}
//               className="form-control"
//             />
//           </div>
//           <div className="col-md-3">
//             <input
//               type="text"
//               placeholder="Category"
//               value={category}
//               onChange={(e) => setCategory(e.target.value)}
//               className="form-control"
//             />
//           </div>
//           <div className="col-md-3">
//             <input
//               type="date"
//               value={date}
//               onChange={(e) => setDate(e.target.value)}
//               className="form-control"
//             />
//           </div>
//           <div className="col-md-3">
//             <button type="submit" className="btn btn-primary w-100">
//               Add Expense
//             </button>
//           </div>
//         </div>
//       </form>

//       {/* Expenses List */}
//       <ul className="list-group mb-4">
//         {expenses.map((expense) => (
//           <li key={expense._id} className="list-group-item d-flex justify-content-between align-items-center">
//             <span>
//               {expense.category}: ₹{expense.amount} on {expense.date}
//             </span>
//             <button onClick={() => handleOpenShare(expense)} className="btn btn-outline-secondary btn-sm">
//               Share Expense
//             </button>
//           </li>
//         ))}
//       </ul>

//       {/* Share Expense Panel */}
//       {shareExpenseVisible && selectedExpense && (
//         <div className="card mb-4">
//           <div className="card-body">
//             <h3 className="card-title">
//               Share Expense: {selectedExpense.category} - ₹{selectedExpense.amount}
//             </h3>
//             <div className="mb-3">
//               <label htmlFor="userSelect" className="form-label">
//                 Select User to share with:
//               </label>
//               <select
//                 id="userSelect"
//                 value={selectedUser}
//                 onChange={(e) => setSelectedUser(e.target.value)}
//                 className="form-select"
//               >
//                 <option value="">Select User</option>
//                 {users.map((user) => (
//                   <option key={user._id} value={user._id}>
//                     {user.name} ({user.email})
//                   </option>
//                 ))}
//               </select>
//             </div>
//             <div className="mb-3">
//               <label htmlFor="shareAmount" className="form-label">
//                 Share Amount:
//               </label>
//               <input
//                 id="shareAmount"
//                 type="number"
//                 value={shareAmount}
//                 onChange={(e) => setShareAmount(e.target.value)}
//                 className="form-control"
//               />
//             </div>
//             <div>
//               <button onClick={handleShareExpense} className="btn btn-success me-2">
//                 Confirm Share
//               </button>
//               <button onClick={() => setShareExpenseVisible(false)} className="btn btn-danger">
//                 Cancel
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Recommendations Section */}
//       <button type="button" onClick={handleGetRecommendations} className="btn btn-info mb-4">
//         Get Recommendations
//       </button>

//       {/* Recommendations Modal */}
//       {showModal && (
//         <div className="modal-overlay">
//           <div className="modal-content">
//             <button className="btn-close" onClick={() => { setShowModal(false); setRecommendations(''); }}>
//               &times;
//             </button>
//             <h2 className="mb-3">Recommendations</h2>
//             {loading ? (
//               <div className="d-flex justify-content-center my-4">
//                 <div className="spinner-border text-primary" role="status">
//                   <span className="visually-hidden">Loading...</span>
//                 </div>
//               </div>
//             ) : (
//               <div>
//                 {recommendations.split('\n').map((line, index) => {
//                   if (line.startsWith('* **')) {
//                     return (
//                       <p key={index} className="fw-bold ms-3">
//                         {line.replace('* **', '')}
//                       </p>
//                     );
//                   } else if (line.startsWith('**')) {
//                     return (
//                       <p key={index} className="ms-4">
//                         {line.replace('**', '- ')}
//                       </p>
//                     );
//                   }
//                   return <p key={index}>{line}</p>;
//                 })}
//               </div>
//             )}
//           </div>
//         </div>
//       )}

//       {/* Shared Expenses Section */}
//       <div className="mb-4">
//         <h2>Shared Expenses</h2>
//         {sharedExpenses.length === 0 ? (
//           <p>No shared expenses yet.</p>
//         ) : (
//           <ul className="list-group">
//             {sharedExpenses.map((shared) => (
//               <li key={shared._id} className="list-group-item">
//                 {shared.expense.category}: ₹{shared.sharedAmount}{' '}
//                 {shared.sharedBy._id === currentUser._id
//                   ? `shared with ${shared.sharedWith.name}`
//                   : `received from ${shared.sharedBy.name}`}{' '}
//                 on {new Date(shared.sharedAt).toLocaleDateString()}
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Expenses;




// src/Expenses.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Expenses.css'; // make sure this file includes the modal styles below

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

  // New states for modal and loading spinner
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  const navigate = useNavigate();

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
    } else {
      // Redirect to login if there is no logged in user
      navigate('/login');
    }
  }, [currentUser, navigate]);

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

  // Recommendation handler: Immediately shows the modal with a loading spinner.
  const handleGetRecommendations = async () => {
    setShowModal(true);
    setLoading(true);
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
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5" style={{ fontFamily: 'Arial, sans-serif' }}>
      <h1 className="mb-4">Expense Tracker</h1>

      {/* Add Expense Form */}
      <form onSubmit={handleAddExpense} className="mb-4">
        <div className="row g-2">
          <div className="col-md-3">
            <input
              type="text"
              placeholder="Amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="col-md-3">
            <input
              type="text"
              placeholder="Category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="col-md-3">
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="col-md-3">
            <button type="submit" className="btn btn-primary w-100">
              Add Expense
            </button>
          </div>
        </div>
      </form>

      {/* Expenses List */}
      <ul className="list-group mb-4">
        {expenses.map((expense) => (
          <li key={expense._id} className="list-group-item d-flex justify-content-between align-items-center">
            <span>
              {expense.category}: ₹{expense.amount} on {expense.date}
            </span>
            <button onClick={() => handleOpenShare(expense)} className="btn btn-outline-secondary btn-sm">
              Share Expense
            </button>
          </li>
        ))}
      </ul>

      {/* Share Expense Panel */}
      {shareExpenseVisible && selectedExpense && (
        <div className="card mb-4">
          <div className="card-body">
            <h3 className="card-title">
              Share Expense: {selectedExpense.category} - ₹{selectedExpense.amount}
            </h3>
            <div className="mb-3">
              <label htmlFor="userSelect" className="form-label">
                Select User to share with:
              </label>
              <select
                id="userSelect"
                value={selectedUser}
                onChange={(e) => setSelectedUser(e.target.value)}
                className="form-select"
              >
                <option value="">Select User</option>
                {users.map((user) => (
                  <option key={user._id} value={user._id}>
                    {user.name} ({user.email})
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="shareAmount" className="form-label">
                Share Amount:
              </label>
              <input
                id="shareAmount"
                type="number"
                value={shareAmount}
                onChange={(e) => setShareAmount(e.target.value)}
                className="form-control"
              />
            </div>
            <div>
              <button onClick={handleShareExpense} className="btn btn-success me-2">
                Confirm Share
              </button>
              <button onClick={() => setShareExpenseVisible(false)} className="btn btn-danger">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Recommendations Section */}
      <button type="button" onClick={handleGetRecommendations} className="btn btn-info mb-4">
        Get Recommendations
      </button>

      {/* Recommendations Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="mb-0">Recommendations</h2>
              <button
                className="btn-close"
                onClick={() => {
                  setShowModal(false);
                  setRecommendations('');
                }}
              >
                &times;
              </button>
            </div>
            <div className="modal-body">
              {loading ? (
                <div className="d-flex justify-content-center my-4">
                  <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
              ) : (
                recommendations.split('\n').map((line, index) => {
                  if (line.startsWith('* **')) {
                    return (
                      <p key={index} className="fw-bold ms-3">
                        {line.replace('* **', '')}
                      </p>
                    );
                  } else if (line.startsWith('**')) {
                    return (
                      <p key={index} className="ms-4">
                        {line.replace('**', '- ')}
                      </p>
                    );
                  }
                  return <p key={index}>{line}</p>;
                })
              )}
            </div>
          </div>
        </div>
      )}

      {/* Shared Expenses Section */}
      <div className="mb-4">
        <h2>Shared Expenses</h2>
        {sharedExpenses.length === 0 ? (
          <p>No shared expenses yet.</p>
        ) : (
          <ul className="list-group">
            {sharedExpenses.map((shared) => (
              <li key={shared._id} className="list-group-item">
                {shared.expense.category}: ₹{shared.sharedAmount}{' '}
                {shared.sharedBy._id === currentUser._id
                  ? `shared with ${shared.sharedWith.name}`
                  : `received from ${shared.sharedBy.name}`}{' '}
                on {new Date(shared.sharedAt).toLocaleDateString()}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Expenses;
