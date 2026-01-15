# Aruba Assignment
# Frontend Authentication UI using React & Vite

## Project Overview

This project is a **frontend-only authentication interface** built using **React with Vite**.  
It includes:

- Login page with **email & password validation**  
- Signup page with **Name, Gender, Contact Number, Email, Password fields**  
- Reusable **InputField** and **Button** components  
- **Regex validation** on frontend for all input fields  
- Navigation between **Login** and **Signup** pages using **React Router**  
- Clean and professional **folder structure**  


---

## Features

### Login Page
- Email validation using regex
- Password minimum length validation
- Navigation link: “Create new account” → Signup

### Signup Page
- Fields: **Name, Gender, Contact Number, Email, Password**
- Name validation (alphabets and spaces)
- Gender selection validation
- Contact number validation (Indian 10-digit format)
- Email validation
- Password validation (Password must be at least 8 characters long and include an uppercase letter, a lowercase letter, a number, and a special character.)
- Navigation link: “Already have an account?” → Login

### Components
- `InputBoxes.jsx` – reusable input with error display
- `Button.jsx` – reusable button component

---
## ✨ Additional Functionalities (Beyond Assignment)

### Home Page
- Displays **Login & Signup buttons** for unauthenticated users
- Displays **personalized greeting with logged-in user’s name** after login
- UI styling consistent with Login & Signup pages

### Client-side Authentication (localStorage)
- User data stored in `localStorage` on signup
- Logged-in user stored as `lastLoginUser`
- Authentication state persists on page refresh

### Conditional UI Rendering
- UI updates based on authentication state
- Logged-in users see:
  - Greeting message
  - Logout button
- Logged-out users see:
  - Login & Signup buttons

### Logout Functionality
- Clears logged-in user data from `localStorage`
- Redirects user back to Home page

### Toast Notifications
- Success toast on:
  - Successful signup
  - Successful login
- Clean, centered toast notifications using `react-hot-toast`

---


## Tech Stack

- **Frontend:** React (Functional Components + Hooks)  
- **Bundler:** Vite  
- **Routing:** react-router-dom  
- **Styling:** CSS (inline + external + simple form layout)  
- **Validation:** Regex for frontend validation

---

## Folder Structure

src/
│── components/
│ ├── InputField.jsx
│ └── Button.jsx
│
│── views/
│ ├── Login.jsx
│ └── Signup.jsx
│
│── App.jsx
│── main.jsx


- **components/** – reusable UI components
- **views/** – page-level components (Login & Signup)
- **App.jsx** – handles routing
- **main.jsx** – app entry point, wrapped with `BrowserRouter`



