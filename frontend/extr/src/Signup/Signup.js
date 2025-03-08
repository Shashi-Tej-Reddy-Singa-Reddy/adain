import './Signup.css'; // import the CSS file

// // src/Signup.js
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Signup = () => {
//   const [name, setName]       = useState('');
//   const [email, setEmail]     = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleSignup = (e) => {
//     e.preventDefault();
//     // Save user details (simulate backend user registration)
//     const users = JSON.parse(localStorage.getItem('users')) || [];
//     // Check if user already exists
//     if (users.find(u => u.email === email)) {
//       alert('User with this email already exists.');
//       return;
//     }
//     const newUser = { id: Date.now(), name, email, password };
//     users.push(newUser);
//     localStorage.setItem('users', JSON.stringify(users));
//     localStorage.setItem('currentUser', JSON.stringify(newUser));
//     navigate('/expenses');
//   };

//   return (
//     <div style={{ padding: '1rem' }}>
//       <h2>Signup</h2>
//       <form onSubmit={handleSignup}>
//         <div>
//           <label>Name:&nbsp;
//             <input
//               type="text"
//               value={name}
//               onChange={(e)=>setName(e.target.value)}
//               required
//             />
//           </label>
//         </div>
//         <div>
//           <label>Email:&nbsp;
//             <input
//               type="email"
//               value={email}
//               onChange={(e)=>setEmail(e.target.value)}
//               required
//             />
//           </label>
//         </div>
//         <div>
//           <label>Password:&nbsp;
//             <input
//               type="password"
//               value={password}
//               onChange={(e)=>setPassword(e.target.value)}
//               required
//             />
//           </label>
//         </div>
//         <button type="submit">Signup</button>
//       </form>
//     </div>
//   );
// };

// export default Signup;



// src/Signup.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [name, setName]       = useState('');
  const [email, setEmail]     = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5001/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password })
      });
      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('currentUser', JSON.stringify(data.user));
        navigate('/Expenses');
      } else {
        const errData = await response.json();
        alert(errData.message);
      }
    } catch (error) {
      console.error('Error during signup:', error);
      alert('Error signing up.');
    }
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Signup</h2>
      <form onSubmit={handleSignup}>
        <div>
          <label>Name:&nbsp;
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
          </label>
        </div>
        <div>
          <label>Email:&nbsp;
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </label>
        </div>
        <div>
          <label>Password:&nbsp;
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </label>
        </div>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
