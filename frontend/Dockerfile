FROM node:18-bullseye

# Define o diretório de trabalho
WORKDIR /app

# Instala o curl (essencial para o runner.sh)
RUN apt-get update && apt-get install -y curl

# Copia apenas os arquivos necessários primeiro (melhora o cache)
COPY package*.json ./

# Instala dependências com correção de binários
RUN npm install && npm rebuild

# Copia o restante do projeto
COPY . .

# Adiciona o script de espera
COPY ./runner.sh /runner.sh
RUN chmod +x /runner.sh

# Expõe a porta do Vite
EXPOSE 5173

# Comando para iniciar o Vite e esperar pelo backend inicializar
CMD ["bash", "./runner.sh", "backend", "3000", "--", "npm", "run", "dev"]
