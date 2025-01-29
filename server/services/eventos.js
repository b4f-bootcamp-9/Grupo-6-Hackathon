const {
  FindEventos,
  UpdateOneEvento,
  InsertEvento,
} = require("../data/eventos");

async function ReadEventos(obj) {
    
    console.log(obj);
    
    const raw = obj.query;
    

   const data = {
        concelho:raw.c || "",
        preco:raw.p || "",
        acessibilidade:raw.a || "",
        tipo:raw.t || ""
    }
    if(data.concelho === "Todos"){
      data.concelho=""
    }
  
    

  result = FindEventos(data);
  return result
}

async function UpdateEvento(obj) {
  const data = obj.body;

  data._id = obj.params.id;


  switch (data.estado) {
    case true:
      data.estado = "confirmado";
      break;
    case false:
      data.estado = "recusado";
      break;
    default:
      return { erro: "Estado inválido." };
      break;
  }

  result = await UpdateOneEvento(data);
console.log(result);
if (result.matchedCount){
    return true
}else{
     return {erro: "Ocurreu um erro a alterar na base de dados."};
}


 
}

async function CreateEvento(obj) {
  const data = obj.body;
  const camposObrigatorios = [
    { campo: "nomeEvento", message: "Por favor insira o nome do evento" },
    { campo: "descricao", message: "Por favor insira a descricao do evento" },
    { campo: "data", message: "Por favor insira a data do evento" },
    { campo: "concelho", message: "Por favor escolha o concelho do evento" },
    { campo: "morada", message: "Por favor insira a morada do evento" },
    { campo: "tipo", message: "Por favor escolha o tipo do evento" },
    { campo: "contacto", message: "Por favor insira o seu contacto" },
    { campo: "email", message: "Por favor insira o seu email" },
    { campo: "nomeResponsavel", message: "Por favor insira o seu nome" },
  ];

  for (const item of camposObrigatorios) {
    if (!data[item.campo]) {
      return { erro: item.message };
    }
  }

  data.estado = "pendente";

  result = InsertEvento(data);
  return result;
}

module.exports = { ReadEventos, UpdateEvento, CreateEvento };
