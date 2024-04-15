const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');

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
    profilePicture: [],
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }],
    follows: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    followers: {
        type: [String],
        default: [],
    },
    following: {
        type: [String],
        default: [],
    },
    posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }],
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
    shares: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }],
    privacySettings: Object,
    blockedUsers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    notifications: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Notification' }],
    followersCount: { type: Number, default: 0 },
    followingCount: { type: Number, default: 0 },
    tweetsCount: { type: Number, default: 0 },
    verified: { type: Boolean, default: false },


},
    {
        timestamps: true
    });
const User = mongoose.model('User', userSchema);

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

// Check if email already exists
app.post('/checkemail', async (req, res) => {
    try {
        const { email } = req.body;

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: 'User already exists' });
        }

        res.status(200).json({ message: 'Email is available' });
    } catch (error) {
        console.error('Check email error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Check if @username is valid
app.post('/checkusername', async (req, res) => {
    try {
        const { username } = req.body;

        // Check if username already exists
        const existingUserName = await User.findOne({ username });
        if (existingUserName) {
            return res.status(400).json({ error: '@UserName already exists' });
        }

        res.status(200).json({ message: '@UserName is available' });
    } catch (error) {
        console.error('Check username error:', error);
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

// Middleware to verify JWT token
function verifyToken(req, res, next) {
    const token = req.headers['authorization'];
    if (!token) {
        return res.status(403).json({ error: 'Token not provided' });
    }

    jwt.verify(token, 'secret_keydhuabduwbasdiubwfuadbeuabdasbcuawdbwubawu', (err, decoded) => {
        if (err) {
            return res.status(401).json({ error: 'Failed to authenticate token' });
        }
        req.decoded = decoded;
        next();
    });
}

// Get user information
app.get('/user', verifyToken, async (req, res) => {
    try {
        const decoded = req.decoded;
        const user = await User.findById(decoded.userId);
        res.json({
            username: user.name,
            userId: user._id
        });
        console.log("getone Users for profile page", user)
    } catch (error) {
        console.error('User info error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Get all users
app.get('/getAllUsers', async (req, res) => {
    try {
        const users = await User.find({}, { password: 0 }); // Avoid sending passwords
        res.json({ users });
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Logout endpoint
app.get('/logout', (req, res) => {
    res.clearCookie('token').send('Logged out successfully');
});

// Follow/Unfollow API
app.post('/followUnFollowUsers/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const userToModify = await User.findById(id);
        const currentUser = await User.findById(req.user._id);

        if (id === req.user._id.toString())
            return res.status(400).json({ error: "Aap apne aap ko follow/unfollow nahi kar sakte" });

        if (!userToModify || !currentUser) return res.status(400).json({ error: "User not found" });

        const isFollowing = currentUser.following.includes(id);

        if (isFollowing) {
            // Unfollow user
            await User.findByIdAndUpdate(id, { $pull: { followers: req.user._id }, $inc: { followersCount: -1 } });
            await User.findByIdAndUpdate(req.user._id, { $pull: { following: id } });
            res.status(200).json({ message: "User ko successfully unfollow kiya gaya" });
        } else {
            // Follow user
            await User.findByIdAndUpdate(id, { $push: { followers: req.user._id }, $inc: { followersCount: 1 } });
            await User.findByIdAndUpdate(req.user._id, { $push: { following: id } });
            res.status(200).json({ message: "User ko successfully follow kiya gaya" });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
        console.log("followUnFollowUser mein error: ", err.message);
    }
});

// Find current user
app.get('/getCurrentUser', verifyToken, async (req, res) => {
    try {
        const currentUser = await User.findById(req.decoded.userId);

        if (!currentUser) {
            return res.status(404).json({ error: 'User not found' });
        }

        const followingCount = currentUser.following.length;
        const followersCount = currentUser.followers.length;
        const userProfile = {
            name: currentUser.name,
            username: currentUser.username,
            joined: currentUser.createdAt,
            followingCount: followingCount,
            followersCount: followersCount
        };

        res.json({ user: userProfile });
    } catch (error) {
        console.error('Error fetching current user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
