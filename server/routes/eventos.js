const express = require("express");
const {
  ReadEventos,
  CreateEvento,
  UpdateEvento,
  ReadEventoById,
  ReadEventosGestao,
} = require("../services/eventos");
const router = express.Router();
router.use(express.json());

router.use((err, req, res, next) => {
  if (err) {
    return res.send({ erro: "Pedido mal formatado." });
  }
  next();
});

router
  .route("/")
  .get(async (req, res) => {
    
    
    const result = await ReadEventos(req);

    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ erro: "Erro a mostrar o evento" });
    }
  })
  .post(async (req, res) => {
    const result = await CreateEvento(req);

    if (!result.erro) {
      res.status(201).json({ ok: "Evento criado com sucesso" });
    } else {
      res.status(400).json({ erro: result.erro });
    }
  });

router.get("/gestao", async (req, res) => {
  const result = await ReadEventosGestao();
  console.log(result);

  if (result) {
    res.status(200).send(result);
  } else {
    res.status(404).json({ erro: "Erro a mostrar o evento" });
  }
});

router
  .route("/:id")
  .patch(async (req, res) => {
    const result = await UpdateEvento(req);

    if (!result.erro) {
      res.status(201).json({ ok: "Evento alterado com sucesso" });
    } else {
      res.status(400).json({ erro: result.erro });
    }
  })
  .get(async (req, res) => {
    const result = await ReadEventoById(req);

    if (result) {
      res.status(200).send(result);
    } else {
      res.status(404).json({ erro: "Erro a mostrar o evento" });
    }
  });

module.exports = router;
