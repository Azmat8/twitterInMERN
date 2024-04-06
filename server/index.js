

const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors')
const axios = require('axios')

const app = express();

const corsOpts = {
    origin: "*",
    credentials: true,
    methods: ["GET", "POST", "HEAD", "PUT", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    exposedHeaders: ["Content-Type"],
};
app.use(cors(corsOpts));

const PORT = process.env.PORT || 8080;

// Connect to MongoDB
mongoose.connect('mongodb+srv://root:root@cluster0.9uojead.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => console.log('Connected to MongoDB'));

// Define User Schema
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    birthdate: String,
    username: {
        type: String,
        unique: true
    },
    selectedLanguages: [],
    selectedInterests: [],


});
const User = mongoose.model('User', userSchema);
const User2 = mongoose.model('users2', userSchema);
app.use(express.json());

// Signup endpoint
app.post('/signup', async (req, res) => {
    try {
        const { name, email, password, birthdate, username, selectedLanguages, selectedInterests } = req.body;

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: 'User already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);


        // Create new user
        const newUser = new User({ name, email, password: hashedPassword, birthdate, username, selectedLanguages, selectedInterests });
        await newUser.save();

        res.status(201).json({ data: newUser, message: 'User created successfully' });
    } catch (error) {
        console.error('Signup error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});


// Check if user already exists
app.post('/checkemail', async (req, res) => {
    try {
        const { name, email, password, } = req.body;

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: 'User already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // const existingUsername = await User.findOne({ username });
        // if (existingUsername) {
        //     return res.status(400).json({ error: 'Username already exists' });
        // }

        // Create new user
        const newUser = new User({ name, email, password: hashedPassword, });

        res.status(201).json({ data: newUser, message: 'User created successfully' });
    } catch (error) {
        console.error('Signup error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});


// check @username is valid
app.post('/checkusername', async (req, res) => {
    try {
        const { username } = req.body;

        // Check if user already exists
        const existingUserName = await User.findOne({ username });
        if (existingUserName) {
            return res.status(400).json({ error: '@UserName already exists' });
        }

        // Create new user
        const newUser = new User({ username });
        res.status(201).json({ data: newUser, message: '@UserName created successfully' });
    } catch (error) {
        console.error('UserName Eorro:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});




// Login endpoint
app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Check password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ error: 'Invalid password' });
        }

        // Generate JWT token
        const token = jwt.sign({ userId: user._id }, 'secret_key', { expiresIn: '9h' });

        res.json({ data: user, token });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Get user information
app.get('/user', verifyToken, async (req, res) => {
    try {
        const decoded = req.decoded;
        const user = await User.findById(decoded.userId);
        res.json({
            username: user.name,
            userId: user._id
        });
        console.log(user._id)
    } catch (error) {
        console.error('User info error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.get('/getAllUsers', async (req, res) => {
    try {
        const user = await User.find();
        console.log(user);
        res.json({
            data: user
        });
        console.log(user._id)
    } catch (error) {
        console.error('User info error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});


// Logout endpoint
app.get('/logout', (req, res) => {
    res.clearCookie('token').send('Logged out successfully');
});



// Middleware to verify JWT token
function verifyToken(req, res, next) {
    const token = req.headers['authorization'];
    if (!token) {
        return res.status(403).json({ error: 'Token not provided' });
    }

    jwt.verify(token, 'secret_key', (err, decoded) => {
        if (err) {
            return res.status(401).json({ error: 'Failed to authenticate token' });
        }
        req.decoded = decoded;
        next();
    });
}


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);

});
