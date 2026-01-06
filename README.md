Employee Management System (Bookxpert Assignment) 📌 Project Overview

This project is a frontend-only Employee Management System built as part of the Bookxpert task. The application allows users to add, edit, delete, search, filter, activate/deactivate, and print employee data.

The entire project is developed using React JS with Vite, styled using plain CSS only, and uses LocalStorage to persist data — no backend or database is used.

This project demonstrates practical knowledge of React fundamentals, component-based architecture, state management, and browser storage handling, which aligns with Bookxpert’s expectations for frontend-focused tasks.

🛠 Tech Stack

React JS (with Hooks)

Vite (fast build tool)

CSS (Plain CSS only)

LocalStorage (for data persistence)

🎯 Key Features

➕ Add new employees

✏️ Edit existing employee details

🗑 Delete employees

🔍 Search employees by name or state

🧑 Filter employees by Gender

✅ Filter employees by Active / Inactive status

🔄 Activate / Deactivate employees

🖨 Print / Download employee list (Print-friendly layout)

🧼 Clear applied filters

💾 Persistent data using LocalStorage

🧩 Application Structure

src/
│── components/
│   ├── employee/
│   │   ├── EmployeeForm.jsx
│   │   ├── EmployeeList.jsx
│   │   ├── EmployeeRow.jsx
│   │
│   ├── common/
│   │   ├── PopupModal.jsx
|   
│
│── pages/
│   ├── Employee.jsx
|   ├── Dashboard.jsx
|   ├── Home.jsx
|   ├── Login.jsx
│
|── routes/
|   ├── ProtectedRoute.jsx
│── assets/
│   ├── *.css
│
│── App.jsx
│── main.jsx
⚙️ State Management Approach

useState → For form inputs, filters, UI states

useEffect →

Load employees from LocalStorage on app load

Sync updated employee data back to LocalStorage

No Redux or external state libraries were used, as the task scope fits well with React Hooks.

💾 LocalStorage Logic

Employee data is stored under a single LocalStorage key

On page refresh, data is automatically restored

CRUD operations directly update both state and LocalStorage

Example:

Add employee → Save to LocalStorage

Edit employee → Update LocalStorage

Delete employee → Remove from LocalStorage

🖨 Print Feature

Uses window.print()

Custom CSS ensures:

Only the employee table is printed

Buttons and UI controls are hidden during print

🎨 Styling Details

Fully responsive layout using Flexbox

Hover effects for buttons (Edit, Delete, Active/Inactive)

Clean and simple UI to match enterprise requirements

No external UI libraries used (Bootstrap, MUI, etc.)

🚀 How to Run the Project

Install dependencies
npm install

Run development server
npm run dev

Open in browser:

http://localhost:5173 📄 Assignment Notes (Bookxpert Context)

This is a frontend-only implementation as per task scope

Focused on:

React component design

State handling

Clean UI

Data persistence without backend

Suitable for MSME / enterprise internal dashboards

👤 Developer

Shaik Bhikku B.Tech – Computer Science & Engineering Frontend / Full Stack Developer (React, Node, MongoDB)

✅ Conclusion

This project successfully fulfills the Bookxpert assignment requirements by implementing a functional, clean, and scalable React-based employee management interface using modern tooling and best practices — without relying on any backend services.
