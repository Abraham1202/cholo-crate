import express from 'express';
import jwt from 'jsonwebtoken';

const router = express.Router();

// Usuario simulado
const fakeUser = {
  username: 'usuario123',
  email: 'usuario@example.com',
  password: 'password123'
};

// Falso Login
router.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Verificar si las credenciales coinciden con el usuario simulado
  if (email === fakeUser.email && password === fakeUser.password) {
    // Crear token falso
    const token = jwt.sign({ username: fakeUser.username }, 'secretKey', { expiresIn: '1h' });
    return res.cookie('token', token, { httpOnly: true }).send({ message: 'Login exitoso' });
  }

  return res.status(401).send({ message: 'Credenciales incorrectas' });
});

// Ruta para obtener el usuario autenticado
router.get('/user', (req, res) => {
  const token = req.cookies.token;

  if (!token) return res.status(401).send('No autenticado');

  try {
    const decoded = jwt.verify(token, 'secretKey');
    res.send({ username: decoded.username });
  } catch (error) {
    res.status(400).send('Token no válido');
  }
});

export default router;
