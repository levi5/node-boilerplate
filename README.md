# 🌟 Node Boilerplate

A starter template for building **Node.js** applications with best practices and a clean architecture setup.

## ✨ Features

- 🚀 **TypeScript Ready**: Fully configured for TypeScript development.
- ⚡ **Fastify Framework**: A high-performance Node.js web framework.
- 🎨 **Biome**: Ensures consistent code style and quality.
- 🌍 **Environment Management**: Centralized `.env` configuration using `dotenv`.
- ✅ **Test-Ready**: Integrated setup for unit and integration testing with `Vitest`.
- 🛠️ **Clean Architecture**: Organized project structure with a clear separation of concerns.
- 📄 **Swagger API Documentation**: Automatically generates API documentation using Swagger for easy integration and understanding of the endpoints.

## 🛡️ Prerequisites

- [📦 Node.js](https://nodejs.org/) (v22 or later)
- [🖇️ pnpm](https://pnpm.io/) (v8 or later)

## 🏁 Getting Started

### 🚧 Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/levi5/node-boilerplate.git
   cd node-boilerplate
   ```

2. **Install dependencies:**

   ```bash
   pnpm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the root directory based on the `.env.example` file:

   ```bash
   cp .env.example .env
   ```

4. **Start the development server:**

   ```bash
   pnpm dev
   ```

## 🔧 Scripts

| Script                | Description                                      |
|-----------------------|--------------------------------------------------|
| `pnpm start`          | Run the application in production mode.         |
| `pnpm dev`            | Run the application in watch mode.              |
| `pnpm build`          | Build the application for production using `tsup`. |
| `pnpm test:unit`      | Run unit tests using `Vitest`.                  |
| `pnpm test:integration` | Run integration tests using `Vitest`.          |
| `pnpm coverage`       | Generate a test coverage report using `Vitest`.   |

## 📂 Folder Structure

```plaintext
node-boilerplate/
├── src/
│   ├── main/
│   │   ├── adapters/    # Custom adapters for integrating external modules
│   │   ├── factories/   # Factory functions for creating instances
│   │   ├── ports/       # Definitions of interfaces and abstract classes
│   │   ├── routes/      # Application routes configuration
│   │   └── app.ts       # Main application entry point
│   ├── presentation/
│   │   ├── controllers/ # Controllers for handling HTTP requests
│   │   ├── protocols/   # Interfaces and contracts used in the presentation layer
│   ├── domain/          # Core business logic and entities
│   ├── infra/           # External frameworks, databases, and services
├── tests/               # Unit and integration tests
├── settings/
│   ├── tsup/           # TSUP build configurations
│   ├── vitest/         # Vitest configurations
├── .env.example        # Example environment variables
├── package.json        # Node.js dependencies and scripts
└── README.md           # Project documentation
```

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

## 📜 License

This project is licensed under the [MIT License](./LICENSE.txt).
