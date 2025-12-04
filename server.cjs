const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
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

// ...existing code...

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
app.use(express.json());

app.get('/', (req, res) => {
  res.send('¡Express está funcionando!');
});



// Obtener publicaciones
// Like/Unlike a publicación (toggle)
app.post('/api/publicaciones/:id/like', async (req, res) => {
  try {
    const { id } = req.params;
    // Obtener usuario desde el token JWT
    let usuario = 'Anonimo';
    const authHeader = req.headers['authorization'];
    if (authHeader && authHeader.startsWith('Bearer ')) {
      const token = authHeader.split(' ')[1];
      try {
        const decoded = jwt.verify(token, 'secreto');
        usuario = decoded.email || decoded.nombre || 'Anonimo';
      } catch {}
    }
    const pub = await db.collection('publicaciones').findOne({ _id: new ObjectId(id) });
    if (!pub) return res.status(404).json({ error: 'Publicación no encontrada' });
    let likesUsuarios = Array.isArray(pub.likesUsuarios) ? pub.likesUsuarios : [];
    let liked = likesUsuarios.includes(usuario);
    if (liked) {
      likesUsuarios = likesUsuarios.filter(u => u !== usuario);
    } else {
      likesUsuarios.push(usuario);
    }
    const likes = likesUsuarios.length;
    await db.collection('publicaciones').updateOne(
      { _id: new ObjectId(id) },
      { $set: { likesUsuarios, likes } }
    );
    res.json({ likes, liked: !liked });
  } catch (err) {
    res.status(500).json({ error: 'Error al dar/quitar like' });
  }
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

// Crear publicación
// Editar publicación
// Eliminar publicación
// Agregar comentario a una publicación
// Editar comentario en una publicación
app.put('/api/publicaciones/:id/comentarios/:cid', async (req, res) => {
  try {
    const { id, cid } = req.params;
    const { texto } = req.body;
    if (!texto || !texto.trim()) {
      return res.status(400).json({ error: 'El comentario no puede estar vacío.' });
    }
    // Buscar la publicación y actualizar el comentario por índice
    const publicacion = await db.collection('publicaciones').findOne({ _id: new ObjectId(id) });
    if (!publicacion) {
      return res.status(404).json({ error: 'Publicación no encontrada.' });
    }
    const comentarios = publicacion.comentarios || [];
    if (!comentarios[cid]) {
      return res.status(404).json({ error: 'Comentario no encontrado.' });
    }
    comentarios[cid].texto = texto;
    await db.collection('publicaciones').updateOne(
      { _id: new ObjectId(id) },
      { $set: { comentarios } }
    );
    res.json({ mensaje: 'Comentario editado correctamente.' });
  } catch (err) {
    console.error('Error en /api/publicaciones/:id/comentarios/:cid (PUT):', err);
    res.status(500).json({ error: 'Error al editar comentario.' });
  }
});

// Eliminar comentario en una publicación
app.delete('/api/publicaciones/:id/comentarios/:cid', async (req, res) => {
  try {
    const { id, cid } = req.params;
    // Buscar la publicación y eliminar el comentario por índice
    const publicacion = await db.collection('publicaciones').findOne({ _id: new ObjectId(id) });
    if (!publicacion) {
      return res.status(404).json({ error: 'Publicación no encontrada.' });
    }
    const comentarios = publicacion.comentarios || [];
    if (!comentarios[cid]) {
      return res.status(404).json({ error: 'Comentario no encontrado.' });
    }
    comentarios.splice(cid, 1);
    await db.collection('publicaciones').updateOne(
      { _id: new ObjectId(id) },
      { $set: { comentarios } }
    );
    res.json({ mensaje: 'Comentario eliminado correctamente.' });
  } catch (err) {
    console.error('Error en /api/publicaciones/:id/comentarios/:cid (DELETE):', err);
    res.status(500).json({ error: 'Error al eliminar comentario.' });
  }
});
app.post('/api/publicaciones/:id/comentarios', async (req, res) => {
  try {
    const { id } = req.params;
    const { usuario, texto } = req.body;
    if (!texto || !texto.trim()) {
      return res.status(400).json({ error: 'El comentario no puede estar vacío.' });
    }
    const comentario = { usuario, texto };
    const resultado = await db.collection('publicaciones').updateOne(
      { _id: new ObjectId(id) },
      { $push: { comentarios: comentario } }
    );
    if (resultado.matchedCount === 0) {
      return res.status(404).json({ error: 'Publicación no encontrada.' });
    }
    res.json({ mensaje: 'Comentario agregado correctamente.' });
  } catch (err) {
    console.error('Error en /api/publicaciones/:id/comentarios (POST):', err);
    res.status(500).json({ error: 'Error al agregar comentario.' });
  }
});
app.delete('/api/publicaciones/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const resultado = await db.collection('publicaciones').deleteOne({ _id: new ObjectId(id) });
    if (resultado.deletedCount === 0) {
      return res.status(404).json({ error: 'Publicación no encontrada.' });
    }
    res.json({ mensaje: 'Publicación eliminada correctamente.' });
  } catch (err) {
    console.error('Error en /api/publicaciones/:id (DELETE):', err);
    res.status(500).json({ error: 'Error al eliminar publicación.' });
  }
});
app.put('/api/publicaciones/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { contenido } = req.body;
    if (!contenido || !contenido.trim()) {
      return res.status(400).json({ error: 'El contenido es obligatorio.' });
    }
    const resultado = await db.collection('publicaciones').updateOne(
      { _id: new ObjectId(id) },
      { $set: { contenido } }
    );
    if (resultado.matchedCount === 0) {
      return res.status(404).json({ error: 'Publicación no encontrada.' });
    }
    res.json({ mensaje: 'Publicación actualizada correctamente.' });
  } catch (err) {
    console.error('Error en /api/publicaciones/:id (PUT):', err);
    res.status(500).json({ error: 'Error al editar publicación.' });
  }
});
app.post('/api/publicaciones', async (req, res) => {
  try {
    const { contenido } = req.body;
    if (!contenido || !contenido.trim()) {
      return res.status(400).json({ error: 'El contenido es obligatorio.' });
    }

    // Obtener token JWT del header Authorization
    const authHeader = req.headers['authorization'];
    let usuario = 'Anonimo';
    let avatar = '';
    const AVATAR_DEFAULT = 'https://ui-avatars.com/api/?name=Anonimo&background=cccccc&color=555555';
    if (authHeader && authHeader.startsWith('Bearer ')) {
      const token = authHeader.split(' ')[1];
      try {
        const decoded = jwt.verify(token, 'secreto');
        // Buscar usuario en la base de datos
        const userDb = await db.collection('usuarios').findOne({ email: decoded.email });
        if (userDb) {
          usuario = userDb.nombre;
          avatar = userDb.avatar && userDb.avatar.trim() ? userDb.avatar : `https://ui-avatars.com/api/?name=${encodeURIComponent(userDb.nombre)}&background=cccccc&color=555555`;
        } else {
          avatar = AVATAR_DEFAULT;
        }
      } catch (err) {
        avatar = AVATAR_DEFAULT;
      }
    } else {
      avatar = AVATAR_DEFAULT;
    }

    const nuevaPublicacion = {
      usuario,
      avatar,
      contenido,
      fecha: new Date(),
      likes: 0,
      comentarios: []
    };
    const resultado = await db.collection('publicaciones').insertOne(nuevaPublicacion);
    res.status(201).json({ ...nuevaPublicacion, _id: resultado.insertedId });
  } catch (err) {
    console.error('Error en /api/publicaciones (POST):', err);
    res.status(500).json({ error: 'Error al crear publicación.' });
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
    const { nombre, email, password } = req.body;
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
      fechaRegistro: new Date()
    };
    await db.collection('usuarios').insertOne(nuevoUsuario);
    res.status(201).json({ mensaje: 'Usuario registrado correctamente.' });
  } catch (err) {
    console.error('Error en /api/register:', err);
    res.status(500).json({ error: 'Error al registrar usuario.', detalle: err.message });
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
  // Obtener todos los usuarios registrados
  app.get('/api/usuarios', async (req, res) => {
    try {
      const usuarios = await db.collection('usuarios').find({}, { projection: { password: 0 } }).toArray();
      res.json(usuarios);
    } catch (err) {
      res.status(500).json({ error: 'Error al obtener usuarios' });
    }
  });
  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Servidor escuchando en http://0.0.0.0:${PORT}`);
  });
});
