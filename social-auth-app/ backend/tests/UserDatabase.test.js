const UserDatabase = require('../models/UserDatabase');
const User = require('../models/User');

describe('UserDatabase', () => {
  it('should save a new user', () => {
    const user = new User('testuser', 'password');
    const result = UserDatabase.saveUser(user);
    expect(result).toBe(true);
  });

  it('should find an existing user', () => {
    const user = UserDatabase.findUser('testuser');
    expect(user).not.toBeNull();
    expect(user.username).toBe('testuser');
  });
});