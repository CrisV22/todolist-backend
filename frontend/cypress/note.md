Dockerfile
FROM cypress/included:12.17.4

WORKDIR /cypress

COPY . .
COPY ./runner.sh /runner.sh

RUN chmod +x /runner.sh

CMD ["bash", "./runner.sh", "localhost", "5173", "--", "npx", "cypress", "run"]

---
runner.sh
#!/bin/bash

HOST=$1
PORT=$2
shift 2

until curl --silent --fail http://$HOST:$PORT/ > /dev/null; do
  echo "⏳ Aguardando $HOST:$PORT ficar disponível..."
  sleep 2
done

echo "✅ $HOST:$PORT está online!"

exec "$@"