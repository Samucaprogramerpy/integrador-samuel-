import express from 'express';
import { neon } from '@neondatabase/serverless';
import 'dotenv/config';
import cors from 'cors'

const app = express();
app.use(cors());
app.use(express.json());

const sql = neon(process.env.DATABASE_URL);

app.get('/', (req, res) => {
  res.send('A API está rodando!');
});

app.get('/professores', async (req, res) => {
  try {
    const professores = await sql`SELECT * FROM professores;`;
    res.json(professores);
  } catch (error) {
    console.error('Erro ao buscar usuários:', error);
    res.status(500).send('Erro interno do servidor.');
  }
});

app.post('/professores', async (req, res) => {
  const { nome, email } = req.body;
  if (!nome || !email) {
    return res.status(400).send('Nome e e-mail são obrigatórios.');
  }
  try {
    await sql`INSERT INTO professores (nome, email) VALUES (${nome}, ${email});`;
    res.status(201).send('Professor criado com sucesso!');
  } catch (error) {
    console.error('Erro ao cadastrar professor:', error);
    res.status(500).send('Erro interno do servidor.');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
