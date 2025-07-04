# API Standard RFC7807

![CI](https://github.com/NeaDigitra/API-Standard-RFC7807/actions/workflows/test.yml/badge.svg)

A production-ready Express.js API boilerplate implementing **RFC7807 Problem Details** standard, configurable error documentation, and universal success/error responses. Built for scalable API development with clean PR history and coding standards.

---

## 🚀 Features

* ✅ **RFC7807-compliant error responses** with dynamic type URLs (via `.env`)
* ✅ **HTML error documentation generator** for each error type
* ✅ **Universal success response format**
* ✅ **Environment-based config with dotenv**
* ✅ **Example API route with validation**
* ✅ **Express 5 ready**
* ✅ **Built-in unit tests with Jest + node-mocks-http**

---

## 📂 Project Structure

```plaintext
src/
 ├── app.js                  # Express app entrypoint
 ├── config.js               # Environment config
 ├── errorsMap.js            # Central error map RFC7807 style
 ├── middleware/
 │    └── errorDocPage.js    # HTML error doc generator
 ├── routes/
 │    ├── errors.js          # Error doc routes
 │    └── index.js           # Example API routes
 └── utils/
      ├── sendProblem.js     # RFC7807 error response helper
      └── sendSuccess.js     # Success response helper
test/
 ├── errorDocPage.test.js    # Unit test for HTML generator
 ├── sendProblem.test.js     # Unit test for RFC7807 helper
 └── sendSuccess.test.js     # Unit test for success helper
```

---

## ⚙️ Environment Variables

`.env.example`

```env
APP_PORT=3000
APP_DEBUG=false
ERROR_BASE_URL=https://api.domain.com/errors
```

---

## 🛠 Usage

```bash
npm install
npm test   # run unit tests
npm start  # start the server
```

* Access API: `http://localhost:3000/api/example?email=test@example.com`
* Access Error Docs: `http://localhost:3000/errors/validation`

---

## 📝 Contribution Guidelines

* PR title style: `type(scope): message :emoji:`
* Commit message style: `type(scope): message :emoji:`
* One feature per PR (atomic commits)
* All code and comments in English
* Follow the provided coding standards (camelCase, braces, no inline comments inside functions)

---

## 💡 Example RFC7807 Error Response

```json
{
  "type": "https://api.domain.com/errors/validation",
  "title": "Validation Failed",
  "status": 422,
  "detail": "Email is required.",
  "instance": "/api/example",
  "errors": {
    "email": ["Email is required."]
  }
}
```

---

## ✨ License

MIT © NeaDigitra