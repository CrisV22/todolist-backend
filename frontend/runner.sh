#!/bin/bash
# chmod +x runner.sh - permission

HOST=$1
PORT=$2
shift 2           # Remove os dois primeiros argumentos ($1 e $2) para deixar apenas o comando a ser executado

# Enquanto não conseguir conectar no endereço informado, continua tentando
until curl --silent --fail http://$HOST:$PORT/ > /dev/null; do
  echo "⏳ Aguardando $HOST:$PORT ficar disponível..."
  sleep 2
done

echo "✅ $HOST:$PORT está online!"

# Executa o comando passado como argumento extra.
exec "$@"
