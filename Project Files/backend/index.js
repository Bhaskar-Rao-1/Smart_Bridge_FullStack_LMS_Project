const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const userRoutes = require('./routers/userRoutes');
const adminRoutes = require('./routers/adminRoutes');
const mongoose = require('mongoose');

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

app.use('/api/users', userRoutes);
app.use('/api/admin', adminRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
