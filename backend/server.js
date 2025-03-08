// // // server.js
// // const express    = require('express');
// // const mongoose   = require('mongoose');
// // const bcrypt     = require('bcrypt');
// // const cors       = require('cors');
// // require('dotenv').config();

// // const app = express();

// // // Middlewares
// // app.use(express.json());
// // app.use(cors());

// // // Connect to MongoDB using your URI (set in .env as MONGODB_URI)
// // const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://21bd1a661tcsma:Shashi@shashireact.ebrjsgd.mongodb.net/';
// // mongoose
// //   .connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
// //   .then(() => console.log('MongoDB connected'))
// //   .catch(err => console.error('MongoDB connection error:', err));

// // /* =======================
// //    SCHEMA DEFINITIONS
// //    ======================= */

// // // User Schema – storing basic user info
// // const userSchema = new mongoose.Schema({
// //   name:      { type: String, required: true },
// //   email:     { type: String, required: true, unique: true },
// //   password:  { type: String, required: true },
// //   createdAt: { type: Date, default: Date.now }
// // });

// // // Expense Schema – each expense links to a user
// // const expenseSchema = new mongoose.Schema({
// //   user:      { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
// //   amount:    { type: Number, required: true },
// //   category:  { type: String, required: true },
// //   date:      { type: Date, default: Date.now },
// //   budget_id: { type: Number } // Optional field to link to a budget if needed
// // });

// // // Exchange Rate Schema – store exchange queries made by a user
// // const exchangeRateSchema = new mongoose.Schema({
// //   user:          { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
// //   baseCurrency:  { type: String, required: true },
// //   targetCurrency:{ type: String, required: true },
// //   rate:          { type: Number, required: true },
// //   date:          { type: Date, default: Date.now }
// // });

// // // Create models
// // const User         = mongoose.model('User', userSchema);
// // const Expense      = mongoose.model('Expense', expenseSchema);
// // const ExchangeRate = mongoose.model('ExchangeRate', exchangeRateSchema);

// // /* =======================
// //    ROUTE HANDLERS
// //    ======================= */

// // // 1. User Signup Endpoint
// // app.post('/api/signup', async (req, res) => {
// //   try {
// //     const { name, email, password } = req.body;
// //     // Check if user exists
// //     const existingUser = await User.findOne({ email });
// //     if (existingUser) return res.status(400).json({ message: 'User already exists' });

// //     // Hash password before saving
// //     const hashedPassword = await bcrypt.hash(password, 10);
// //     const user = new User({ name, email, password: hashedPassword });
// //     await user.save();
// //     res.status(201).json({ message: 'User created successfully', user });
// //   } catch (error) {
// //     res.status(500).json({ message: 'Error signing up', error });
// //   }
// // });

// // // 2. User Login Endpoint
// // app.post('/api/login', async (req, res) => {
// //   try {
// //     const { email, password } = req.body;
// //     const user = await User.findOne({ email });
// //     if (!user)
// //       return res.status(400).json({ message: 'Invalid email or password' });

// //     const isMatch = await bcrypt.compare(password, user.password);
// //     if (!isMatch)
// //       return res.status(400).json({ message: 'Invalid email or password' });

// //     res.status(200).json({ message: 'Login successful', user });
// //   } catch (error) {
// //     res.status(500).json({ message: 'Error logging in', error });
// //   }
// // });

// // // 3. Add Expense Endpoint
// // app.post('/api/expenses', async (req, res) => {
// //   try {
// //     const { userId, amount, category, date, budget_id } = req.body;
// //     const expense = new Expense({
// //       user: userId,
// //       amount,
// //       category,
// //       date,
// //       budget_id
// //     });
// //     await expense.save();
// //     res.status(201).json({ message: 'Expense added successfully', expense });
// //   } catch (error) {
// //     res.status(500).json({ message: 'Error adding expense', error });
// //   }
// // });

// // // 4. Get Expenses for a User
// // app.get('/api/expenses/:userId', async (req, res) => {
// //   try {
// //     const { userId } = req.params;
// //     const expenses = await Expense.find({ user: userId });
// //     res.status(200).json(expenses);
// //   } catch (error) {
// //     res.status(500).json({ message: 'Error fetching expenses', error });
// //   }
// // });

// // // 5. Save Exchange Rate Details Endpoint
// // app.post('/api/exchange', async (req, res) => {
// //   try {
// //     const { userId, baseCurrency, targetCurrency, rate, date } = req.body;
// //     const exchangeRate = new ExchangeRate({
// //       user: userId,
// //       baseCurrency,
// //       targetCurrency,
// //       rate,
// //       date
// //     });
// //     await exchangeRate.save();
// //     res.status(201).json({ message: 'Exchange rate saved successfully', exchangeRate });
// //   } catch (error) {
// //     res.status(500).json({ message: 'Error saving exchange rate', error });
// //   }
// // });

// // // 6. Get Exchange Rate Details for a User
// // app.get('/api/exchange/:userId', async (req, res) => {
// //   try {
// //     const { userId } = req.params;
// //     const exchanges = await ExchangeRate.find({ user: userId });
// //     res.status(200).json(exchanges);
// //   } catch (error) {
// //     res.status(500).json({ message: 'Error fetching exchange rates', error });
// //   }
// // });

// // // 7. Get User Details (with expenses and exchange history)
// // app.get('/api/user/:id', async (req, res) => {
// //   try {
// //     const user = await User.findById(req.params.id);
// //     if (!user)
// //       return res.status(404).json({ message: 'User not found' });

// //     const expenses = await Expense.find({ user: user._id });
// //     const exchanges = await ExchangeRate.find({ user: user._id });
// //     res.status(200).json({ user, expenses, exchanges });
// //   } catch (error) {
// //     res.status(500).json({ message: 'Error fetching user details', error });
// //   }
// // });

// // /* =======================
// //    START THE SERVER
// //    ======================= */
// // const PORT = process.env.PORT || 5001;
// // app.listen(PORT, () => {
// //   console.log(`Server running on port ${PORT}`);
// // });





// // server.js
// const express = require('express');
// const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');
// const cors = require('cors');
// require('dotenv').config();

// const app = express();

// // Middlewares
// app.use(express.json());
// app.use(cors());

// // Use port 5001
// const PORT = process.env.PORT || 5001;

// // Connect to MongoDB
// mongoose.connect(
//   "mongodb+srv://21bd1a661tcsma:Shashi@shashireact.ebrjsgd.mongodb.net/adain?retryWrites=true&w=majority",
//   { useNewUrlParser: true, useUnifiedTopology: true }
// )
// .then(() => console.log('MongoDB connected to adain'))
// .catch((err) => console.error('MongoDB connection error:', err));


// /* =======================
//    SCHEMA DEFINITIONS
//    ======================= */

// // User Schema – stores basic user info
// const userSchema = new mongoose.Schema({
//   name:      { type: String, required: true },
//   email:     { type: String, required: true, unique: true },
//   password:  { type: String, required: true },
//   createdAt: { type: Date, default: Date.now }
// });

// // Expense Schema – links each expense to a user
// const expenseSchema = new mongoose.Schema({
//   user:     { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
//   amount:   { type: Number, required: true },
//   category: { type: String, required: true },
//   date:     { type: Date, default: Date.now }
// });

// // Exchange Rate Schema – store exchange queries made by a user
// const exchangeRateSchema = new mongoose.Schema({
//   user:           { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
//   baseCurrency:   { type: String, required: true },
//   targetCurrency: { type: String, required: true },
//   rate:           { type: Number, required: true },
//   date:           { type: Date, default: Date.now }
// });

// // Create models
// const User = mongoose.model('User', userSchema);
// const Expense = mongoose.model('Expense', expenseSchema);
// const ExchangeRate = mongoose.model('ExchangeRate', exchangeRateSchema);

// /* =======================
//    ROUTE HANDLERS
//    ======================= */

// // 1. Signup Endpoint
// app.post('/api/signup', async (req, res) => {
//   try {
//     const { name, email, password } = req.body;
//     const existingUser = await User.findOne({ email });
//     if (existingUser)
//       return res.status(400).json({ message: 'User already exists' });

//     const hashedPassword = await bcrypt.hash(password, 10);
//     const user = new User({ name, email, password: hashedPassword });
//     await user.save();
//     res.status(201).json({ message: 'User created successfully', user });
//   } catch (error) {
//     res.status(500).json({ message: 'Error signing up', error });
//   }
// });

// // 2. Login Endpoint
// app.post('/api/login', async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     const user = await User.findOne({ email });
//     if (!user)
//       return res.status(400).json({ message: 'Invalid email or password' });

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch)
//       return res.status(400).json({ message: 'Invalid email or password' });

//     res.status(200).json({ message: 'Login successful', user });
//   } catch (error) {
//     res.status(500).json({ message: 'Error logging in', error });
//   }
// });

// // 3. Add Expense Endpoint
// app.post('/api/expenses', async (req, res) => {
//   try {
//     const { userId, amount, category, date } = req.body;
//     const expense = new Expense({ user: userId, amount, category, date });
//     await expense.save();
//     res.status(201).json({ message: 'Expense added successfully', expense });
//   } catch (error) {
//     res.status(500).json({ message: 'Error adding expense', error });
//   }
// });

// // 4. Get Expenses for a User
// app.get('/api/expenses/:userId', async (req, res) => {
//   try {
//     const expenses = await Expense.find({ user: req.params.userId });
//     res.status(200).json(expenses);
//   } catch (error) {
//     res.status(500).json({ message: 'Error fetching expenses', error });
//   }
// });

// // 5. Save Exchange Rate Details Endpoint
// app.post('/api/exchange', async (req, res) => {
//   try {
//     const { userId, baseCurrency, targetCurrency, rate, date } = req.body;
//     const exchangeRate = new ExchangeRate({ user: userId, baseCurrency, targetCurrency, rate, date });
//     await exchangeRate.save();
//     res.status(201).json({ message: 'Exchange rate saved successfully', exchangeRate });
//   } catch (error) {
//     res.status(500).json({ message: 'Error saving exchange rate', error });
//   }
// });

// // 6. Get Exchange Rate Details for a User
// app.get('/api/exchange/:userId', async (req, res) => {
//   try {
//     const exchanges = await ExchangeRate.find({ user: req.params.userId });
//     res.status(200).json(exchanges);
//   } catch (error) {
//     res.status(500).json({ message: 'Error fetching exchange rates', error });
//   }
// });

// // 7. Get User Details (with expenses and exchange history)
// app.get('/api/user/:id', async (req, res) => {
//   try {
//     const user = await User.findById(req.params.id);
//     if (!user)
//       return res.status(404).json({ message: 'User not found' });

//     const expenses = await Expense.find({ user: user._id });
//     const exchanges = await ExchangeRate.find({ user: user._id });
//     res.status(200).json({ user, expenses, exchanges });
//   } catch (error) {
//     res.status(500).json({ message: 'Error fetching user details', error });
//   }
// });

// /* =======================
//    START THE SERVER
//    ======================= */
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });





// server.js
const express    = require('express');
const mongoose   = require('mongoose');
const bcrypt     = require('bcrypt');
const cors       = require('cors');
require('dotenv').config();

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// Use port 5001
const PORT = process.env.PORT || 5001;

// Connect to MongoDB
mongoose
  .connect("mongodb+srv://21bd1a661tcsma:Shashi@shashireact.ebrjsgd.mongodb.net/adain?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

/* =======================
   SCHEMA DEFINITIONS
   ======================= */

// User Schema – stores basic user info
const userSchema = new mongoose.Schema({
  name:      { type: String, required: true },
  email:     { type: String, required: true, unique: true },
  password:  { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

// Expense Schema – now supports sharing an expense with other users
const expenseSchema = new mongoose.Schema({
  user:      { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  amount:    { type: Number, required: true },
  category:  { type: String, required: true },
  date:      { type: Date, default: Date.now },
  // New field: list of users (by ObjectId) with whom this expense is shared
  sharedWith: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
});

// Exchange Rate Schema – store exchange queries made by a user
const exchangeRateSchema = new mongoose.Schema({
  user:           { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  baseCurrency:   { type: String, required: true },
  targetCurrency: { type: String, required: true },
  rate:           { type: Number, required: true },
  date:           { type: Date, default: Date.now }
});

// Create models
const User         = mongoose.model('User', userSchema);
const Expense      = mongoose.model('Expense', expenseSchema);
const ExchangeRate = mongoose.model('ExchangeRate', exchangeRateSchema);

/* =======================
   ROUTE HANDLERS
   ======================= */

// 1. Signup Endpoint
app.post('/api/signup', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: 'User already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hashedPassword });
    await user.save();
    res.status(201).json({ message: 'User created successfully', user });
  } catch (error) {
    res.status(500).json({ message: 'Error signing up', error });
  }
});

// 2. Login Endpoint
app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user)
      return res.status(400).json({ message: 'Invalid email or password' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: 'Invalid email or password' });

    res.status(200).json({ message: 'Login successful', user });
  } catch (error) {
    res.status(500).json({ message: 'Error logging in', error });
  }
});

// 3. Add Expense Endpoint (supports shared expense)
app.post('/api/expenses', async (req, res) => {
  try {
    const { userId, amount, category, date, sharedWith } = req.body;
    const expense = new Expense({
      user: userId,
      amount,
      category,
      date,
      sharedWith: sharedWith || []
    });
    await expense.save();
    res.status(201).json({ message: 'Expense added successfully', expense });
  } catch (error) {
    res.status(500).json({ message: 'Error adding expense', error });
  }
});

// 4. Get Expenses for a User (owner or shared)
app.get('/api/expenses/:userId', async (req, res) => {
  try {
    // Return expenses where the user is either the creator or included in sharedWith
    const expenses = await Expense.find({
      $or: [
        { user: req.params.userId },
        { sharedWith: req.params.userId }
      ]
    }).sort({ date: -1 });
    res.status(200).json(expenses);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching expenses', error });
  }
});

// 5. Save Exchange Rate Details Endpoint
app.post('/api/exchange', async (req, res) => {
  try {
    const { userId, baseCurrency, targetCurrency, rate, date } = req.body;
    const exchangeRate = new ExchangeRate({
      user: userId,
      baseCurrency,
      targetCurrency,
      rate,
      date
    });
    await exchangeRate.save();
    res.status(201).json({ message: 'Exchange rate saved successfully', exchangeRate });
  } catch (error) {
    res.status(500).json({ message: 'Error saving exchange rate', error });
  }
});

// 6. Get Exchange Rate Details for a User
app.get('/api/exchange/:userId', async (req, res) => {
  try {
    const exchanges = await ExchangeRate.find({ user: req.params.userId });
    res.status(200).json(exchanges);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching exchange rates', error });
  }
});

// 7. Get User Details (with expenses and exchange history)
app.get('/api/user/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user)
      return res.status(404).json({ message: 'User not found' });

    const expenses = await Expense.find({ 
      $or: [
        { user: user._id },
        { sharedWith: user._id }
      ]
    });
    const exchanges = await ExchangeRate.find({ user: user._id });
    res.status(200).json({ user, expenses, exchanges });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching user details', error });
  }
});

// 8. Get User By Email (for sharing expense)
app.get('/api/user/email/:email', async (req, res) => {
  try {
    const user = await User.findOne({ email: req.params.email });
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching user by email', error });
  }
});

/* =======================
   START THE SERVER
   ======================= */
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
