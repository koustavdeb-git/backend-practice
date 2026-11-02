
require('dotenv').config();

const app = require("./src/app");

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});




console.log(process.env.JWT_SECRET ? 'JWT secret loaded' : 'JWT secret missing');