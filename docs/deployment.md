# 🚀 Развёртывание на сервере

## Стек

- Ubuntu 22.04
- Node + npm
- Python + FastAPI
- Caddy (с HTTPS, доменом arkvr.fun)

## Caddyfile (пример)

arkvr.fun {
root * /home/drema/arkvr-frontend/dist
file_server
reverse_proxy /api/* localhost:8010
}


## Автозапуск API

Добавь systemd-сервис или используй pm2 (если Node).


