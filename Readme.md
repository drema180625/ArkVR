# 🌌 ARKVR — Архитектура Реальности и Квантовых Виртуальных Реальностей

**ARKVR** — это мультимодульный проект на стыке квантовой теории, нейронаук и ИИ.  
Он представляет собой портал в мир снов, смыслов и сверхсознания, воплощённый в виде веб-приложения с AI-интерфейсами.

## 🔮 Онлайн-доступ

▶️ [Перейти на сайт](https://arkvr.fun)  
🧠 Интерпретатор снов `Drema`, блог `ARKVR-блог`, и другие модули — на подходе.

---

## 🚀 Технологии

- **Frontend:** React + Vite + Tailwind CSS
- **Backend (API):** Python + FastAPI + ChromaDB
- **LLM:** LLaMA 3 через Ollama (локально)
- **База данных векторов:** ChromaDB (сохраняется локально)
- **Хостинг:** Ubuntu 22.04, Caddy + Node/Nginx (в зависимости от контекста)
- **CI:** ручной или готовится GitHub Actions
- **Инфраструктура:** проект разбит на модули `/drema`, `/arkvr-blog`, `/admin`, `/cerber` (последние два — приватные)

---

## 🧱 Структура проекта

```bash
arkvr-frontend/        # React/Vite фронтенд
├── public/
│   └── assets/        # Картинки, логотипы и др.
├── src/
│   ├── components/    # Navbar, ContactPanel и др.
│   ├── pages/         # Отдельные модули, например Drema.jsx
│   ├── App.jsx        # Главная страница
│   ├── main.jsx       # Точка входа
│   └── index.css      # Tailwind стили
├── tailwind.config.js
├── vite.config.js
└── package.json

# Клонировать репозиторий
git clone https://github.com/arkvr/arkvr-frontend.git
cd arkvr-frontend

# Установить зависимости
npm install

# Запустить локально
npm run dev

# Создать production-сборку
npm run build


📡 Backend API (FastAPI)
Расположен в arkvr-rag-api/
Запуск:

cd arkvr-rag-api
uvicorn main:app --host 0.0.0.0 --port 8010 --reload

Поддерживает:

/add — добавить документы в базу

/search — искать по векторному пространству
🛠️ TODO / Roadmap
 React frontend с живой страницей

 Navbar + ContactPanel + новостной блок

 Caddy + домен arkvr.fun

 Модуль Drema (анализ снов)

 Модуль arkvr-blog (Astro)

 Админ-панель /admin (ограниченный доступ)

 LLM-интеграция через Ollama и ChromaDB

 Поддержка авторизации

 Telegram-бот @arkvr_bot

 CI/CD

👨‍🚀 Автор
Разработано сновидцем и архитектором нейроинтерфейсов — Дрином
💬 Telegram: @arkvr_bot
🌐 Сайт: arkvr.fun

📜 Лицензия
Проект распространяется под лицензией MIT (или укажи свою, если есть ограничения).

yaml
Копировать
Редактировать

---

### ✅ Что дальше?

- Закинуть этот `README.md` в корень проекта (`arkvr-frontend/`)
- Добавить скриншоты, если хочешь:  
  Вставка в markdown:

```md
![Главная страница ARKVR](./public/assets/screenshot-main.png)

