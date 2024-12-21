const express = require('express');
const bodyParser = require('body-parser');
const housingRoutes = require("./routes/housingRoutes")
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use('/api/housing', housingRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);

const port = process.env.PORT || 3000;
console.log(process.env.PORT);
app.listen(port, () => console.log(`Server started running on port ${port}`));