const users = []; // simple memory-based DB, can be mocked for testing

class UserDatabase {
  static saveUser(user) {
    users.push(user);
    return true;
  }

  static findUser(username) {
    return users.find(u => u.username === username);
  }
}

module.exports = UserDatabase;