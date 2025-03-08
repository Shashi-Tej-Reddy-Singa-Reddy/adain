const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const cors = require('cors');
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
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  income: { type: Number, required: true },  // Added income field to dynamically calculate the threshold
  createdAt: { type: Date, default: Date.now },
});

// Expense Schema
const expenseSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  amount: { type: Number, required: true },
  category: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

const User = mongoose.model('User', userSchema);
const Expense = mongoose.model('Expense', expenseSchema);

/* =======================
   ROUTE HANDLERS
   ======================= */

// 1. Endpoint to add expense
app.post('/api/expenses', async (req, res) => {
  try {
    const { userId, amount, category, date } = req.body;
    const expense = new Expense({
      user: userId,
      amount,
      category,
      date,
    });
    await expense.save();
    res.status(201).json({ message: 'Expense added successfully', expense });
  } catch (error) {
    res.status(500).json({ message: 'Error adding expense', error });
  }
});

// 2. Endpoint to get user expenses and calculate if exceeded threshold
app.get('/api/check-expenses/:userId', async (req, res) => {
  try {
    const userId = req.params.userId;

    // Fetch user information
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: 'User not found' });

    // Dynamically calculate threshold (20% of user's income in this example)
    const threshold = user.income * 0.2;

    // Fetch today's expenses for the user
    const today = new Date();
    const startOfDay = new Date(today.setHours(0, 0, 0, 0));
    const endOfDay = new Date(today.setHours(23, 59, 59, 999));

    const dailyExpenses = await Expense.aggregate([
      {
        $match: {
          user: mongoose.Types.ObjectId(userId),
          date: { $gte: startOfDay, $lt: endOfDay },
        },
      },
      {
        $group: {
          _id: null,
          totalAmount: { $sum: '$amount' },
        },
      },
    ]);

    const totalDailyExpenses = dailyExpenses.length > 0 ? dailyExpenses[0].totalAmount : 0;

    // Check if daily expenses exceed the threshold
    if (totalDailyExpenses > threshold) {
      return res.status(200).json({
        message: 'Alert: Your daily expenses have exceeded the threshold!',
        dailyExpenses: totalDailyExpenses,
        threshold,
      });
    } else {
      return res.status(200).json({
        message: 'Your daily expenses are within the threshold.',
        dailyExpenses: totalDailyExpenses,
        threshold,
      });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error checking expenses', error });
  }
});

/* =======================
   START THE SERVER
   ======================= */
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
