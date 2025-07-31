// JavaScript Topics
export const jsTopics = [
  {
    title: "1. Execution Context & Call Stack",
    points: ["Understand how JavaScript code runs behind the scenes."],
  },
  {
    title: "2. Closures & Lexical Scope",
    points: ["Learn how functions preserve data even after execution."],
  },
  {
    title: "3. Asynchronous JavaScript",
    points: [
      "Callbacks",
      "Promises",
      "Async/Await",
      "Useful for API calls and server operations.",
    ],
  },
  {
    title: "4. ES6+ Features",
    points: [
      "Arrow Functions",
      "Template Literals",
      "Destructuring",
      "Spread/Rest Operators",
      "Object Enhancements",
    ],
  },
  {
    title: "5. Module Systems",
    points: [
      "CommonJS (require/module.exports)",
      "ESModules (import/export)",
    ],
  },
  {
    title: "6. Error Handling",
    points: [
      "try/catch",
      "Custom error messages",
      "Throwing errors",
    ],
  },
];

// React Topics
export const reactTopics = [
  {
    title: "1. What is React?",
    points: ["Learn how React manages UI and why it’s widely used."],
  },
  {
    title: "2. JSX (JavaScript XML)",
    points: ["Write HTML-like syntax inside JavaScript."],
  },
  {
    title: "3. Functional Components",
    points: ["Build UI using functions instead of classes."],
  },
  {
    title: "4. Props and State",
    points: [
      "Props: Pass data to components",
      "State: Store component data",
    ],
  },
  {
    title: "5. Event Handling",
    points: ["Handle click events, form inputs, and custom functions."],
  },
  {
    title: "6. React Hooks",
    points: ["useState", "useEffect", "useRef", "useMemo", "useCallback"],
  },
  {
    title: "7. Conditional Rendering",
    points: [
      "Render elements based on logic using if/else, ternary, && operator.",
    ],
  },
  {
    title: "8. List Rendering & Keys",
    points: ["Loop through arrays using map()", "Why keys are important."],
  },
  {
    title: "9. React Router DOM",
    points: [
      "Single Page Application routing",
      "Route Parameters",
      "Nested Routes",
      "Redirects & 404 Pages",
    ],
  },
  {
    title: "10. Forms and Validations",
    points: [
      "Controlled components (input, textarea, checkbox)",
      "Form validation using custom logic or libraries like Yup.",
    ],
  },
  {
    title: "11. API Integration",
    points: [
      "Use fetch or axios to get data from backend.",
      "Display data using useEffect & state.",
    ],
  },
  {
    title: "12. Context API",
    points: [
      "Global state management without props drilling.",
      "Creating and using React Context Provider and Consumer.",
    ],
  },
  {
    title: "13. Custom Hooks and Reusability",
    points: ["Write custom hooks to organize and reuse logic."],
  },
  {
    title: "14. Performance Optimization",
    points: [
      "Code Splitting & Lazy Loading (React.lazy, Suspense)",
      "Memoization with React.memo, useMemo, and useCallback.",
    ],
  },
  {
    title: "15. Error Handling in React",
    points: [
      "Handling runtime errors using try/catch and conditional UI.",
      "Error boundaries for catching render errors (advanced).",
    ],
  },
  {
    title: "16. Folder Structure & Best Practices",
    points: [
      "Organizing components, hooks, services, and assets.",
      "Consistent naming conventions & reusable components.",
    ],
  },
  {
    title: "17. React Deployment",
    points: [
      "Deploy your React app using Vercel or Netlify.",
      "Set up production-ready build and environment variables.",
    ],
  },
  {
    title: "18. Frontend Projects",
    points: [
      "🔒 Auth UI: Signup, Login, Forget Password with React Context",
      "🌦️ Real-time Weather App using API",
      "📝 Blog App: Blog posts with routing and pagination",
      "➕ Counter App with useReducer.",
    ],
  },
];

// Backend Topics

export const backendTopics = [
  {
    title: "1. Introduction to Node.js",
    points: [
      "What is Node.js and how it works under the hood.",
      "Understanding the event-driven, non-blocking I/O model.",
      "Why use Node.js for backend development?"
    ],
  },
  {
    title: "2. Setting Up Node & NPM",
    points: [
      "Install Node.js and NPM on Windows",
      "Understand package.json and node_modules.",
      "Using `npm` & `npx` effectively."
    ],
  },
  {
    title: "3. Creating Your First Server",
    points: [
      "Using built-in `http` module to create basic server.",
      "Serving HTML, JSON, and handling routes manually."
    ],
  },
  {
    title: "4. Express.js – The Node Framework",
    points: [
      "Installing and setting up Express.js.",
      "Creating clean routes: GET, POST, PUT, DELETE.",
      "Organizing routes with Router."
    ],
  },
  {
    title: "5. Middleware in Express",
    points: [
      "What are middleware functions?",
      "Using built-in middleware like `express.json()` and `cors`.",
      "Creating your own custom middleware (e.g. logging requests)."
    ],
  },
  {
    title: "6. RESTful API Design",
    points: [
      "Designing clean endpoints for CRUD operations.",
      "Status codes & RESTful conventions.",
      "API structure and modularization."
    ],
  },
  {
    title: "7. Handling Requests & Responses",
    points: [
      "Understanding `req`, `res`, `next`.",
      "Working with headers, query params, body, and path params."
    ],
  },
  {
    title: "8. Error & Exception Handling",
    points: [
      "Centralized error handling middleware.",
      "Handling 404 and unexpected errors gracefully."
    ],
  },
  {
    title: "9. Using Environment Variables",
    points: [
      "Why you should never expose secrets (API keys, DB creds).",
      "Using `dotenv` to manage environment config.",
      "Accessing `.env` variables in your app securely."
    ],
  },
  {
    title: "10. Backend Hosting with Railway",
    points: [
      "Create free backend deployments on Railway.app.",
      "Connect GitHub repo and auto-deploy.",
      "Environment setup and domain configuration."
    ],
  },
  {
    title: "11. Testing Your API",
    points: [
      "Using Postman to test API endpoints.",
      "Testing GET, POST, PUT, DELETE with headers and body.",
      "Debugging API requests and responses."
    ],
  },
  {
    title: "12. Backend-Only Project Ideas",
    points: [
      "🧑 User Authentication System – Signup, login, JWT-based auth, and protected routes.",
      "📁 File Upload API – Upload, store, and retrieve images/files using Multer.",
      "🧠 Quiz/Test System API – Create quizzes, submit answers, evaluate results."
    ],
  }
];

// MongoDB Topics
export const mongodbTopics = [
  {
    title: "1. What is MongoDB?",
    points: ["A NoSQL database storing JSON-like documents."],
  },
  {
    title: "2. MongoDB Atlas (Cloud Database)",
    points: [
      "Creating an account",
      "Setting up a cluster",
      "Getting connection strings",
    ],
  },
  {
    title: "3. Mongoose Library",
    points: ["A tool to work with MongoDB using Node.js."],
  },
  {
    title: "4. Schemas and Models",
    points: ["Define structure and constraints for your data."],
  },
  {
    title: "5. CRUD with Mongoose",
    points: [
      "Create documents",
      "Read documents",
      "Update documents",
      "Delete documents",
    ],
  },
  {
    title: "6. Validation and Error Handling",
    points: ["Use Mongoose validation to ensure clean data."],
  },
  {
    title: "7. Populating Relationships",
    points: ["Connect and fetch data from related collections."],
  },
  {
    title: "8. MongoDB Project",
        points: [
      "🔒 User Authentication System – Signup, login, JWT-based auth, and protected routes.",
      "📁 File Upload API – Upload, store, and retrieve images/files using Multer.",
      "🧠 Quiz/Test System API – Create quizzes, submit answers, evaluate results."
    ],
  },
];

// MERN Integration Topics
export const mernIntegrationTopics = [
  {
    title: "1. Connecting React to Backend API",
    points: ["Use axios to send requests from React to Node.js."],
  },
  {
    title: "2. CORS Setup",
    points: ["Enable cross origin access for frontend-backend communication."],
  },
  {
    title: "3. Authentication and Authorization (Bonus)",
    points: [
      "JWT (JSON Web Tokens)",
      "Password hashing with bcrypt",
      "Protected routes",
    ],
  },
  {
    title: "5. Fullstack Project Examples",
  points: [
    "🛒 E-commerce Store – Product catalog, cart, checkout, order history, admin dashboard.",
    "🔐 Auth System – Sign up, login, forgot/reset password with JWT & role-based access control.",
    "📝 Blog App – Create, read, update, delete posts with user login & rich text editor.",
    "🏆 Quiz App – Dynamic quizzes, score calculation, result tracking, and leaderboard."
  ],
  },
];

// Deployment Topics
export const deploymentTopics = [
  {
    title: "1. Git and GitHub Basics",
    points: ["Push your code to remote repositories."],
  },
  {
    title: "2. Hosting Backend on Railway",
    points: [
      "Create account on Railway",
      "Connect GitHub",
      "Set environment variables",
      "Deploy your Express app",
    ],
  },
  {
    title: "3. Hosting Frontend on Vercel",
    points: [
      "Create Vercel account",
      "Import from GitHub",
      "Build and deploy React app",
    ],
  },
  {
    title: "4. Environment Variables in Production",
    points: ["Manage .env for both backend and frontend securely."],
  },
  {
    title: "5. Testing Live Project",
    points: [
      "Ensure both frontend and backend work correctly on public URLs.",
    ],
  },
];
