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
    password: "123456",
    avatar: "https://randomuser.me/api/portraits/men/44.jpg"
  },
  {
    nombre: "Ana",
    email: "ana@ejemplo.com",
    password: "abcdef",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
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
    ],
    avatar: "https://randomuser.me/api/portraits/men/44.jpg"
  },
  {
    usuario: "Ana",
    contenido: "Disfrutando de un gran día.",
    fecha: new Date(),
    likes: ["Pablo"],
    comentarios: [],
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  }
]);

// Colección amigos (Friends)
appDB.amigos.insertMany([
  {
    usuario: "Pablo",
    amigos: [
      {
        nombre: "Ana",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg"
      }
    ]
  },
  {
    usuario: "Ana",
    amigos: [
      {
        nombre: "Pablo",
        avatar: "https://randomuser.me/api/portraits/men/44.jpg"
      }
    ]
  }
]);

// Colección mensajes (Messages)
appDB.mensajes.insertMany([
  {
    de: "Pablo",
    para: "Ana",
    mensaje: "Hola Ana, ¿cómo estás?",
    fecha: new Date(),
    avatar: "https://randomuser.me/api/portraits/men/44.jpg"
  },
  {
    de: "Ana",
    para: "Pablo",
    mensaje: "¡Hola Pablo! Todo bien, ¿y tú?",
    fecha: new Date(),
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  }
]);

// Colección notificaciones (Notifications)
appDB.notificaciones.insertMany([
  {
    usuario: "Pablo",
    tipo: "like",
    mensaje: "Ana le dio like a tu publicación.",
    fecha: new Date(),
    leido: false,
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    usuario: "Ana",
    tipo: "comentario",
    mensaje: "Pablo comentó en tu publicación.",
    fecha: new Date(),
    leido: false,
    avatar: "https://randomuser.me/api/portraits/men/44.jpg"
  }
]);

// Colección perfiles (Profile)
appDB.perfiles.insertMany([
  {
    usuario: "Pablo",
    bio: "Desarrollador y amante de la tecnología.",
    avatar: "https://randomuser.me/api/portraits/men/44.jpg",
    intereses: ["programación", "música"]
  },
  {
    usuario: "Ana",
    bio: "Apasionada por el arte y la fotografía.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    intereses: ["arte", "fotografía"]
  }
]);
