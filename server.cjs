const express = require('express');
const { MongoClient } = require('mongodb');
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

// Primero conectar a MongoDB
connectDB().then(() => {
  // Luego arrancar el servidor
  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Servidor escuchando en http://0.0.0.0:${PORT}`);
  });
});
