# React Application with Vite, Redux Toolkit, React Query, Zod, and Tailwind CSS

This project is a simple React application built using modern tools and technologies. It features a login page and an invoices page where you can view a list of invoices fetched from a backend API. Clicking on an invoice opens a modal with detailed information about the selected invoice.

---

## Features

- **Login Functionality**: Authenticate the user and store the token securely.
- **Invoices Page**: Display a list of invoices fetched from the backend.
- **Modal for Invoice Details**: View detailed information about a selected invoice.
- **State Management**: Implemented using Redux Toolkit.
- **Data Fetching**: Handled using React Query.
- **Validation**: Form validation using Zod.
- **Styling**: Styled using Tailwind CSS.

---

## Prerequisites

- Node.js (>= v16)
- npm or yarn

---

## Installation

### 1. Clone the Repository

```bash
git clone <repository-url>
cd <repository-name>
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Application

```bash
npm run dev
```

The application will be available at `http://localhost:5173` by default.
Backend will be available at `http://localhost:3000` by default.

---

## Project Structure

```plaintext
.
├── src
│   ├── components        # Reusable components
│   ├── features          # Redux slices and logic
│   ├── pages             # Page components (Login, Invoices)
│   ├── services          # API service functions
│   ├── validation        # Zod validation schemas
│   ├── App.tsx           # Main application component
│   ├── main.tsx          # Entry point
│   └── index.css         # Global styles
├── public                # Public assets
├── tailwind.config.js    # Tailwind CSS configuration
├── vite.config.ts        # Vite configuration
├── package.json          # Project metadata
└── README.md             # Documentation
```

---

## Usage

### 1. Login Page

- Navigate to the `/` route.
- Enter your credentials (email and password) and click **Login**.
- Upon successful login, a token is stored in the Redux store.

### 2. Invoices Page

- Navigate to the `/invoices` route.
- View a list of invoices fetched from the backend API.
- Click on an invoice row to open a modal displaying its details.

---

## Technologies Used

### Frontend

- **Vite**: Fast build tool and development server.
- **React**: JavaScript library for building user interfaces.
- **TypeScript**: For type safety and improved developer experience.
- **Redux Toolkit**: State management.
- **React Query**: Data fetching and caching.
- **Tailwind CSS**: Utility-first CSS framework for styling.

### Backend

The backend should expose the following endpoints:

- `POST /auth/login`: Authenticate the user and return a token.
- `GET /invoices`: Fetch the list of invoices.
- `GET /invoices/:id`: Retrieve details of a specific invoice for modal display.

---

## Commands

### Development Server

Start the development server:

```bash
npm run dev
```

### Build

Build the application for production:

```bash
npm run build
```

### Preview

Preview the production build:

```bash
npm run preview
```

---

## License

This project is licensed under the MIT License. See the LICENSE file for details.

---

## Notes

1. Ensure the backend API is running and accessible before starting the application.
2. Tailwind CSS requires the `tailwind.config.js` file for custom configurations.
