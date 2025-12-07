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
