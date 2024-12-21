const { Models } = require('../models/modelValidations');

const User = Models.User;

exports.getAllUsers = async (req, res) => {
    try {
      const users = await User.findAll();
      res.status(200).json(users);
    } catch (err) {
      res.status(500).json({ error: 'Error fetching users.', message: err.message });
    }
};

exports.getUserById = async (req, res) => {
    try {
      const { id } = req.params;
      const user = await User.findByPk(id);
      if (!user) return res.status(404).json({ error: 'User not found.' });
      return res.status(200).json(user);
    } catch (err) {
      res.status(500).json({ error: 'Error fetching user.', details: err.message });
    }
};

exports.updateUserStatus = async (req, res) => {
    try {
      const { id } = req.params;
      const { is_active } = req.body;
      const user = await User.findByPk(id);
      if (!user) return res.status(404).json({ error: 'User not found.' });
  
      user.is_active = is_active;
      await user.save();
      return res.status(200).json({ message: 'User status updated successfully.', user });
    } catch (err) {
      res.status(500).json({ error: 'Error updating user status.', details: err.message });
    }
  };

