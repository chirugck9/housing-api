const express = require('express');
const bodyParser = require('body-parser');
const housingRoutes = require("./routes/housingRoutes")
const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use('/api/housing', housingRoutes);

const port = process.env.PORT || 3000;
console.log(process.env.PORT);
app.listen(port, () => console.log(`Server started running on port ${port}`));