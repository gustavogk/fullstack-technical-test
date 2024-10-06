const express = require("express");
const documentController = require("../controllers/documentController");
const router = express.Router();

router.get("/", documentController.getDocuments);
router.post("/", documentController.createDocument);
router.put("/:id", documentController.updateDocument);
router.delete("/:id", documentController.deleteDocument);

module.exports = router;
