cd arkvr-rag-api
pip install -r requirements.txt
uvicorn main:app --host 0.0.0.0 --port 8010 --reload

---

### 📄 `frontend.md`

```md
# 🎨 Интерфейс ARKVR

## Структура

- `/components/Navbar.jsx` — главное меню
- `/components/ContactPanel.jsx` — иконки соцсетей, "связаться с нами"
- `/pages/Drema.jsx` — модуль интерпретации снов
- `/App.jsx` — главная страница
- `Tailwind + Vite` — стили и сборка

## Навигация

Используется React Router:
```jsx
<Routes>
  <Route path="/" element={<App />} />
  <Route path="/drema" element={<Drema />} />
</Routes>
---

### 📄 `backend.md`

```md
# 🧠 Бэкенд ARKVR (FastAPI)
Стек
FastAPI + uvicorn
Пример запроса
http
Копировать
Редактировать
POST /add
{
  "documents": ["Привет, Дрин!"],
  "ids": ["1"]
}
ChromaDB для векторного поиска

Ollama (LLaMA 3) через HTTP API

Модули: /add, /search, /generate


## Запуск

```bash
uvicorn main:app --host 0.0.0.0 --port 8015



---

### 📄 `modules.md`

```md
# 🧩 Модули ARKVR

## /drema

Толкователь снов. Использует embedding и генеративные модели.

## /arkvr-blog

Блог на базе Astro. Планируется публикация статей, исследований и хроник.

## /admin (локально)

Приватный интерфейс управления AI, доступ только с локального IP.

## /cerber (будущее)

Система прав доступа, контроль входа в приватные модули.








