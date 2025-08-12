# Ecommerce React App

This repository contains a simple, real-world ecommerce single-page app built with React. It includes product listing, product details, a cart, and a basic checkout flow (frontend only). Sign-in and sign-up are handled with Firebase Authentication and Google Sign-In is available.

---

## Key features

- Product listing and product detail pages
- Add to cart, update quantities, and remove items
- Add to favourites, remove from favourites
- Simple checkout flow (client-side)
- User account management with Firebase Authentication

  - Email/password sign up & sign in
  - Google Sign-In (OAuth)

- Responsive layout (mobile-friendly)

---

## Tech stack

- React (create-react-app or Vite)
- React Router for routing
- Context API (or Redux) for global state (cart + auth)
- Firebase Authentication for user accounts (email/password + Google)
- Taailwind CSS

---

## How to run locally

1. Clone the repo and run locally

```bash
git clone https://github.com/vilezaz/React-Ecommerce-with-Firebase.git
```

2. Move into the project folder

```bash
cd React-Ecommerce-with-Firebase
```

3. Install dependencies

```bash
npm install
```

4. Create a Firebase project and enable Authentication

- Go to the Firebase Console (console.firebase.google.com)
- Create a new project (or use an existing one)
- In **Authentication** → **Sign-in method**, enable **Email/Password** and **Google**
- In **Project settings** → **General**, copy the Firebase config for your web app (apiKey, authDomain, projectId, etc.)

5. Add your Firebase config to the project

Create a `.env.local` (or `.env`) file in the project root and add your Firebase config values. Example:

```
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_APP_ID=your_app_id
# optional
REACT_APP_FIREBASE_MEASUREMENT_ID=G-XXXXXX
```

6. Start the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Screenshots
### Home Page
![App Screenshot](/public/ecommerce-firebase/Screenshot%20from%202025-08-12%2015-42-04.png)
### Products Page
![App Screenshot](/public/ecommerce-firebase/Screenshot%20from%202025-08-12%2015-42-21.png)
### Favourites Products Page
![App Screenshot](/public/ecommerce-firebase/Screenshot%20from%202025-08-12%2015-42-45.png)
### Cart/Checkout Page
![App Screenshot](/public/ecommerce-firebase/Screenshot%20from%202025-08-12%2015-42-52.png)
### Login Page
![App Screenshot](/public/ecommerce-firebase/Screenshot%20from%202025-08-12%2015-58-35.png)