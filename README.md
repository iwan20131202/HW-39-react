# Contacts Book (HW-39-react)

Книга контактів з реєстрацією, логіном та приватною колекцією контактів.

**Стек:** React 18, Redux Toolkit (`createEntityAdapter`), redux-persist, React Router 6, styled-components, axios.

## Маршрути

| Маршрут     | Тип       | Опис                                   |
| ----------- | --------- | -------------------------------------- |
| `/`         | публічний | головна сторінка                       |
| `/register` | публічний | реєстрація (залогіненого → `/contacts`) |
| `/login`    | публічний | логін (залогіненого → `/contacts`)      |
| `/contacts` | приватний | список контактів (незалогіненого → `/login`) |

## Бекенд

Адреса API задається одним рядком у `src/services/api.js` (`API_BASE_URL`).
Використовуються: `POST /users/signup`, `POST /users/login`, `POST /users/logout`,
`GET /users/current`, `GET/POST /contacts`, `DELETE /contacts/:id`. Контакт має поля `name` і `number`.

## Скрипти

```bash
npm install
npm start          # dev-сервер
npm run build      # production-збірка
npm run deploy     # збірка + публікація в гілку gh-pages
```
