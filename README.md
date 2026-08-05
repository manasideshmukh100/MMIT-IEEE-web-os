# MMIT IEEE Student Branch — Web OS

> **Live Website:** https://mmit-ieee-web-os.vercel.app/


An interactive, futuristic **IEEE Student Branch Web OS** built for **MMIT Pune**, designed to showcase the student branch, executive committee, events, projects, achievements, and member activities through a modern 3D-inspired interface.

The platform combines a dynamic frontend, interactive WebGL components, backend services, and database integration to create an engaging digital experience for the MMIT IEEE Student Branch.

---

## ✨ Features

* 🌐 Modern futuristic Web OS interface
* 🎨 Responsive and interactive UI
* 🌀 3D / WebGL visual experiences
* 👥 Executive Committee showcase
* 📅 Interactive events section
* 🚀 Project showcase
* 🏆 Achievements and student activities
* 🧑‍💻 Member information and modal views
* 🖥️ System-terminal inspired interface
* ✨ Smooth animations and transitions
* 🤖 AI integration using Google Gemini API
* 🗄️ Backend and database integration
* 📱 Responsive design for different screen sizes

---

## 🛠️ Tech Stack

### Frontend

| Technology           | Purpose                           |
| -------------------- | --------------------------------- |
| **React 19**         | Frontend UI development           |
| **TypeScript**       | Type-safe development             |
| **Vite 6**           | Fast development and build tool   |
| **Tailwind CSS 4**   | Styling and responsive UI         |
| **Lucide React**     | Icons                             |
| **Motion**           | Animations and transitions        |
| **Three.js / WebGL** | 3D and interactive visual effects |

### Backend

| Technology            | Purpose                         |
| --------------------- | ------------------------------- |
| **Node.js**           | Backend runtime                 |
| **Express.js**        | Backend/API framework           |
| **dotenv**            | Environment variable management |
| **Google Gemini API** | AI-powered functionality        |

### Database

* **Supabase**
* Supabase Database
* Backend/API integration

### Development & Deployment

* **Git**
* **GitHub**
* **Vercel**
* **npm / Bun**

---

## 🏗️ Project Architecture

```text
MMIT-IEEE-web-os/
│
├── Frontend
│   ├── React
│   ├── TypeScript
│   ├── Vite
│   ├── Tailwind CSS
│   ├── Three.js / WebGL
│   ├── Motion
│   └── Lucide React
│
├── Backend
│   ├── Node.js
│   ├── Express.js
│   ├── dotenv
│   └── Gemini API
│
├── Database
│   └── Supabase
│
└── Deployment
    └── Vercel
```

---

## 📂 Major Components

The application is organized into reusable components for different sections of the IEEE Web OS.

### `BackgroundShader`

Provides the dynamic visual background and contributes to the futuristic Web OS aesthetic.

### `ExecutiveCommittee`

Displays the MMIT IEEE Student Branch executive committee and their respective positions.

### `EventsOrbit`

Interactive event visualization designed to present IEEE events in an engaging way.

### `ProjectShowcase`

Highlights projects and technical work carried out by IEEE members.

### `SystemTerminal`

A terminal-inspired interface that reinforces the operating-system concept of the website.

### `MemberModal`

Displays detailed information about individual members.

### `EventModal`

Provides additional information about individual events.

---

## 👥 Executive Committee

The website showcases the MMIT IEEE Student Branch leadership team:

| Position                 | Member                  |
| ------------------------ | ----------------------- |
| Branch Counsellor        | **Dr. Monika Dangore**  |
| Branch Chair             | **Sankalp Indish**      |
| Branch Vice Chair        | **Soham Shinde**        |
| Student Branch Secretary | **Maithiliee Kedareas** |
| Joint Secretary          | **Tanmayi Gadge**       |
| Branch Treasurer         | **Gargi Shinde**        |
| Webmaster                | **Satyam Patil**        |
| Webmaster                | **Geet Jamdal**         |

---

## 🤖 AI Integration

The project includes integration with the **Google Gemini API** to enable AI-powered functionality within the Web OS environment.

The backend manages API communication while sensitive configuration values are stored through environment variables rather than being directly exposed in the frontend.

---

## 🗄️ Supabase Integration

Supabase is used as the project's database/backend service.

It provides the foundation for storing and managing dynamic website data and allows the frontend/backend architecture to be extended beyond static content.

The application is structured so that database credentials and configuration can be managed securely through environment variables.

---

## 🔐 Environment Variables

Create a `.env` file for local development.

Example:

```env
GEMINI_API_KEY=your_gemini_api_key

SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_supabase_anon_key
```

> **Important:** Never commit your `.env` file or private API keys to GitHub.

Add the following to `.gitignore` if required:

```gitignore
.env
.env.local
.env.*.local
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/manasideshmukh100/MMIT-IEEE-web-os.git
```

### 2. Navigate to the project

```bash
cd MMIT-IEEE-web-os
```

### 3. Install dependencies

Using npm:

```bash
npm install
```

Or using Bun:

```bash
bun install
```

### 4. Configure environment variables

Create a `.env` file and add the required API and Supabase credentials.

```env
GEMINI_API_KEY=your_gemini_api_key
SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 5. Start the development server

```bash
npm run dev
```

The Vite development server will provide a local URL, typically:

```text
http://localhost:5173
```

---

## 🏭 Production Build

To create a production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

---

## ☁️ Deployment

The frontend is deployed using **Vercel**.

### Live Frontend

**https://mmit-ieee-web-os.vercel.app/**

The project can be connected to GitHub and automatically deployed through Vercel whenever changes are pushed to the configured branch.

---

## 🔗 Project Links

### 🌐 Live Website

https://mmit-ieee-web-os.vercel.app/

### 💻 GitHub Repository

https://github.com/manasideshmukh100/MMIT-IEEE-web-os

---

## 🎯 Project Objective

The goal of the MMIT IEEE Web OS is to create more than a conventional student-branch website.

Instead of presenting information through traditional static pages, the project introduces an **interactive digital environment** where users can explore:

* IEEE student members
* Executive committee
* Events
* Projects
* Achievements
* Technical activities
* AI-powered functionality

The Web OS concept provides a unique and futuristic way to represent the activities and digital identity of the **MMIT IEEE Student Branch**.

---

## 🔮 Future Scope

Potential improvements include:

* 🔐 Admin authentication
* 📝 Dynamic event management
* 👤 Member registration and profiles
* 📊 Admin dashboard
* 🗄️ Expanded Supabase database integration
* 📢 Dynamic announcements
* 📸 Event gallery
* 🏆 Achievement management
* 🤖 More AI-powered features
* 📈 Analytics dashboard
* 🔔 Notifications
* 🌍 Progressive Web App support

---

## 📜 License

This project was developed for the **MMIT IEEE Student Branch** and its web development initiative.

---

## 👩‍💻 Developer

**Manasi Deshmukh**

MMIT Pune
B.E. — Artificial Intelligence & Data Science

---

<p align="center">
  Built with ❤️ for the MMIT IEEE Student Branch
</p>
