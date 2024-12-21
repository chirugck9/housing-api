const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { Models } = require('../models/modelValidations');

const User = Models.User;

exports.signup = async( req, res) => {
    try {
        const { name, email, password, role } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({name, email, password: hashedPassword, role});
        return res.status(201).json({message: 'User created succesfully.', user: { id: user.id, email: user.email } });
    } catch (err) {
        return res.status(400).json({ error: 'Error creating user', message: err.message});
    }
};

exports.signin = async (req,res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ where: { email }});
        if(!user) return res.status(400).json({ error: 'Invalid email or password.'});

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) return res.status(400).json({ error: 'Invalid email or password. '});

        const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h'});
        return res.status(203).json({ message: 'Logged in succesfully.', token});
    } catch (err) {
        return res.status(500).json({ error: 'Error signing in.', message: err.message});
    }
};
