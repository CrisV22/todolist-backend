# Imagem base
FROM node:18-slim

# Diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos do projeto para o container
COPY package*.json ./

# Instala dependências
RUN npm install

# Copia o restante do código
COPY . .

# Expõe a porta da aplicação
EXPOSE 3000

ENTRYPOINT ["npm", "run", "dev"]