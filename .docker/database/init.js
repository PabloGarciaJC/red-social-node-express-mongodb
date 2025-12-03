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

// Colección publicaciones (Feed)
appDB.publicaciones.insertMany([
  {
    usuario: "Pablo",
    contenido: "¡Hola mundo! Esta es mi primera publicación.",
    fecha: new Date(),
    likes: ["Ana"],
    comentarios: [
      { usuario: "Ana", texto: "Bienvenido!" }
    ]
  },
  {
    usuario: "Ana",
    contenido: "Disfrutando de un gran día.",
    fecha: new Date(),
    likes: ["Pablo"],
    comentarios: []
  }
]);

// Colección amigos (Friends)
appDB.amigos.insertMany([
  {
    usuario: "Pablo",
    amigos: ["Ana"]
  },
  {
    usuario: "Ana",
    amigos: ["Pablo"]
  }
]);

// Colección mensajes (Messages)
appDB.mensajes.insertMany([
  {
    de: "Pablo",
    para: "Ana",
    mensaje: "Hola Ana, ¿cómo estás?",
    fecha: new Date()
  },
  {
    de: "Ana",
    para: "Pablo",
    mensaje: "¡Hola Pablo! Todo bien, ¿y tú?",
    fecha: new Date()
  }
]);

// Colección notificaciones (Notifications)
appDB.notificaciones.insertMany([
  {
    usuario: "Pablo",
    tipo: "like",
    mensaje: "Ana le dio like a tu publicación.",
    fecha: new Date(),
    leido: false
  },
  {
    usuario: "Ana",
    tipo: "comentario",
    mensaje: "Pablo comentó en tu publicación.",
    fecha: new Date(),
    leido: false
  }
]);

// Colección perfiles (Profile)
appDB.perfiles.insertMany([
  {
    usuario: "Pablo",
    bio: "Desarrollador y amante de la tecnología.",
    avatar: "pablo.jpg",
    intereses: ["programación", "música"]
  },
  {
    usuario: "Ana",
    bio: "Apasionada por el arte y la fotografía.",
    avatar: "ana.jpg",
    intereses: ["arte", "fotografía"]
  }
]);
