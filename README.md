# Vue Template for Hackathon 26

This repository provides a Vue.js template designed for quick setup and development during hackathons. Follow the guide below to get started.

## How to Get the Template

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd HVue/BadUX
   ```

## Installation

Ensure you have Node.js and npm installed on your system. Then, install the dependencies:

```bash
npm install
```

## Startup

To start the development server, run:

```bash
npm run dev
```

This will launch the application at `http://localhost:5173` (default Vite port).

## Build for Production

To build the application for production, use:

```bash
npm run build
```

The production-ready files will be available in the `dist` folder.

## Linting and Formatting

To lint and format the code, run:

```bash
npm run lint
```

## File Structure

- `src/`: Contains the main application code.
  - `components/`: Reusable Vue components.
  - `views/`: Page-level components.
  - `router/`: Application routing configuration.
- `public/`: Static assets.
- `vite.config.ts`: Vite configuration file.

## Docker Setup

1. Build the Docker image:

   ```bash
   docker build -t vue-template .
   ```

2. Run the Docker container:
   ```bash
   docker-compose up
   ```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
