FROM node:18-bullseye

# Define o diretório de trabalho
WORKDIR /app

# Copia apenas os arquivos necessários primeiro (melhora o cache)
COPY package*.json ./

# Instala dependências com correção de binários
RUN npm install && npm rebuild

# Copia o restante do projeto
COPY . .

# Expõe a porta do Vite
EXPOSE 5173

# Comando para iniciar o Vite
CMD ["npm", "run", "dev"]
