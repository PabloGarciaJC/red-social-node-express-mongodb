// Crear usuario de base de datos para la app
// Crear usuario root para MongoDB (usado por mongo-express y configuración docker-compose)
// Este script solo inserta datos de ejemplo. El usuario root se crea automáticamente por MongoDB con las variables de entorno.

// Crear colecciones de prueba y datos de ejemplo en la base de datos principal
var appDB = db.getSiblingDB('redsocialdb');

// Colección usuarios
appDB.usuarios.insertMany([
  {
    nombre: "Pablo",
    email: "pablo@ejemplo.com",
    password: "123456"
  },
  {
    nombre: "Ana",
    email: "ana@ejemplo.com",
    password: "abcdef"
  }
]);

// Colección productos
appDB.productos.insertMany([
  {
    nombre: "Producto 1",
    descripcion: "Descripción del producto 1",
    precio: 100,
    stock: 10
  },
  {
    nombre: "Producto 2",
    descripcion: "Descripción del producto 2",
    precio: 200,
    stock: 5
  }
]);

// Colección comentarios
appDB.comentarios.insertMany([
  {
    usuario: "Pablo",
    comentario: "Muy buen producto!",
    calificacion: 5
  },
  {
    usuario: "Ana",
    comentario: "No me gustó tanto.",
    calificacion: 2
  }
]);
