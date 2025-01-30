const { ObjectId } = require("mongodb");
const { getMongoCollection } = require("./mongodb");
const col = "eventos";
const db = "distritoVivoDB";

async function FindEventos(obj) {
  console.log(obj.tipo);

  const query = {
    estado: { $in: ["confirmado", "iniciado"] },
  };
  if (obj.concelho !== "") query.concelho = obj.concelho;
  if (obj.tipo !== "") {
    if (Array.isArray(obj.tipo)) {
      query.tipo = { $in: obj.tipo };
    } else {
      query.tipo = obj.tipo;
    }
  }
  if (obj.preco !== "") query.preco = obj.preco;
  if (obj.acessibilidade !== "") query.acessibilidade = obj.acessibilidade;

  const collection = await getMongoCollection(db, col);
  const result = await collection
    .find(query, {
      projection: { nomeResponsavel: 0, email: 0, contacto: 0, estado: 0 },
    })
    .toArray();
  return result;
}

async function FindEventosGestao() {


  const collection = await getMongoCollection(db, col);
  const result = await collection
    .find({estado:"pendente"}, {
      projection: { estado: 0 },
    })
    .toArray();
  return result;
}

async function FindEventoById(obj) {
  console.log(obj);
  
  if (!ObjectId.isValid(obj._id)) {
    return { erro: "ID inválido" };
  }
  const collection = await getMongoCollection(db, col);
  const result = await collection
    .find({_id: new ObjectId(obj._id)}, {
      projection: { nomeResponsavel: 0, email: 0, contacto: 0, estado: 0 },
    })
    .toArray();
  return result;
}

async function UpdateOneEvento(obj) {
  if (!ObjectId.isValid(obj._id)) {
    return { erro: "ID inválido" };
  }
  const collection = await getMongoCollection(db, col);
  const result = await collection.updateOne(
    { _id: new ObjectId(obj._id) },
    { $set: { estado: obj.estado } }
  );
  return result;
}

async function InsertEvento(obj) {
  obj._id = new ObjectId();
  const collection = await getMongoCollection(db, col);
  const result = await collection.insertOne(obj);
  return result;
}

module.exports = { FindEventos, UpdateOneEvento, InsertEvento, FindEventoById,FindEventosGestao };
