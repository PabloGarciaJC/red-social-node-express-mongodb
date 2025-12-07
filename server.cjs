// Configuración de multer para subir imágenes
const multer = require('multer');
const path = require('path');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, 'public'));
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + '-' + file.originalname);
  }
});
const upload = multer({ storage });
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


// =========================
//      PUBLICACIONES
// =========================

// Like/Unlike
app.post('/api/publicaciones/:id/like', async (req, res) => {
  try {
    const { id } = req.params;

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

    if (liked) likesUsuarios = likesUsuarios.filter(u => u !== usuario);
    else likesUsuarios.push(usuario);

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

// Obtener publicaciones
app.get('/api/publicaciones', async (req, res) => {
  try {
    const publicaciones = await db.collection('publicaciones').find({}).toArray();
    res.json(publicaciones);
  } catch (err) {
    res.status(500).json({ error: "Error al obtener publicaciones" });
  }
});

// Editar comentario
app.put('/api/publicaciones/:id/comentarios/:cid', async (req, res) => {
  try {
    const { id, cid } = req.params;
    const { texto } = req.body;

    if (!texto?.trim()) return res.status(400).json({ error: 'El comentario no puede estar vacío.' });

    const publicacion = await db.collection('publicaciones').findOne({ _id: new ObjectId(id) });
    if (!publicacion) return res.status(404).json({ error: 'Publicación no encontrada.' });

    const comentarios = publicacion.comentarios || [];
    if (!comentarios[cid]) return res.status(404).json({ error: 'Comentario no encontrado.' });

    comentarios[cid].texto = texto;

    await db.collection('publicaciones').updateOne(
      { _id: new ObjectId(id) },
      { $set: { comentarios } }
    );

    res.json({ mensaje: 'Comentario editado correctamente.' });
  } catch (err) {
    res.status(500).json({ error: 'Error al editar comentario.' });
  }
});

// Eliminar comentario
app.delete('/api/publicaciones/:id/comentarios/:cid', async (req, res) => {
  try {
    const { id, cid } = req.params;

    const publicacion = await db.collection('publicaciones').findOne({ _id: new ObjectId(id) });
    if (!publicacion) return res.status(404).json({ error: 'Publicación no encontrada.' });

    const comentarios = publicacion.comentarios || [];
    if (!comentarios[cid]) return res.status(404).json({ error: 'Comentario no encontrado.' });

    comentarios.splice(cid, 1);

    await db.collection('publicaciones').updateOne(
      { _id: new ObjectId(id) },
      { $set: { comentarios } }
    );

    res.json({ mensaje: 'Comentario eliminado correctamente.' });
  } catch (err) {
    res.status(500).json({ error: 'Error al eliminar comentario.' });
  }
});

// Agregar comentario
app.post('/api/publicaciones/:id/comentarios', async (req, res) => {
  try {
    const { id } = req.params;
    const { usuario, texto } = req.body;

    if (!texto?.trim()) return res.status(400).json({ error: 'El comentario no puede estar vacío.' });

    const resultado = await db.collection('publicaciones').updateOne(
      { _id: new ObjectId(id) },
      { $push: { comentarios: { usuario, texto } } }
    );

    if (!resultado.matchedCount) return res.status(404).json({ error: 'Publicación no encontrada.' });

    res.json({ mensaje: 'Comentario agregado correctamente.' });
  } catch (err) {
    res.status(500).json({ error: 'Error al agregar comentario.' });
  }
});

// Eliminar publicación
app.delete('/api/publicaciones/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const resultado = await db.collection('publicaciones').deleteOne({ _id: new ObjectId(id) });
    if (!resultado.deletedCount) return res.status(404).json({ error: 'Publicación no encontrada.' });

    res.json({ mensaje: 'Publicación eliminada correctamente.' });
  } catch (err) {
    res.status(500).json({ error: 'Error al eliminar publicación.' });
  }
});

// Editar publicación
app.put('/api/publicaciones/:id', upload.single('imagen'), async (req, res) => {
  try {
    const { id } = req.params;
    const { contenido } = req.body;
    if (!contenido?.trim()) return res.status(400).json({ error: 'El contenido es obligatorio.' });
    let updateFields = { contenido };
    if (req.file) {
      updateFields.imagen = '/' + req.file.filename;
    }
    const resultado = await db.collection('publicaciones').updateOne(
      { _id: new ObjectId(id) },
      { $set: updateFields }
    );
    if (!resultado.matchedCount) return res.status(404).json({ error: 'Publicación no encontrada.' });
    res.json({ mensaje: 'Publicación actualizada correctamente.' });
  } catch (err) {
    res.status(500).json({ error: 'Error al editar publicación.' });
  }
});

// Crear publicación
app.post('/api/publicaciones', upload.single('imagen'), async (req, res) => {
  try {
    const { contenido } = req.body;
    if (!contenido?.trim()) return res.status(400).json({ error: 'El contenido es obligatorio.' });
    let usuario = 'Anonimo';
    const authHeader = req.headers['authorization'];
    if (authHeader?.startsWith('Bearer ')) {
      const token = authHeader.split(' ')[1];
      try {
        const decoded = jwt.verify(token, 'secreto');
        const userDb = await db.collection('usuarios').findOne({ email: decoded.email });
        if (userDb) usuario = userDb.nombre;
      } catch {}
    }
    let imagenUrl = null;
    if (req.file) {
      imagenUrl = '/'+req.file.filename;
    }
    const nuevaPublicacion = {
      usuario,
      contenido,
      fecha: new Date(),
      likes: 0,
      comentarios: [],
      imagen: imagenUrl
    };
    const resultado = await db.collection('publicaciones').insertOne(nuevaPublicacion);
    res.status(201).json({ ...nuevaPublicacion, _id: resultado.insertedId });
  } catch (err) {
    res.status(500).json({ error: 'Error al crear publicación.' });
  }
});


// =========================
//      OTROS GET
// =========================

app.get('/api/friends', async (req, res) => {
  try {
    const friends = await db.collection('amigos').find({}).toArray();
    res.json(friends);
  } catch (err) {
    res.status(500).json({ error: "Error al obtener amigos" });
  }
});

app.get('/api/messages', async (req, res) => {
  try {
    const messages = await db.collection('mensajes').find({}).toArray();
    res.json(messages);
  } catch (err) {
    res.status(500).json({ error: "Error al obtener mensajes" });
  }
});

app.get('/api/notifications', async (req, res) => {
  try {
    const notifications = await db.collection('notificaciones').find({}).toArray();
    res.json(notifications);
  } catch (err) {
    res.status(500).json({ error: "Error al obtener notificaciones" });
  }
});


// =========================
//      PERFIL (CORREGIDO)
// =========================

// 👉 GET perfiles
app.get('/api/profile', async (req, res) => {
  try {
    const profiles = await db.collection('perfiles').find({}).toArray();
    res.json(profiles);
  } catch (err) {
    res.status(500).json({ error: "Error al obtener perfil" });
  }
});

// 👉 PUT actualizar perfil (FUERA DEL GET)
app.put('/api/profile/:usuario', async (req, res) => {
  try {
    const usuarioActual = req.params.usuario;
    const { bio, intereses } = req.body;

    const result = await db.collection('perfiles').updateOne(
      { usuario: usuarioActual },
      { $set: { bio, intereses } },
      { upsert: true } // crea perfil si no existe
    );

    res.json({ mensaje: 'Perfil actualizado correctamente' });
  } catch (err) {
    console.error('Error al actualizar perfil:', err);
    res.status(500).json({ error: 'Error al actualizar perfil' });
  }
});


// =========================
//   REGISTRO Y LOGIN
// =========================

app.post('/api/register', async (req, res) => {
  try {
    const { nombre, email, password } = req.body;

    if (!nombre || !email || !password)
      return res.status(400).json({ error: 'Faltan campos obligatorios.' });

    const existe = await db.collection('usuarios').findOne({ email });
    if (existe) return res.status(409).json({ error: 'El email ya está registrado.' });

    const hash = await bcrypt.hash(password, 10);

    await db.collection('usuarios').insertOne({
      nombre,
      email,
      password: hash,
      fechaRegistro: new Date()
    });

    await db.collection('perfiles').insertOne({
      usuario: nombre,
      email,
      bio: '',
      intereses: []
    });

    res.status(201).json({ mensaje: 'Usuario registrado correctamente.' });
  } catch (err) {
    res.status(500).json({ error: 'Error al registrar usuario.' });
  }
});

app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password)
      return res.status(400).json({ error: 'Faltan campos obligatorios.' });

    const usuario = await db.collection('usuarios').findOne({ email });
    if (!usuario) return res.status(401).json({ error: 'Credenciales incorrectas.' });

    const valido = await bcrypt.compare(password, usuario.password);
    if (!valido) return res.status(401).json({ error: 'Credenciales incorrectas.' });

    const token = jwt.sign(
      { id: usuario._id, email: usuario.email },
      'secreto',
      { expiresIn: '2h' }
    );

    res.json({ token, usuario: { nombre: usuario.nombre, email: usuario.email } });
  } catch (err) {
    res.status(500).json({ error: 'Error al iniciar sesión.' });
  }
});


// =========================
//    INICIAR SERVIDOR
// =========================

connectDB().then(() => {
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
