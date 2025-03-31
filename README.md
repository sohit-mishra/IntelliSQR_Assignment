# Full-Stack Assignment - IntelliSQR

## Project Overview
This project is a full-stack web application built using Next.js for the frontend and Node.js with Prisma for the backend. The application implements user authentication based on the provided Figma design.

## Technologies Used
### Frontend:
- Next.js (React + TypeScript)
- React Hook Form (Form Management & Validation)
- React Query (State Management & Data Fetching)
- Zod (Schema Validation)
- Tailwind CSS (Styling)

### Backend:
- Node.js with Express.js
- Prisma (ORM for PostgreSQL)
- TypeScript
- JWT Authentication
- Bcrypt (Password Hashing)

## Project Setup
### Backend Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/sohit-mishra/IntelliSQR_Assignment.git
   cd backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file in the backend root directory and add:
   ```sh
   DATABASE_URL=""  # Use your database URL here
   PORT=3000
   CORS_ORIGIN=http://localhost:3001
   ```
4. Run the backend server:
   ```sh
   npm run dev
   ```

### Frontend Setup
1. Navigate to the frontend directory:
   ```sh
   cd frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file in the frontend root directory and add:
   ```sh
   NEXT_PUBLIC_API_URL=http://localhost:3000/api
   ```
4. Start the frontend server:
   ```sh
   npm run dev
   ```

## API Routes
| Method | Endpoint               | Description          |
|--------|------------------------|----------------------|
| POST   | `/api/users/register`  | User registration   |

## Contact
For any questions, please contact **Sohit Mishra** via [LinkedIn](https://www.linkedin.com/in/sohitmishra/).