-- Esse init.sql só é executado na primeira vez em que o volume do banco é criado.
-- Se quiser testar de novo, sempre use docker-compose down -v para forçar a reexecução do script.

-- Habilita suporte a UUID
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Cria a tabela todos com id UUID
CREATE TABLE IF NOT EXISTS todos (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
