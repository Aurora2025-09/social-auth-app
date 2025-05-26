const UserDatabase = require('../models/UserDatabase');
const User = require('../models/User');

class UserManager {
  constructor() {
    this.loggedInUser = null;
  }

  register(username, password) {
    if (UserDatabase.findUser(username)) {
      throw new Error("User already exists.");
    }
    const newUser = new User(username, password);
    UserDatabase.saveUser(newUser);
    return newUser;
  }

  login(username, password) {
    const user = UserDatabase.findUser(username);
    if (user && user.password === password) {
      this.loggedInUser = user;
      return true;
    }
    return false;
  }

  changePassword(username, newPassword) {
    const user = UserDatabase.findUser(username);
    if (user) {
      user.password = newPassword;
      return true;
    }
    return false;
  }
}

module.exports = UserManager;