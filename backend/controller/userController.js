
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/usermodel.js';

export const register = async (req, res) => {
  const { username, password, email } = req.body;
  try {
    const existUser = await User.findOne({ where: { username } });
    if (existUser) return res.status(400).json({ message: 'Username sudah terpakai' });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({ username, password: hashedPassword, email });
    res.status(201).json({ message: 'User berhasil didaftarkan' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ where: { username } });
    if (!user) return res.status(404).json({ message: 'User tidak ditemukan' });

    const validPass = await bcrypt.compare(password, user.password);
    if (!validPass) return res.status(401).json({ message: 'Password salah' });

    const payload = { id: user.id_user, username: user.username };

    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getUserProfile = async (req, res) => {
  try {
    const user = await User.findByPk(req.user.id, {
      attributes: ['id_user', 'username', 'email'],
    });
    if (!user) return res.status(404).json({ message: 'User tidak ditemukan' });
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
