const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.getDocuments = async (req, res) => {
  const documents = await prisma.document.findMany();
  res.json(documents);
};

exports.createDocument = async (req, res) => {
  const { name, status, userId } = req.body;
  try {
    const newDocument = await prisma.document.create({
      data: { name, status, userId: Number(userId) },
    });
    res.status(201).json(newDocument);
  } catch (error) {
    res.status(400).json({ error: "Document creation failed", details: error });
  }
};

exports.updateDocument = async (req, res) => {
  const { id } = req.params;
  const { name, status } = req.body;
  try {
    const updatedDocument = await prisma.document.update({
      where: { id: Number(id) },
      data: { name, status },
    });
    res.json(updatedDocument);
  } catch (error) {
    res.status(400).json({ error: "Document update failed", details: error });
  }
};

exports.deleteDocument = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.document.delete({ where: { id: Number(id) } });
    res.status(204).json({ message: "Documento deletado com sucesso." });
  } catch (error) {
    res.status(400).json({ error: "Document deletion failed", details: error });
  }
};
