// Base de datos principal
var appDB = db.getSiblingDB('redsocialdb');

// ================================
// COLECCIÓN USUARIOS
// ================================
appDB.createCollection("usuarios", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["nombre", "email", "password", "fechaRegistro"],
      properties: {
        nombre: { bsonType: "string" },
        email: { bsonType: "string" },
        password: { bsonType: "string" },
        fechaRegistro: { bsonType: "date" },
        bio: { bsonType: "string" },
        intereses: {
          bsonType: "array",
          items: { bsonType: "string" }
        }
      }
    }
  }
});

appDB.usuarios.createIndex({ email: 1 }, { unique: true });

appDB.usuarios.insertMany([
  {
    _id: ObjectId("6935d8b0fd5e1e1f13003b2c"),
    nombre: "Santiago",
    email: "santiago@santiago.com",
    password: "$2b$10$LmZfM6sQdLaMhGqM9fWw1OqFAuKlhHFhJwGLp8pTC0x8ndjWQ4Z76",
    fechaRegistro: ISODate("2025-12-07T19:42:40.431Z"),
    bio: "Apasionado por la programación y el desarrollo web.",
    intereses: ["programación", "videojuegos", "tecnología"]
  },
  {
    _id: ObjectId("6935d8c5fd5e1e1f13003b2e"),
    nombre: "Camila",
    email: "camila@camila.com",
    password: "$2b$10$z8I68tusFCo06vExwQGL4eeTWo3ox/DTCAFCHLUkQyxNLhCOT2W1W",
    fechaRegistro: ISODate("2025-12-07T19:43:01.269Z"),
    bio: "Me encanta diseñar interfaces y aprender nuevas tecnologías.",
    intereses: ["diseño", "UX/UI", "fotografía"]
  },
  {
    _id: ObjectId("6935d8d6fd5e1e1f13003b30"),
    nombre: "Lucas",
    email: "lucas@lucas.com",
    password: "$2b$10$.74SgcaqJrBdtzeuWKUFeO0cWVBZA6RQDxtZhxQd.sJhdk7yFX9lC",
    fechaRegistro: ISODate("2025-12-07T19:43:18.121Z"),
    bio: "Apasionado por la inteligencia artificial y los algoritmos.",
    intereses: ["IA", "algoritmos", "matemáticas"]
  }
]);

// ================================
// COLECCIÓN PUBLICACIONES
// ================================
appDB.createCollection("publicaciones", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["usuario", "contenido", "fecha"],
      properties: {
        usuario: { bsonType: "string" },
        contenido: { bsonType: "string" },
        fecha: { bsonType: "date" },
        likes: { bsonType: "int" },
        comentarios: {
          bsonType: "array",
          items: {
            bsonType: "object",
            properties: {
              usuario: { bsonType: "string" },
              texto: { bsonType: "string" }
            }
          }
        }
      }
    }
  }
});

appDB.publicaciones.insertMany([
  {
    usuario: "Santiago",
    contenido: `¿Qué es la recursividad?\nLa recursividad es una técnica de programación en la que una función se llama a sí misma para resolver un problema. Es útil cuando un problema puede dividirse en subproblemas más pequeños.`,
    fecha: ISODate("2025-12-07T20:00:00Z"),
    likes: 5,
    comentarios: [
      { usuario: "Camila", texto: "La recursividad es cuando una función se llama a sí misma." },
      { usuario: "Lucas", texto: "Se usa mucho en algoritmos y estructuras de datos." }
    ], 
    imagen: "/1765137056571-549983364-recursion.png"
  },
  {
    usuario: "Camila",
    contenido: `¿Qué es un diagrama de flujo?\nUn diagrama de flujo es una representación visual de un proceso o algoritmo usando símbolos y flechas que muestran el orden de los pasos. Facilita la comprensión y comunicación de procedimientos complejos.`,
    fecha: ISODate("2025-12-07T20:05:00Z"),
    likes: 3,
    comentarios: [
      { usuario: "Santiago", texto: "Es una representación gráfica de los pasos de un proceso." },
      { usuario: "Lucas", texto: "Sirve para planificar algoritmos antes de programar." }
    ],
    imagen: "/1765137369932-24967349-diagrama.png"
  },
  {
    usuario: "Lucas",
    contenido: `¿Qué es un IDE?\nUn IDE (Integrated Development Environment) es un entorno de desarrollo que facilita la creación de software al combinar varias herramientas en una sola plataforma: editor de código, compilador, depurador y más.`,
    fecha: ISODate("2025-12-07T20:10:00Z"),
    likes: 4,
    comentarios: [
      { usuario: "Santiago", texto: "IDE significa Entorno de Desarrollo Integrado, como Visual Studio Code." },
      { usuario: "Camila", texto: "Facilita la programación al incluir editor, compilador y depurador en un solo lugar." }
    ],
    imagen: "/1765137301871-384707901-ide.png"
  }
]);


// ================================
// COLECCIÓN AMIGOS
// ================================
appDB.createCollection("amigos", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["usuario"],
      properties: {
        usuario: { bsonType: "string" },
        amigos: {
          bsonType: "array",
          items: {
            bsonType: "object",
            properties: {
              nombre: { bsonType: "string" }
            }
          }
        }
      }
    }
  }
});


// ================================
// COLECCIÓN MENSAJES
// ================================
appDB.createCollection("mensajes", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["de", "para", "mensaje", "fecha"],
      properties: {
        de: { bsonType: "string" },
        para: { bsonType: "string" },
        mensaje: { bsonType: "string" },
        fecha: { bsonType: "date" }
      }
    }
  }
});


// ================================
// COLECCIÓN NOTIFICACIONES
// ================================
appDB.createCollection("notificaciones", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["usuario", "tipo", "mensaje", "fecha", "leido"],
      properties: {
        usuario: { bsonType: "string" },
        tipo: { bsonType: "string" },
        mensaje: { bsonType: "string" },
        fecha: { bsonType: "date" },
        leido: { bsonType: "bool" }
      }
    }
  }
});
