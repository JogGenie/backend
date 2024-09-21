"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = __importDefault(require("./db")); // Import the database connection
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
// Middleware to parse JSON
app.use(express_1.default.json());
// Test Route: Ping the server
app.get('/', (req, res) => {
    res.send('Server is running');
});
// Test Database Connection: Fetch all rows from a test table
app.get('/jobgenie_db', async (req, res) => {
    try {
        const result = await db_1.default.query('SELECT * FROM t1');
        res.json(result.rows);
    }
    catch (err) {
        console.error(err.message);
        res.status(500).send('Database error');
    }
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
//# sourceMappingURL=app.js.map