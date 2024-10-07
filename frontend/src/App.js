import React, { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "http://localhost:3000"; // URL da sua API

const App = () => {
  const [users, setUsers] = useState([]);
  const [documents, setDocuments] = useState([]);
  const [loadingUsers, setLoadingUsers] = useState(true);
  const [loadingDocuments, setLoadingDocuments] = useState(true);
  const [errorUsers, setErrorUsers] = useState(null);
  const [errorDocuments, setErrorDocuments] = useState(null);
  const [newUser, setNewUser] = useState({ name: "", email: "" });
  const [newDocument, setNewDocument] = useState({
    name: "",
    status: false,
    userId: "",
  });
  const [editingUser, setEditingUser] = useState(null);
  const [editingDocument, setEditingDocument] = useState(null);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(`${API_URL}/users`);
      setUsers(response.data);
    } catch (error) {
      setErrorUsers(error.message);
    } finally {
      setLoadingUsers(false);
    }
  };

  const fetchDocuments = async () => {
    try {
      const response = await axios.get(`${API_URL}/documents`);
      setDocuments(response.data);
    } catch (error) {
      setErrorDocuments(error.message);
    } finally {
      setLoadingDocuments(false);
    }
  };

  const handleAddOrUpdateUser = async (e) => {
    e.preventDefault();
    try {
      if (editingUser) {
        await axios.put(`${API_URL}/users/${editingUser.id}`, newUser);
      } else {
        await axios.post(`${API_URL}/users`, newUser);
      }
      setNewUser({ name: "", email: "" });
      setEditingUser(null);
      window.location.reload(); // Atualiza a página após a criação/edição
    } catch (error) {
      console.error("Erro ao adicionar ou atualizar usuário:", error);
    }
  };

  const handleAddOrUpdateDocument = async (e) => {
    e.preventDefault();
    try {
      if (editingDocument) {
        await axios.put(
          `${API_URL}/documents/${editingDocument.id}`,
          newDocument
        );
      } else {
        await axios.post(`${API_URL}/documents`, newDocument);
      }
      setNewDocument({ name: "", status: false, userId: "" });
      setEditingDocument(null);
      window.location.reload(); // Atualiza a página após a criação/edição
    } catch (error) {
      console.error("Erro ao adicionar ou atualizar documento:", error);
    }
  };

  const handleEditUser = (user) => {
    setNewUser({ name: user.name, email: user.email });
    setEditingUser(user);
  };

  const handleEditDocument = (document) => {
    setNewDocument({
      name: document.name,
      status: document.status,
      userId: document.userId,
    });
    setEditingDocument(document);
  };

  const handleDeleteUser = async (id) => {
    try {
      await axios.delete(`${API_URL}/users/${id}`);
      window.location.reload(); // Atualiza a página após a exclusão
    } catch (error) {
      console.error("Erro ao deletar usuário:", error);
    }
  };

  const handleDeleteDocument = async (id) => {
    try {
      await axios.delete(`${API_URL}/documents/${id}`);
      window.location.reload(); // Atualiza a página após a exclusão
    } catch (error) {
      console.error("Erro ao deletar documento:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
    fetchDocuments();
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Painel de Gerenciamento</h1>

      <section style={styles.section}>
        <h2>Lista de Usuários</h2>
        {loadingUsers ? (
          <p>Carregando usuários...</p>
        ) : errorUsers ? (
          <p>Erro: {errorUsers}</p>
        ) : users.length > 0 ? (
          <ul style={styles.list}>
            {users.map((user) => (
              <li key={user.id} style={styles.listItem}>
                <strong>{user.name}</strong> - {user.email}
                <ul>
                  {user.documents && user.documents.length > 0 ? (
                    user.documents.map((doc) => (
                      <li key={doc.id} style={styles.nestedListItem}>
                        {doc.name} - {doc.status ? "Ativo" : "Inativo"}
                      </li>
                    ))
                  ) : (
                    <li style={styles.nestedListItem}>
                      Nenhum documento associado
                    </li>
                  )}
                </ul>
                <button
                  onClick={() => handleEditUser(user)}
                  style={styles.button}
                >
                  Editar
                </button>
                <button
                  onClick={() => handleDeleteUser(user.id)}
                  style={styles.buttonDelete}
                >
                  Deletar
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p>Nenhum usuário encontrado.</p>
        )}

        <form onSubmit={handleAddOrUpdateUser} style={styles.form}>
          <h3>{editingUser ? "Editar Usuário" : "Adicionar Usuário"}</h3>
          <input
            type="text"
            placeholder="Nome"
            value={newUser.name}
            onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
            required
            style={styles.input}
          />
          <input
            type="email"
            placeholder="Email"
            value={newUser.email}
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
            required
            style={styles.input}
          />
          <button type="submit" style={styles.button}>
            {editingUser ? "Atualizar Usuário" : "Adicionar Usuário"}
          </button>
        </form>
      </section>

      <section style={styles.section}>
        <h2>Lista de Documentos</h2>
        {loadingDocuments ? (
          <p>Carregando documentos...</p>
        ) : errorDocuments ? (
          <p>Erro: {errorDocuments}</p>
        ) : documents.length > 0 ? (
          <ul style={styles.list}>
            {documents.map((doc) => (
              <li key={doc.id} style={styles.listItem}>
                {doc.name} - {doc.status ? "Ativo" : "Inativo"} (User ID:{" "}
                {doc.userId})
                <button
                  onClick={() => handleEditDocument(doc)}
                  style={styles.button}
                >
                  Editar
                </button>
                <button
                  onClick={() => handleDeleteDocument(doc.id)}
                  style={styles.buttonDelete}
                >
                  Deletar
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p>Nenhum documento encontrado.</p>
        )}

        <form onSubmit={handleAddOrUpdateDocument} style={styles.form}>
          <h3>
            {editingDocument ? "Editar Documento" : "Adicionar Documento"}
          </h3>
          <input
            type="text"
            placeholder="Nome do Documento"
            value={newDocument.name}
            onChange={(e) =>
              setNewDocument({ ...newDocument, name: e.target.value })
            }
            required
            style={styles.input}
          />
          <select
            value={newDocument.status}
            onChange={(e) =>
              setNewDocument({
                ...newDocument,
                status: e.target.value === "true",
              })
            }
            required
            style={styles.input}
          >
            <option value="true">Ativo</option>
            <option value="false">Inativo</option>
          </select>
          <input
            type="number"
            placeholder="ID do Usuário"
            value={newDocument.userId}
            onChange={(e) =>
              setNewDocument({ ...newDocument, userId: e.target.value })
            }
            required
            style={styles.input}
          />
          <button type="submit" style={styles.button}>
            {editingDocument ? "Atualizar Documento" : "Adicionar Documento"}
          </button>
        </form>
      </section>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    maxWidth: "800px",
    margin: "0 auto",
    padding: "20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  },
  header: {
    textAlign: "center",
    color: "#333",
  },
  section: {
    marginBottom: "40px",
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
  listItem: {
    backgroundColor: "#e0e0e0",
    margin: "5px 0",
    padding: "10px",
    borderRadius: "4px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  nestedListItem: {
    marginLeft: "20px",
    fontSize: "0.9em",
    color: "#555",
  },
  form: {
    marginTop: "20px",
    display: "flex",
    flexDirection: "column",
  },
  input: {
    marginBottom: "10px",
    padding: "10px",
    fontSize: "1em",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "10px",
    fontSize: "1em",
    borderRadius: "4px",
    border: "none",
    backgroundColor: "#4CAF50",
    color: "white",
    cursor: "pointer",
    marginRight: "10px",
    marginTop: "10px",
  },
  buttonDelete: {
    padding: "10px",
    fontSize: "1em",
    borderRadius: "4px",
    border: "none",
    backgroundColor: "#f44336",
    color: "white",
    cursor: "pointer",
    marginTop: "10px",
  },
};

export default App;
