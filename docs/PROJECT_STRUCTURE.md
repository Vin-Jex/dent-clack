
---

# Project Structure and Methodology

This document provides a detailed breakdown of the DentClack project, including its architecture, tech stack, project structure, and development methodologies for both frontend and backend. It serves as a guide to help contributors understand how the project is organized and how to work with various parts of the codebase.

## Table of Contents

1. [Frontend Structure](#frontend-structure)
2. [Backend Structure](#backend-structure)
3. [Database](#database)
4. [DevOps and Deployment](#devops-and-deployment)
5. [UI/UX Design](#uiux-design)
6. [Testing Methodologies](#testing-methodologies)

---

## Frontend Structure

The frontend is built using **Next.js** with the new **App Router** structure. We use **TailwindCSS** for styling and **React Icons** and **MUI Icons** as the only icon libraries allowed. We also use **React Toastify** for toast notifications.

The file structure is as follows:

### Folder Structure

```plaintext
dent-clack/
│
├── app/
│   ├── page.tsx            # Home page
│   ├── [...slug].tsx       # Dynamic routes for other pages
│   └── api/                # API routes specific to the frontend (Next.js API)
│
├── components/
│   ├── atoms/              # Smallest, reusable UI components (e.g., buttons, icons)
│   ├── molecules/          # Small groups of components (e.g., form inputs, card layouts)
│   └── organisms/          # Larger, reusable components (e.g., full forms, header, footer)
│
├── utils/
│   ├── api.ts              # API utility functions for fetching data
│   └── helpers.ts          # Other utility and helper functions (e.g., date formatting)
│
├── styles/                 # Global styles and Tailwind configuration
│   ├── globals.css         # Global CSS (for Tailwind and other styles)
│   └── tailwind.config.js  # Tailwind CSS configuration
│
└── public/                 # Static files (e.g., images, icons)
```

### Key Concepts

1. **Atomic Design**: The `components` folder follows Atomic Design principles:
   - **Atoms**: Basic building blocks (e.g., buttons, input fields, icons).
   - **Molecules**: Groupings of atoms that form functional components (e.g., a form input with a label).
   - **Organisms**: Combinations of molecules into larger, reusable sections of the UI (e.g., a signup form).
   
2. **App Router**: All route definitions are located in the `app/` folder. Each route is a React component, and dynamic routes are handled using the `[...]` syntax.

3. **Styling**: 
   - **TailwindCSS** is the primary CSS framework, allowing for utility-first CSS.
   - Custom styles, if needed, are defined in `globals.css`.
   
4. **Icons**: We only use **React Icons** and **MUI Icons** for consistency and to keep the bundle size minimal.

5. **Toast Notifications**: For showing success, error, or warning messages, we use **React Toastify**.

---

## Backend Structure

The backend is built with **Express.js** and **TypeScript** for type safety. The backend follows a modular structure, ensuring a clean separation of concerns.

### Folder Structure

```plaintext
dent-clack-backend/
│
├── src/
│   ├── controllers/        # Business logic for handling requests
│   ├── models/             # Mongoose models for MongoDB collections
│   ├── routes/             # Route definitions and middleware for each resource
│   ├── services/           # Services for connecting controllers to external APIs, databases
│   ├── utils/              # Utility functions and constants (e.g., error handling)
│   ├── middlewares/        # Express middlewares (e.g., authentication, validation)
│   ├── config/             # Configuration files (e.g., database config, environment variables)
│   ├── index.ts            # Entry point for the server
│   └── app.ts              # Express app configuration
│
└── tests/                  # Unit and integration tests
    └── utils/              # Test utility functions (e.g., mocking requests)
```

### Key Concepts

1. **TypeScript**: We use TypeScript to ensure type safety across the backend. All `.ts` files are transpiled using `ts-node` for development.
   
2. **Modular Architecture**: Each resource (e.g., Users, Appointments) gets its own:
   - **Model**: Defined using **Mongoose** for MongoDB.
   - **Controller**: Handles the logic for each request.
   - **Routes**: Defines the routes and applies middleware for validation, authentication, etc.
   - **Service**: Handles database interactions and external API integrations.

3. **Middleware**: Common middleware includes error handling, validation (using `express-validator`), and authentication (using **JWT**).

4. **MongoDB with Mongoose**: MongoDB is used as the database, and **Mongoose** is used to define the schema and interact with the database.

---

## Database

We use **MongoDB** as the database for this project. The database is hosted in the cloud (via MongoDB Atlas). All database interactions are handled using **Mongoose**, which provides a schema-based solution for modeling application data.

### Sample Schema

```typescript
import mongoose, { Schema, Document } from 'mongoose';

interface IAppointment extends Document {
  patientName: string;
  dentist: string;
  date: Date;
  status: string;
}

const AppointmentSchema: Schema = new Schema({
  patientName: { type: String, required: true },
  dentist: { type: String, required: true },
  date: { type: Date, required: true },
  status: { type: String, default: 'pending' },
});

export const Appointment = mongoose.model<IAppointment>('Appointment', AppointmentSchema);
```

---

## DevOps and Deployment

### **Vercel for Frontend Deployment**

The frontend (Next.js) is deployed using **Vercel**. Vercel provides seamless integration with Next.js, offering automatic builds and deployments on push to the `main` branch.

### **Cloudinary for Media Management**

We use **Cloudinary** to manage all media assets (e.g., images). Media can be uploaded via the API, and Cloudinary provides optimized and responsive images through its CDN.

### **GitHub Actions for CI/CD**

We use **GitHub Actions** to automate testing and deployment:
- **Test Workflow**: Runs on every pull request to `develop`, ensuring that code passes all tests before being merged.
- **Deployment Workflow**: Automatically deploys the frontend to Vercel on push to the `main` branch.

---

## UI/UX Design

The UI/UX design is created using **Figma**. Figma allows us to design user-friendly, responsive layouts and prototypes that can be shared with contributors and stakeholders.

### Key Design Elements:
- **Color Palette**: Defined in TailwindCSS for easy reuse.
- **Responsive Design**: All pages are designed to be mobile-first and responsive for various screen sizes.
- **Design Tokens**: Colors, font sizes, and spacing are consistent across the application, driven by Tailwind's utility classes.

---

## Testing Methodologies

We use both **unit tests** and **integration tests** to ensure code quality and functionality.

- **Frontend Testing**: 
  - **Jest** and **React Testing Library** for component testing.
  - **Cypress** for end-to-end (E2E) testing.
  
- **Backend Testing**:
  - **Jest** for unit testing.
  - **Supertest** for integration testing of the Express routes.

### Sample Test (Backend)

```typescript
import request from 'supertest';
import app from '../app';

describe('GET /api/appointments', () => {
  it('should return all appointments', async () => {
    const res = await request(app).get('/api/appointments');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('appointments');
  });
});
```

---

## Contribution Guidelines

Please refer to the main [README.md](../README.md) for detailed contribution rules and guidelines. Ensure that all code follows the project structure and methodologies outlined in this document.

---

## Conclusion

By following the structure and methodologies detailed here, you will be able to contribute effectively to the DentClack project. Happy coding, and welcome to the team!

--- 

