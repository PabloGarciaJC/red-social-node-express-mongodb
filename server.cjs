const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 3000;

const MONGO_USER = process.env.MONGO_USER;
const MONGO_PASSWORD = process.env.MONGO_PASSWORD;
const MONGO_HOST = process.env.MONGO_HOST;
const MONGO_PORT = process.env.MONGO_PORT;
const DB_NAME = process.env.MONGO_DB;

const MONGO_URL = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_HOST}:${MONGO_PORT}/${DB_NAME}`;

let db;

async function connectDB() {
  let connected = false;

  while (!connected) {
    try {
      console.log("Intentando conectar a MongoDB...");
      const client = await MongoClient.connect(MONGO_URL);
      db = client.db(DB_NAME);
      console.log("Conectado a MongoDB correctamente");
      connected = true;
    } catch (err) {
      console.log("MongoDB no está listo. Reintentando en 2 segundos...");
      await new Promise(resolve => setTimeout(resolve, 2000));
    }
  }
}


app.use(cors());

app.get('/', (req, res) => {
  res.send('¡Express está funcionando!');
});


app.get('/api/publicaciones', async (req, res) => {
  try {
    const publicaciones = await db.collection('publicaciones').find({}).toArray();
    res.json(publicaciones);
  } catch (err) {
    console.error("Error en /api/publicaciones:", err);
    res.status(500).json({ error: "Error al obtener publicaciones" });
  }
});


app.get('/api/friends', async (req, res) => {
  try {
    const friends = await db.collection('amigos').find({}).toArray();
    res.json(friends);
  } catch (err) {
    console.error("Error en /api/friends:", err);
    res.status(500).json({ error: "Error al obtener amigos" });
  }
});

app.get('/api/messages', async (req, res) => {
  try {
    const messages = await db.collection('mensajes').find({}).toArray();
    res.json(messages);
  } catch (err) {
    console.error("Error en /api/messages:", err);
    res.status(500).json({ error: "Error al obtener mensajes" });
  }
});

app.get('/api/notifications', async (req, res) => {
  try {
    const notifications = await db.collection('notificaciones').find({}).toArray();
    res.json(notifications);
  } catch (err) {
    console.error("Error en /api/notifications:", err);
    res.status(500).json({ error: "Error al obtener notificaciones" });
  }
});

app.get('/api/profile', async (req, res) => {
  try {
    const profiles = await db.collection('perfiles').find({}).toArray();
    res.json(profiles);
  } catch (err) {
    console.error("Error en /api/profile:", err);
    res.status(500).json({ error: "Error al obtener perfil" });
  }
});


// Endpoint de registro
app.post('/api/register', async (req, res) => {
  try {
    const { nombre, email, password, avatar } = req.body;
    if (!nombre || !email || !password) {
      return res.status(400).json({ error: 'Faltan campos obligatorios.' });
    }
    // Verificar si el email ya existe
    const existe = await db.collection('usuarios').findOne({ email });
    if (existe) {
      return res.status(409).json({ error: 'El email ya está registrado.' });
    }
    // Encriptar contraseña
    const hash = await bcrypt.hash(password, 10);
    const nuevoUsuario = {
      nombre,
      email,
      password: hash,
      avatar: avatar || '',
      fechaRegistro: new Date()
    };
    await db.collection('usuarios').insertOne(nuevoUsuario);
    res.status(201).json({ mensaje: 'Usuario registrado correctamente.' });
  } catch (err) {
    console.error('Error en /api/register:', err);
    res.status(500).json({ error: 'Error al registrar usuario.' });
  }
});

// Endpoint de login
app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: 'Faltan campos obligatorios.' });
    }
    const usuario = await db.collection('usuarios').findOne({ email });
    if (!usuario) {
      return res.status(401).json({ error: 'Credenciales incorrectas.' });
    }
    const valido = await bcrypt.compare(password, usuario.password);
    if (!valido) {
      return res.status(401).json({ error: 'Credenciales incorrectas.' });
    }
    // Generar token JWT
    const token = jwt.sign({ id: usuario._id, email: usuario.email }, 'secreto', { expiresIn: '2h' });
    res.json({ token, usuario: { nombre: usuario.nombre, email: usuario.email, avatar: usuario.avatar } });
  } catch (err) {
    console.error('Error en /api/login:', err);
    res.status(500).json({ error: 'Error al iniciar sesión.' });
  }
});

connectDB().then(() => {
  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Servidor escuchando en http://0.0.0.0:${PORT}`);
  });
});
