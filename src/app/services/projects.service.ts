import { Injectable } from '@angular/core';
import { Project } from '../models/project.model';
@Injectable({ providedIn: 'root' })
export class ProjectsService {
  projects: Project[] = [
    {
      title: 'EduVerse AI',
      slug: 'multi-tenant-lms',
      description:
        'A web-based multi-tenant LMS with AI-powered personalized content delivery using LangChain and LLMs, designed to serve multiple institutions efficiently.',
      fullDescription: `
This capstone project is an AI-powered, multi-tenant E-Learning Platform developed to address limitations in traditional e-learning systems. It provides personalized learning experiences, multi-institution support, and intelligent content recommendations.

The platform allows multiple educational institutions to operate independently on a shared system. Each tenant has its own administrators, teachers, courses, and branding, while the system ensures strict data separation and security.

Key features include an AI learning assistant that answers course-related queries, summarizes learning materials, and recommends relevant courses or content to students. Teachers can manage courses, upload resources, and assess student performance, while students can enroll in courses, attempt quizzes, submit assignments, and track progress.

The platform is built with modular architecture for scalability, maintainability, and future enhancements, with cloud-based hosting enabling seamless performance and AI integration.
`,
      features: [
        'Multi-tenant support for multiple institutions',
        'Role-based access for admins, teachers, and students',
        'AI-powered learning assistant for Q&A and content summarization',
        'Personalized content recommendations',
        'Secure authentication and authorization',
        'Real-time analytics and performance tracking',
        'Cloud deployment for scalability and reliability',
        'MODULES :',
        'Authentication & Authorization Module',
        'Courses Management Module',
        'Assignments Module',
        'Quizzes Module',
        'Dashboards & Reporting Module',
        'Performance Tracking Module',
        'AI Assistant Integration Module',
        'System Settings & Tenant Configuration Module',
      ],
      techStack: [
        'Angular 19 (Frontend)',
        'Python FastAPI (Backend)',
        'MongoDB (Multi-tenant database)',
        'LangChain + LLMs (AI content delivery)',
        'AWS (Cloud Hosting & Deployment)',
        'Git (Version Control)',
        'HTML, CSS, TypeScript',
      ],
      githubUrl: 'https://github.com/Ayesha-Javaidd/EduVerse-AI-main-backend',
      liveUrl: '',
    },
    {
      title: 'ScrapUncle',
      slug: 'scrapuncle',
      description:
        'A cross-platform mobile application for scrap pickup booking and scheduling doorstep scrap pickups.',
      fullDescription: `
ScrapUncle is a Flutter-based mobile application designed to simplify scrap collection by allowing users to schedule pickups directly from their homes. The application supports user authentication, scrap category selection, pickup scheduling, and real-time price visibility.

Firebase Authentication ensures secure user access, while Cloud Firestore and Realtime Database manage pickup requests, pricing updates, and user data. Push notifications were integrated to inform users about pickup confirmations and status changes. The app features a clean, responsive UI optimized for both Android and iOS platforms.
`,
      features: [
        'User authentication and secure login',
        'Scrap category selection and price visibility',
        'Pickup scheduling and request management',
        'Real-time database updates',
        'Push notifications for status updates',
      ],
      techStack: [
        'Flutter',
        'Dart',
        'Firebase Auth',
        'Cloud Firestore',
        'Firebase Realtime DB',
      ],
      githubUrl: 'https://github.com/Ayesha-Javaidd/ScrapUncle-Flutter',
      liveUrl:
        'https://www.linkedin.com/posts/ayesha-javaid-240005281_flutterdev-firebaseauth-firestore-activity-7363116918171488256-oqYL?utm_source=share&utm_medium=member_desktop&rcm=ACoAAESFsxABoOrDMb5TQ2WOxNbHvmM8TO4MWn4',
    },

    {
      title: 'Discord Standup Bot ',
      slug: 'discord-standup-bot',
      description:
        'A production-deployed Team Productivity Automation Discord Bot developed during my internship to automate daily standups, reminders, and reporting for development teams.',
      fullDescription: `
The Discord Standup Bot is a production-grade automation tool developed during an internship to streamline daily standup meetings within engineering teams using Discord. The bot was designed to replace manual standup tracking by providing structured standup questions, automated reminders, and centralized reporting directly inside Discord servers.

Built using Python and Discord.py, the bot integrates with a SQL Server backend to persist and manage data related to users, teams, standup questions, and daily responses. The system supports full CRUD operations for standup configuration, enabling administrators to dynamically manage questions, teams, and schedules without code changes.

Scheduled background tasks were implemented to automatically prompt users for standup updates at configured times. Role-based permissions ensure that only authorized users can configure teams, modify questions, and access reports. SQL queries and stored procedures were written to aggregate standup responses, generate daily and weekly summaries, and deliver automated reports back to designated Discord channels.

The bot was deployed in a production environment during the internship and actively used by teams, improving visibility, accountability, and consistency in daily standup reporting while reducing manual coordination overhead.
`,
      features: [
        'Automated daily standup reminders in Discord channels',
        'Configurable standup questions with full CRUD support',
        'User, team, and role management with permission control',
        'SQL Server-backed persistence for standup history',
        'Scheduled background tasks for reminders and reporting',
        'Automated daily and weekly standup summaries',
        'Production deployment and real-world team usage',
      ],
      techStack: [
        'Python',
        'Discord.py',
        'SQL Server',
        'T-SQL',
        'Stored Procedures',
        'Task Scheduling',
      ],
      githubUrl: 'https://github.com/Ayesha-Javaidd/Discord-BOT',
      liveUrl:
        'https://www.linkedin.com/posts/ayesha-javaid-240005281_fastapi-react-python-activity-7375514706217799680-3gok?utm_source=share&utm_medium=member_desktop&rcm=ACoAAESFsxABoOrDMb5TQ2WOxNbHvmM8TO4MWn4',
    },
    {
      title: 'GiftedMaids',
      slug: 'giftedmaids',
      description:
        'A modern Angular-based Booking & Scheduling web application for managing service bookings, customer interactions, and real-time scheduling for a real client.',
      fullDescription: `
GiftedMaids is a client-facing, production-ready Angular application built to streamline service booking and customer communication for a cleaning services business. The application provides an intuitive booking experience while ensuring seamless backend integrations for scheduling and notifications.

The system integrates Google Calendar API to manage and synchronize booking events in real time, enabling accurate scheduling and conflict prevention. EmailJS is used to handle booking confirmations and contact form submissions without requiring a custom backend, reducing deployment complexity and operational overhead.

The application features a clean, responsive UI with a structured layout including reusable Navbar and Footer components, ensuring consistency across devices. Tidio live chat integration enhances customer engagement by enabling real-time support and inquiries. The project is optimized for deployment on static hosting platforms, making it lightweight, scalable, and cost-efficient for production use.
`,
      features: [
        'Service booking and contact forms with automated email handling',
        'Google Calendar integration for real-time event scheduling',
        'Email notifications using EmailJS without a backend server',
        'Responsive UI with reusable Angular components',
        'Integrated Tidio live chat for customer support',
        'Optimized for deployment on static hosting platforms',
      ],
      techStack: [
        'Angular 16+',
        'TypeScript',
        'Google Calendar API',
        'EmailJS',
        'Tidio Live Chat',
        'HTML',
        'CSS',
      ],
      githubUrl: 'https://github.com/Ayesha-Javaidd/giftedmaids',
      liveUrl: 'https://giftedmaidsct.com',
    },
    {
      title: 'ML-Based Stress Detection',
      slug: 'ml-stress-detection',
      description:
        'A machine learning and neural network–based system for detecting human stress levels using physiological signals from the WESAD dataset.',
      fullDescription: `
This project focuses on building a machine learning–based stress detection system using the publicly available WESAD (Wearable Stress and Affect Detection) dataset. The dataset contains multimodal physiological signals collected from wearable sensors, including ECG, EDA, EMG, respiration, and body temperature, enabling objective stress classification.

The complete workflow was implemented in Jupyter Notebook and includes data preprocessing, signal normalization, feature extraction, and label encoding. Multiple machine learning models and neural network approaches were trained and evaluated, including traditional classifiers and deep learning architectures, to identify the most effective method for stress detection.

After comparative evaluation using standard performance metrics such as accuracy, precision, recall, and F1-score, SGBoost emerged as the best-performing model among all tested approaches. The model demonstrated superior accuracy and generalization capability compared to other ML algorithms and neural network models.

The project emphasizes experimental rigor by performing model comparison, hyperparameter tuning, and validation, making it suitable for real-world health monitoring applications and academic research in affective computing and wearable-based machine learning systems.
`,
      features: [
        'Stress classification using physiological sensor data',
        'Preprocessing and feature extraction from WESAD dataset',
        'Comparison of multiple ML algorithms and neural networks',
        'Implementation and evaluation in Jupyter Notebook',
        'Model performance analysis using standard ML metrics',
        'SGBoost identified as best-performing classifier',
      ],
      techStack: [
        'Python',
        'Jupyter Notebook',
        'Scikit-learn',
        'SGBoost',
        'Neural Networks',
        'NumPy',
        'Pandas',
        'Matplotlib',
      ],
      githubUrl: 'https://github.com/yourusername/stress-detection-ml', // optional
    },

    {
      title: 'QuizCore',
      slug: 'online-quiz-system',
      description:
        'A role-based online quiz web application built with Java Servlets, JSP, and SQL to manage online quizzes, assessments, and leaderboards.',
      fullDescription: `
The Online Quiz Management System is a full-stack web application developed using Java Servlets, JSP, and SQL to facilitate secure and efficient online assessments. The system supports two primary user roles—administrators and students—each with clearly defined permissions and workflows.

Administrators can create, update, and delete quizzes, manage questions, configure quiz parameters, and monitor student performance through leaderboards. Students can register, authenticate, attempt quizzes within defined constraints, and view their scores and ranking after submission.

The application implements secure authentication and role-based access control to ensure that only authorized users can perform administrative actions. Server-side validation and session management are used to maintain data integrity and prevent unauthorized access.

A relational SQL database is used to persist user data, quiz information, questions, responses, and results. Optimized SQL queries enable efficient retrieval of quiz data and leaderboard rankings. The project demonstrates strong backend fundamentals, including MVC-style separation using Servlets and JSP, database connectivity via JDBC, and dynamic page rendering for an interactive user experience.
`,
      features: [
        'Role-based authentication for admins and students',
        'Quiz creation, management, and deletion by administrators',
        'Student quiz participation with automatic evaluation',
        'Leaderboard generation based on quiz performance',
        'Secure session management and server-side validation',
        'SQL-based persistence for quizzes, users, and results',
      ],
      techStack: ['Java', 'Java Servlets', 'JSP', 'JDBC', 'SQL', 'HTML', 'CSS'],
      githubUrl: 'https://github.com/Ayesha-Javaidd/OnlineQuizSystem',
      liveUrl:
        'https://www.linkedin.com/posts/ayesha-javaid-240005281_java-webdevelopment-onlinequiz-activity-7309127226359209984-cHMQ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAESFsxABoOrDMb5TQ2WOxNbHvmM8TO4MWn4',
    },

    {
      title: 'Weather Detector App',
      slug: 'weather-detector',
      description:
        'A Flutter application that displays real-time weather information using REST APIs.',
      fullDescription: `
The Weather Detector App is a Flutter-based mobile application designed to fetch and display real-time weather data for user-selected locations. The app integrates third-party REST APIs to retrieve temperature, humidity, weather conditions, and forecasts.

It demonstrates asynchronous API handling, JSON parsing, error handling, and responsive UI design. The project focuses on mobile API integration and clean state-driven UI updates in Flutter.
`,
      features: [
        'Real-time weather data retrieval',
        'Location-based weather search',
        'REST API integration with JSON parsing',
        'Responsive and clean UI design',
      ],
      techStack: ['Flutter', 'Dart', 'REST APIs'],
      githubUrl:
        'https://github.com/Ayesha-Javaidd/Weather-Detector-Flutter-App',
    },

    {
      title: 'Currency Converter App',
      slug: 'currency-converter',
      description:
        'A Flutter application for converting currencies using live exchange rates.',
      fullDescription: `
The Currency Converter App is a lightweight Flutter application that converts one currency to another using live exchange rate data from external APIs. The app focuses on real-time data handling, user input validation, and responsive UI design.

This project highlights API consumption and clean presentation of dynamic data in a mobile application.
`,
      features: [
        'Live currency exchange rate conversion',
        'REST API integration',
        'User-friendly input and output',
        'Clean and responsive UI',
      ],
      techStack: ['Flutter', 'Dart', 'REST APIs'],
      githubUrl:
        'https://github.com/Ayesha-Javaidd/Currency-Convertor-Flutter-App',
    },

    {
      title: 'Tic Tac Toe Game',
      slug: 'tic-tac-toe',
      description:
        'A browser-based Tic Tac Toe game built with JavaScript and Tailwind CSS.',
      fullDescription: `
A classic Tic Tac Toe game developed using vanilla JavaScript for game logic and Tailwind CSS for styling. The game includes turn-based logic, win-condition checks, and responsive design.

This project demonstrates strong fundamentals in frontend development, DOM manipulation, and UI styling.
`,
      features: [
        'Interactive game logic',
        'Win and draw condition detection',
        'Responsive design using Tailwind CSS',
        'Clean and minimal UI',
      ],
      techStack: ['JavaScript', 'Tailwind CSS', 'HTML'],
    },
  ];

  getProjects() {
    return this.projects;
  }
}
