db = db.getSiblingDB('redsocialdb');
db.createUser({
  user: "pablogarciajcuser",
  pwd: "password",
  roles: [{ role: "readWrite", db: "redsocialdb" }]
});
