const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();
const port = 3001;
require('dotenv').config();

app.use(cors());

// RDSの接続情報を設定
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

// データベースに接続
db.connect(err => {
    if (err) {
        console.error('Database connection failed:', err);
    } else {
        console.log('Successfully connected to the database.');
    }
});

app.use(express.json());

// APIエンドポイントの定義
app.get('/api/products', (req, res) => {
    const query = 'SELECT * FROM products';
    db.query(query, (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json(results);
    });
});

app.post('/api/products', (req, res) => {
    const { name, price } = req.body;
    const query = 'INSERT INTO products (name, price) VALUES (?, ?)';
    db.query(query, [name, price], (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json({ id: results.insertId, name, price });
    });
});



// サーバーを起動
app.listen(port, () => {
    console.log(`Backend server listening at http://localhost:${port}`);
});