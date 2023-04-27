
// Import necessary modules
const User = require('./model/User'); // Update with the actual file path of your User model

// Define the function to create a new user
const createUser = async () => {
  try {
    // Create a new user
    const newUser = new User({
      username: 'JAYDIP MAKVANA',
      email: 'jaydip@example.com',
      password: '123456',
      // Add other required properties as needed
    });

    // Save the new user to the database
    const savedUser = await newUser.save();

    console.log('New user created:', savedUser);
  } catch (err) {
    console.error('Failed to create new user:', err);
  }
};

module.exports = createUser;
