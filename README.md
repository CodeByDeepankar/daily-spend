# Daily Spend

Daily Spend is a modern, full-stack expense tracking application designed to help users manage their finances with elegance and ease. It features a responsive frontend with smooth animations and a robust serverless-ready backend.

## 🚀 Tech Stack

### Frontend
- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Library:** [React 19](https://react.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)

### Backend
- **Runtime:** [Node.js](https://nodejs.org/)
- **Framework:** [Express.js](https://expressjs.com/)
- **Database:** [MongoDB](https://www.mongodb.com/) (with Mongoose)
- **Deployment:** [Serverless Framework](https://www.serverless.com/) (AWS Lambda compatible)
- **Authentication:** JWT (JSON Web Tokens) & Bcryptjs

## 🛠️ Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v18 or higher)
- A [MongoDB](https://www.mongodb.com/cloud/atlas) connection URI (local or Atlas)

## 🏁 Quick Start

### 1. Clone the Repository

```bash
git clone <repository-url>
cd daily-spend
```

### 2. Backend Setup

Navigate to the backend directory and install dependencies:

```bash
cd backend
npm install
```

Create a `.env` file in the `backend` directory with the following variables:

```env
MONGO_URI=mongodb+srv://<your-connection-string>
JWT_SECRET=your_super_secret_jwt_key
PORT=5000
```

Start the backend development server:

```bash
npm run dev
```
The server will start on `http://localhost:5000` (or your defined port).

### 3. Frontend Setup

Open a new terminal, navigate to the frontend directory, and install dependencies:

```bash
cd ../frontend
npm install
```

Start the frontend development server:

```bash
npm run dev
```

The application will be available at `http://localhost:3000`.

## 📁 Project Structure

```
daily-spend/
├── backend/                # Express & Serverless Backend
│   ├── config/             # Database configuration
│   ├── controllers/        # Route logic
│   ├── models/             # Mongoose schemas
│   ├── routes/             # API routes
│   └── serverless.yml      # Serverless deployment config
│
└── frontend/               # Next.js Frontend
    ├── app/                # App Router pages and layouts
    ├── components/         # Reusable UI components
    ├── contexts/           # React Context (Auth)
    └── lib/                # Utilities and API clients
```

## ✨ Features

- **User Authentication:** Secure Sign Up and Login.
- **Dashboard:** Overview of total balance and financial health.
- **Expense Tracking:** Add, edit, and delete expenses.
- **Categorization:** Visual icons and colors for different expense categories.
- **Responsive Design:** Works seamlessly on desktop and mobile.
