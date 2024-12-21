const express = require('express');
const { getAllUsers, getUserById, updateUserStatus } = require('../controllers/user.controller');
const authenticate = require('../middlewares/authMiddleware');
const adminOnly = require('../middlewares/adminMiddleware');
const router = express.Router();

router.get('/', authenticate, adminOnly, getAllUsers);
router.get('/:id', authenticate, getUserById);
router.put('/:id/status', authenticate, adminOnly, updateUserStatus);

module.exports = router;
