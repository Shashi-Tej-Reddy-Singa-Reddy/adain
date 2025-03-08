// // // // src/Login.js
// // // import React, { useState } from 'react';
// // // import { useNavigate } from 'react-router-dom';

// // // const Login = () => {
// // //   const [email, setEmail]       = useState('');
// // //   const [password, setPassword] = useState('');
// // //   const navigate = useNavigate();

// // //   const handleLogin = (e) => {
// // //     e.preventDefault();
// // //     // Retrieve stored users (simulate backend)
// // //     const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
// // //     const user = storedUsers.find(u => u.email === email && u.password === password);
// // //     if (user) {
// // //       localStorage.setItem('currentUser', JSON.stringify(user));
// // //       navigate('/expenses');
// // //     } else {
// // //       alert('Invalid credentials. Please try again.');
// // //     }
// // //   };

// // //   return (
// // //     <div style={{ padding: '1rem' }}>
// // //       <h2>Login</h2>
// // //       <form onSubmit={handleLogin}>
// // //         <div>
// // //           <label>Email:&nbsp;
// // //             <input
// // //               type="email"
// // //               value={email}
// // //               onChange={(e)=>setEmail(e.target.value)}
// // //               required
// // //             />
// // //           </label>
// // //         </div>
// // //         <div>
// // //           <label>Password:&nbsp;
// // //             <input
// // //               type="password"
// // //               value={password}
// // //               onChange={(e)=>setPassword(e.target.value)}
// // //               required
// // //             />
// // //           </label>
// // //         </div>
// // //         <button type="submit">Login</button>
// // //       </form>
// // //     </div>
// // //   );
// // // };

// // // export default Login;



// // // src/Login.js
// // import React, { useState } from 'react';
// // import { useNavigate } from 'react-router-dom';

// // const Login = () => {
// //   const [email, setEmail]       = useState('');
// //   const [password, setPassword] = useState('');
// //   const navigate = useNavigate();

// //   const handleLogin = async (e) => {
// //     e.preventDefault();
// //     try {
// //       const response = await fetch('http://localhost:5001/api/login', {
// //         method: 'POST',
// //         headers: { 'Content-Type': 'application/json' },
// //         body: JSON.stringify({ email, password })
// //       });
// //       if (response.ok) {
// //         const data = await response.json();
// //         localStorage.setItem('currentUser', JSON.stringify(data.user));
// //         navigate('/Expenses');
// //       } else {
// //         const errData = await response.json();
// //         alert(errData.message);
// //       }
// //     } catch (error) {
// //       console.error('Error during login:', error);
// //       alert('Error logging in.');
// //     }
// //   };

// //   return (
// //     <div style={{ padding: '1rem' }}>
// //       <h2>Login</h2>
// //       <form onSubmit={handleLogin}>
// //         <div>
// //           <label>Email:&nbsp;
// //             <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
// //           </label>
// //         </div>
// //         <div>
// //           <label>Password:&nbsp;
// //             <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
// //           </label>
// //         </div>
// //         <button type="submit">Login</button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default Login;



// // src/Login.js
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('http://localhost:5001/api/login', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ email, password }),
//       });
//       if (response.ok) {
//         const data = await response.json();
//         localStorage.setItem('currentUser', JSON.stringify(data.user));
//         navigate('/Expenses');
//       } else {
//         const errData = await response.json();
//         alert(errData.message);
//       }
//     } catch (error) {
//       console.error('Error during login:', error);
//       alert('Error logging in.');
//     }
//   };

//   return (
//     <div
//       style={{
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         height: '100vh',
//         backgroundColor: '#f5f5f5',
//         fontFamily: 'Arial, sans-serif',
//       }}
//     >
//       <div
//         style={{
//           padding: '2rem',
//           border: '1px solid #ddd',
//           borderRadius: '8px',
//           backgroundColor: '#fff',
//           boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
//         }}
//       >
//         <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>Login</h2>
//         <form
//           onSubmit={handleLogin}
//           style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
//         >
//           <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
//             <label>Email:</label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//               style={{
//                 padding: '0.75rem',
//                 borderRadius: '6px',
//                 border: '1px solid #ccc',
//                 fontSize: '1rem',
//                 outlineColor: '#6200ea',
//               }}
//             />
//           </div>
//           <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
//             <label>Password:</label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//               style={{
//                 padding: '0.75rem',
//                 borderRadius: '6px',
//                 border: '1px solid #ccc',
//                 fontSize: '1rem',
//                 outlineColor: '#6200ea',
//               }}
//             />
//           </div>
//           <button
//             type="submit"
//             style={{
//               padding: '0.75rem',
//               borderRadius: '6px',
//               border: 'none',
//               backgroundColor: '#6200ea',
//               color: 'white',
//               fontWeight: 'bold',
//               cursor: 'pointer',
//               fontSize: '1rem',
//             }}
//           >
//             Login
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;



import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5001/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
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
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Password</label>
            <input
              type="password"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
