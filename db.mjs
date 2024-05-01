import mongoose from 'mongoose';

mongoose.connect(process.env.DSN);

const commentSchema = new mongoose.Schema({
  commenterId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  commenterUsername: String,
  text: { type: String, required: true },
  timestamp: { type: Date, default: Date.now }
});

const contentSchema = new mongoose.Schema({
  title: { type: String, required: true },
  body: { type: String, required: true },
  image: String, // Store the image path
  diseases: [{ type: mongoose.Schema.Types.ObjectId, ref: 'ChronicDisease' }],
  comments: [commentSchema],
  created_at: { type: Date, default: Date.now }
});

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  bio: {type: String},
  isProfessional: { type: Boolean, default: false },
  credentials: {
    diploma: String,
    areaOfExpertise: String,
    licenseNumber: String,
    verified: { type: Boolean, default: false },
  },
  diseases: [{ type: mongoose.Schema.Types.ObjectId, ref: 'ChronicDisease' }],
  contents: [contentSchema]
});

const messageSchema = new mongoose.Schema({
  sender: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  receiver: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  message: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
  read: { type: Boolean, default: false }
});

const chronicDiseaseSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
});

const moderationQueueSchema= new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
})

mongoose.model('ModerationQueue', moderationQueueSchema);
mongoose.model('ChronicDisease', chronicDiseaseSchema);
mongoose.model('User', userSchema);
mongoose.model('Content', contentSchema);
mongoose.model('Comment', commentSchema);
mongoose.model('Message', commentSchema);


// to be imported in app.mjs