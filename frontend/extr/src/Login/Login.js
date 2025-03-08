// // src/Login.js
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//   const [email, setEmail]       = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = (e) => {
//     e.preventDefault();
//     // Retrieve stored users (simulate backend)
//     const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
//     const user = storedUsers.find(u => u.email === email && u.password === password);
//     if (user) {
//       localStorage.setItem('currentUser', JSON.stringify(user));
//       navigate('/expenses');
//     } else {
//       alert('Invalid credentials. Please try again.');
//     }
//   };

//   return (
//     <div style={{ padding: '1rem' }}>
//       <h2>Login</h2>
//       <form onSubmit={handleLogin}>
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
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;



// src/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail]       = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5001/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
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
      console.error('Error during login:', error);
      alert('Error logging in.');
    }
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
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
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
