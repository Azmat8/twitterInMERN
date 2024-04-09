

const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors')
const axios = require('axios');
const multer = require('multer');

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
        // console.log("user", user);
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
        // console.log(user._id)
    } catch (error) {
        console.error('User info error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.get('/getAllUsers', async (req, res) => {
    try {
        const user = await User.find();
        // console.log(user);
        res.json({
            data: user
        });
        // console.log(user._id)
    } catch (error) {
        console.error('User info error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// , author, hashtags, mediaAttachments,isRetweet, originalPost, visibility, location
// user posts
// , author, hashtags, mediaAttachments,isRetweet, originalPost, visibility, location

const fileSchema = new mongoose.Schema({
    filename: String,
    path: String,
    size: Number
  });
  
  const File = mongoose.model('File', fileSchema);


  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads/');
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname);
    }
  });
  
  const upload = multer({ storage: storage });


const postSchema = new mongoose.Schema({
    content: { type: String, required: true },
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    retweetCount: { type: Number, default: 0 },
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
    hashtags: [{ type: String }],
    mediaAttachments: [{ type: String }], // Store file paths or URLs
    isRetweet: { type: Boolean, default: false },
    originalPost: { type: mongoose.Schema.Types.ObjectId, default:null},
    visibility: { type: String, default: 'public' }, // Could be 'public', 'private', etc.
    location: { type: Object },
    // clickThroughRate: { type: Number, default: 0 }, // Additional field for recommendation algorithm
    // qualityScore: { type: Number }, // Additional field for content quality
    // tags: [{ type: String }], // Additional structured topic tags
    // sentiment: { type: String, enum: ['positive', 'negative', 'neutral'] }, // Additional sentiment analysis
}, {
    timestamps: true // Automatically manages createdAt and updatedAt fields
});

const Post = mongoose.model('Post', postSchema);

app.post('/createPost', upload.array('mediaAttachments'), async (req, res) => {
    try {
      const { content, author, hashtags, mediaAttachments } = req.body;
      const filepaths =  mediaAttachments.map((file) => file.path); // Store file paths
  
      // Create new post
      const newPost = new Post({ content, author, hashtags, mediaAttachments: filepaths });

      console.log("newPost",newPost);
      await newPost.save();
  
      res.status(201).json({ data: newPost, message: 'Post created successfully' });
    } catch (error) {
      console.error('New Post error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  

// app.post('/createPost', async (req, res) => {
//     try {
//         const { content, author, hashtags, mediaAttachments  } = req.body;
//         console.log(mediaAttachments, "mediaAttachments");
//         console.log(req.body, "createPost")

//         // Create new post
//         const newPost = new Post({ content, author, hashtags, mediaAttachments });
//         await newPost.save();

//         res.status(201).json({ data: newPost, message: 'Post created successfully' });
//     } catch (error) {
//         console.error('New Post error:', error);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// });

//commentsSchema

const commentSchema = new mongoose.Schema({
    text: { type: String, required: true },
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
}, { timestamps: true });

const Comment = mongoose.model('Comment', commentSchema);

app.put('/updatePostLike', async (req, res) => {
    try {
        const { userId, postId } = req.body;

        // Find the post by postId
        const post = await Post.findOne({ _id: postId });

        // Check if the post exists
        if (!post) {
            return res.status(404).json({ error: 'Post not found' });
        }

        // Check if the user has already liked the post
        if (post.likes.includes(userId)) {
            return res.status(400).json({ error: 'User has already liked the post' });
        }

        // Add the userId to the likes array
        post.likes.push(userId);

        // Save the updated post
        await post.save();

        res.status(200).json({ data: post, message: 'Post like updated successfully' });
    } catch (error) {
        console.error('Update Post Like error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.post('/retweet', async (req, res) => {
    try {
        const { userId, postId } = req.body;

        // Find the original post by postId
        const originalPost = await Post.findById(postId)
            .populate('author')
            .populate('comments')
            .populate('hashtags');

        // Check if the original post exists
        if (!originalPost) {
            return res.status(404).json({ error: 'Original post not found' });
        }

        // Create a retweet based on the original post
        const retweet = new Post({
            content: originalPost.content,
            author: originalPost.author, // Set the author of the retweet to match the author of the original post
            likes: [], // Empty likes array for the retweet
            retweetCount: 0, // Reset retweet count for the retweet
            comments: originalPost.comments, // Set comments of the retweet to match the original post's comments
            hashtags: originalPost.hashtags, // Set hashtags of the retweet to match the original post's hashtags
            isRetweet: true,
            originalPost: postId // Reference to the original post
        });

        // Save the retweet
        await retweet.save();

        // Update the retweet count of the original post
        originalPost.retweetCount += 1;
        await originalPost.save();

        res.status(201).json({ data: retweet, message: 'Retweet created successfully' });
    } catch (error) {
        console.error('Retweet error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.post('/posts/:postId/comments', async (req, res) => {
    try {
        const { userId, text } = req.body;
        const { postId } = req.params;

        // Create a new comment
        const comment = new Comment({
            text,
            author: userId
        });
        await comment.save();

        // Find the post by postId
        const post = await Post.findById(postId);

        // Check if the post exists
        if (!post) {
            return res.status(404).json({ error: 'Post not found' });
        }

        // Add the comment to the post
        post.comments.push(comment);
        await post.save();

        res.status(201).json({ data: comment, message: 'Comment added successfully' });
    } catch (error) {
        console.error('Add Comment error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// app.put('/updatePostLike', async (req, res) => {
//     try {
//         const { userId, postId } = req.body;

//         // Update post like
//         const post = await Post.findOne({ postId });
//         const newPost = Post({ });
//         await newPost.save();

//         res.status(201).json({ data: newPost, message: 'Post created successfully' });
//     } catch (error) {
//         console.error('New Post error:', error);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// });
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
