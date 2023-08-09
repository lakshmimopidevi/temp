var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Change the database connection URL with yours
mongoose.connect('mongodb+srv://lakshmivvsmarolix:84e966Q7utS2FGj3@cluster0.jhv9u6n.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB successfully!');
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error.message);
});

module.exports = { mongoose };
