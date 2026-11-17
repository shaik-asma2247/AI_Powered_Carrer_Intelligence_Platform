# 🚀 CareerCast – AI-Powered Career Intelligence Platform

CareerCast is an AI-powered career intelligence platform designed to help students, fresh graduates, and working professionals make informed career decisions. It leverages Artificial Intelligence (AI), Machine Learning (ML), and Natural Language Processing (NLP) to analyze resumes, identify skills, predict suitable career paths, and provide personalized career recommendations.

The platform helps users understand their existing skill sets, identify missing competencies, explore career opportunities, and build structured career development roadmaps.

---

## 🎯 Project Overview

Choosing the right career path can be challenging due to rapidly changing industry requirements, evolving technologies, and increasing competition in the job market.

CareerCast addresses these challenges through an intelligent career recommendation system that analyzes a user's professional profile, including:

- Technical and soft skills
- Educational qualifications
- Certifications
- Work experience
- Resume information

Using AI and Machine Learning techniques, the platform analyzes this information to recommend suitable career paths based on the user's qualifications and existing skills.

It also provides skill gap analysis, resume improvement suggestions, career comparisons, and personalized career development roadmaps.

---

## 🎯 Objectives

- Develop an AI-powered career prediction and recommendation platform.
- Automatically extract relevant information from uploaded resumes.
- Analyze user skills, education, and professional experience.
- Predict suitable career opportunities using Machine Learning.
- Identify missing skills required for targeted career roles.
- Generate personalized career development roadmaps.
- Provide job notifications for relevant career opportunities.
- Help users make informed career decisions through data-driven insights.

---

## ✨ Key Features

### 1. 📄 AI Resume Analyzer

- Upload resumes in PDF and DOCX formats.
- Extract skills, education, experience, and other relevant information.
- Analyze resume content using NLP techniques.
- Provide structured resume analysis results.
- Maintain resume analysis history.
- Generate resume insights and improvement suggestions.

### 2. 💼 AI Career Explorer

- Discover suitable career opportunities.
- Receive AI-powered career recommendations.
- Explore different professional domains.
- Identify career options based on existing qualifications and skills.
- Get insights into potential career paths.

### 3. 🧠 Skill Gap Analysis

- Analyze existing technical and soft skills.
- Identify missing skills for selected career roles.
- Compare current skills with target career requirements.
- Recommend relevant skills for career improvement.
- Help users understand industry skill requirements.

### 4. 🗺️ Career Roadmap

- Generate personalized career development plans.
- Identify skills required at different career stages.
- Provide structured learning and improvement steps.
- Recommend technologies and competencies to learn.
- Help users achieve their desired career goals.

### 5. ⚖️ Career Comparison

- Compare two or more career paths.
- Understand differences in required skills and qualifications.
- Explore job responsibilities and career opportunities.
- Access relevant job notifications.
- Make informed career choices.

### 6. 📊 Reports and Analytics

- Display career-related insights through interactive dashboards.
- Track resume analysis and skill development.
- Visualize career recommendations and analysis results.
- Present skill distribution and career insights.
- Generate reports for career planning.

### 7. 🔐 User Authentication and Profile Management

- User registration and login.
- Secure authentication using JWT.
- Personalized user profiles.
- Manage educational and professional information.
- Update account settings and career preferences.

---

## 🛠️ Technology Stack

| Category | Technologies |
|---|---|
| Frontend | React.js, HTML5, CSS3, JavaScript |
| Styling | Tailwind CSS |
| Backend | Node.js, Express.js |
| Database | MongoDB, Mongoose |
| AI/ML | Python, Scikit-learn |
| NLP | Natural Language Processing, spaCy |
| Authentication | JSON Web Token (JWT) |
| Resume Processing | PDF and DOCX Parsing |
| Version Control | Git, GitHub |
| Development Tools | VS Code, Postman |

**Potential AI/ML enhancements:** XGBoost, Sentence-BERT, and MLflow can be integrated depending on the implemented modules.

---

## 📦 Project Modules

| Module | Description |
|---|---|
| Authentication | Handles user registration, login, and authentication. |
| Dashboard | Displays career insights and platform overview. |
| Resume Analyzer | Extracts and analyzes resume information using NLP. |
| AI Career Explorer | Recommends suitable career opportunities. |
| Skill Gap Analysis | Identifies missing skills for selected career roles. |
| Career Roadmap | Generates personalized career development plans. |
| Career Comparison | Compares different career options. |
| Reports & Analytics | Presents career-related analytical insights. |
| Profile & Settings | Manages user information and preferences. |

---

## 🏗️ System Architecture

CareerCast follows a modular three-layer architecture.

### 1. Frontend Layer

Responsible for user interaction and presentation.

- React.js
- HTML5
- CSS3
- JavaScript
- Tailwind CSS

### 2. Backend Layer

Responsible for business logic, authentication, API communication, and database operations.

- Node.js
- Express.js
- RESTful APIs
- JWT Authentication
- MongoDB Integration

### 3. AI and Data Layer

Responsible for intelligent resume processing and career-related analysis.

- Python
- FastAPI
- Natural Language Processing (NLP)
- Machine Learning
- Scikit-learn
- MongoDB

### Application Workflow

1. Users register and create their professional profiles.
2. Users upload their resumes or enter their professional information.
3. The backend processes requests and communicates with the AI service.
4. The AI service extracts and analyzes relevant resume information.
5. Career recommendation and skill analysis modules process the available information.
6. The platform presents personalized insights, career recommendations, and development roadmaps.

---

## 💻 Installation and Setup

Follow these steps to run CareerCast locally.

### Prerequisites

Make sure the following technologies are installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [Python 3.x](https://www.python.org/)
- [MongoDB](https://www.mongodb.com/)
- [Git](https://git-scm.com/)

### 1. Clone the Repository

```bash
git clone https://github.com/shaik-asma2247/AI_Powered_Carrer_Intelligence_Platform.git
```

Navigate to the project directory:

```bash
cd Infosys_Project
```

### 2. Frontend Setup

Navigate to the frontend directory:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the frontend development server:

```bash
npm run dev
```

The frontend will typically run at:

```text
http://localhost:5173
```

### 3. Backend Setup

Open another terminal and navigate to the backend directory:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Configure the environment variables in the `.env` file.

Start the backend server:

```bash
npm run dev
```

The backend API will typically run at:

```text
http://localhost:5000
```

### 4. Python AI Service Setup

Open another terminal and navigate to the AI service directory:

```bash
cd ai-service
```

Create a virtual environment:

```bash
python -m venv venv
```

Activate the virtual environment.

**Windows:**

```bash
venv\Scripts\activate
```

Install Python dependencies:

```bash
pip install -r requirements.txt
```

Start the AI service using the configured application entry point.

For example, if the entry point is `app.main:app`:

```bash
python -m uvicorn app.main:app --reload --port 8000
```

The AI service will typically run at:

```text
http://localhost:8000
```

---

## ⚙️ Environment Configuration

Create a `.env` file inside the backend directory and configure the required environment variables.

Example:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
AI_SERVICE_URL=http://localhost:8000
```

Configure the AI service environment variables according to its implementation and security requirements.

---

## 📊 Expected Outcomes

CareerCast aims to deliver:

- Automated resume parsing and information extraction.
- Personalized AI-powered career recommendations.
- Intelligent skill gap identification.
- Structured career development roadmaps.
- Career comparison and analytical insights.
- Relevant job opportunity notifications.
- A centralized platform for AI-powered career planning.

---

## 👥 Target Audience

CareerCast is designed for:

- Students exploring career opportunities.
- Fresh graduates entering the professional world.
- Working professionals planning career transitions.
- Individuals interested in identifying and improving their professional skills.
- Educational institutions and career guidance centers.

---

## 👩‍💻 Author

**Shaik Asma**

- GitHub: [shaik-asma2247](https://github.com/shaik-asma2247)

---

