const express = require("express");
const meta = express.Router();
const {
  getAllMeta,
  deleteMeta,
  createMeta,
  updateMeta,
  getMeta,
} = require("../queries/meta.js");

//INDEX
meta.get("/", async (req, res) => {
  const allMeta = await getAllMeta();
  if (allMeta[0]) {
    res.status(200).json({ payload: allMeta });
  } else {
    res.status(500).json({ error: "server error" });
  }
});
//SHOW
meta.get("/:id", async (req, res) => {
  const { id } = req.params;
  const meta = await getMeta(id);
  if (meta.id) {
    res.json({ success: true, payload: meta });
  } else {
    res.status(404).json({ success: false, payload: "not found" });
  }
});

// //CREATE
meta.post("/", async (req, res) => {
  try {
    const meta = await createMeta(req.body);
    res.json({ success: true, payload: meta[0] });
  } catch (error) {
    res.status(400).json({ success: false, payload: "bad server request" });
  }
});

// // UPDATE
meta.put("/:id", async (req, res) => {
  try {
    const meta = await updateMeta(req.params.id, req.body);
    res.json({ success: true, payload: meta });
  } catch (error) {
    res.status(400).json({ success: false, error: "bad error" });
  }
});

// //DELETE
meta.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedMeta = await deleteMeta(id);
  if (deletedMeta) {
    if (deletedMeta.id) {
      res.status(200).json({ success: true, payload: deletedMeta });
    } else {
      res.status(404).json({ success: false, payload: deleteMeta });
    }
  } else {
    res.status(500).json({ success: false, payload: deleteMeta });
  }
});

module.exports = meta;
