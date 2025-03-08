import logo from './logo.svg';
import './App.css';

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './Navbar/Navbar'; // Import the Navbar component
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import Login from './Login/Login';
import Signup from './Signup/Signup';
// import Expenses from './Expenses/Expenses';
// import Expenses

// import Login from './Login/Login.js';
// import Signup from './Signup/Signup';
// import Expenses from './Expenses.js/Expenses.js';
// import ExchangeRate from './ExchangeRate/Exchangerate.js';
// import Recommendations from './Recommendations/Recommendations.js';
// import Signup from './Signup/Signup';
import Expenses from './Expenses/Expenses';
import ExchangeRate from './Exchangerate/Exchangerate';
import Recommendations from './Recommendations/Recommendations';
function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/Signup" element={<Signup />} />
              <Route path="/Expenses" element={<Expenses />} />
              <Route path="/ExchangeRate" element={<ExchangeRate />} />
              {/* <Route path="/Recommendations" element={<Recommendations />} /> */}
            </Routes>
          </main>
        </div>
      </Router>

    </>
  );
}

export default App;



// // App.js
// import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// // import Navbar from './Navbar';
// // import Login from './Login';
// // import Signup from './Signup';
// // import Expenses from './Expenses';
// // import ExchangeRate from './ExchangeRate';
// // import Recommendations from './Recommendations';


// const App = () => {
//   return (
//     <Router>
//       <Navbar />
//       <Switch>
//         <Route exact path="/login" component={Login} />
//         <Route exact path="/signup" component={Signup} />
//         <Route exact path="/expenses" component={Expenses} />
//         <Route exact path="/exchange" component={ExchangeRate} />
//         <Route exact path="/recommendations" component={Recommendations} />
//         {/* Default route */}
//         <Route path="/" component={Login} />
//       </Switch>
//     </Router>
//   );
// };

// export default App;
