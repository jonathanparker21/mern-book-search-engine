const { Book, User } = require("../models");

// User:
// Query: getSingleUser
// Mutation: createUser
// TBD: login
// Book:
// Mutation: saveBook, deleteBook

const resolvers = {
  Query: {
    getSingleUser: async (parent, { _id }) => {
      const params = _id ? { _id } : {};
      return User.find(params);
    },
  },
  Mutation: {
    createUser: async (parent, args) => {
      const user = await User.create(args);
      return user;
    },
    saveBook: async (parent, { user, body }) => {
      const updatedUser = await Book.findOneAndUpdate(
        { _id: user._id },
        { $addToSet: { savedBooks: body } },
        { new: true, runValidators: true }
      );
      return updatedUser;
    },
    deleteBook: async (parent, { user, params }) => {
      const updatedUser = await Book.findOneAndUpdate(
        { _id: user._id },
        { $pull: { savedBooks: { bookId: params.bookId } } },
        { new: true }
      );
      return updatedUser;
    },
  },
};

module.exports = resolvers;
