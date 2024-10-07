const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.getUsers = async (req, res) => {
  const users = await prisma.user.findMany({
    include: { documents: true },
  });
  res.json(users);
};

exports.createUser = async (req, res) => {
  const { name, email } = req.body;
  try {
    const newUser = await prisma.user.create({
      data: { name, email },
    });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ error: "User creation failed", details: error });
  }
};

exports.updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  try {
    const updatedUser = await prisma.user.update({
      where: { id: Number(id) },
      data: { name, email },
    });
    res.json(updatedUser);
  } catch (error) {
    res.status(400).json({ error: "User update failed", details: error });
  }
};

exports.deleteUser = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    await prisma.user.delete({ where: { id: Number(id) } });
    res.status(200).json({ message: "Usuário deletado com sucesso" });
  } catch (error) {
    res.status(400).json({ error: "User deletion failed", details: error });
  }
};
