
const pool = require('../config/db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // 1. Validate the request body
        if (!name || !email || !password) {
            return res.status(400).json({
                message: 'Name, email and password are required'
            });
        }

        // 2. Check if the user already exists
        const existingUser = await pool.query(
            'SELECT id FROM users WHERE email = $1',
            [email]
        );

        if (existingUser.rows.length > 0) {
            return res.status(409).json({
                message: 'User already exists'
            });
        }

        // 3. Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // 4. Insert the user into PostgreSQL
        const result = await pool.query(
            `INSERT INTO users (name, email, password_hash)
             VALUES ($1, $2, $3)
             RETURNING id, name, email`,
            [name, email, hashedPassword]
        );

        // 5. Send the response
        return res.status(201).json({
            message: 'User registered successfully',
            user: result.rows[0]
        });

    } catch (error) {
        console.error('Registration error:', error);

        return res.status(500).json({
            message: 'Internal server error'
        });
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body
        if (!email || !password) {
            return res.status(400).json({
                message: 'Email and password are required'
            });
        }

        const result = await pool.query(
            'SELECT * FROM users WHERE email = $1',
            [email]
        );

        if (result.rows.length === 0) {
            return res.status(401).json({
                message: 'Invalid email or password'
            });
        }

        const user = result.rows[0];

        const isPasswordValid = await bcrypt.compare(
            password,
            user.password_hash
        );

        if (!isPasswordValid) {
            return res.status(401).json({
                message: 'Invalid email or password'
            });
        }

        const token = jwt.sign(
            { id: user.id },
            process.env.JWT_SECRET,
            { expiresIn: '1d' }
        );

        return res.status(200).json({
            message: 'Login successful',
            token,
            user: {
                id: user.id,
                name: user.name,
                email: user.email
            }
        });

    } catch (error) {
        console.error('Login error', error)

        return res.status(500).json({
            message: 'Internal server error'
        })
    }
}

const getProfile = async (req, res) => {
    try {
        const result = await pool.query(
            'SELECT id, name, email FROM users WHERE id = $1',
            [req.user.id]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({
                message: 'User not found'
            });
        }

        return res.status(200).json({
            user: result.rows[0]
        });
    } catch (error) {
        console.error('Profile error:', error);

        return res.status(500).json({
            message: 'Internal server error'
        });
    }
};

module.exports = { register, login, getProfile };
