# Front End Developer Assignment

This repository contains the implementation of the given assignment for a Front End Developer role. The application is built using React, Tailwind CSS, Recharts, and Supabase.

## Table of Contents

- [Project Overview](#project-overview)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [Database Setup](#database-setup)
- [API Integration](#api-integration)
- [Features](#features)
- [Execution and Code Quality](#execution-and-code-quality)
- [Aesthetics](#aesthetics)

## Project Overview

The assignment includes building a front-end application that integrates with both a SQL database and REST APIs. The application consists of multiple components, some of which retrieve data from the database, and others from provided APIs.

## Technologies Used

- **React**: For building the user interface
- **Tailwind CSS**: For styling the application
- **Recharts**: For creating charts and graphs
- **Supabase**: For database management and real-time data fetching
- **TypeScript**: For type safety and enhanced development experience

## Setup Instructions

1. **Clone the repository:**

   ```bash
   git clone https://github.com/harshxraj/ungray.git
   cd your-repo-name
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the root directory and add the following:

   ```plaintext
   VITE_SUPABASE_URL=
   VITE_SUPABASE_ANON_KEY=
   ```

4. **Start the development server:**

   ```bash
   npm run dev
   ```

## Database Setup

1. **Insert data from the provided Excel sheets into your SQL database.**
2. **Create three tables in your Supabase database corresponding to the Excel sheets for components 2, 4, and 6.**
3. **Connect your front-end application to Supabase:**

   ```javascript
   import { createClient } from '@supabase/supabase-js';

   const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
   const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
   const supabase = createClient(supabaseUrl, supabaseAnonKey);

   export default supabase;
   ```

## API Integration

For components 1, 3, 4, and 5, integrate the provided REST APIs with authentication:

- **Authentication Details:**
  - Username: `trial`
  - Password: `assignment123`

- **API URLs:**
  - Component 1: `http://ec2-3-83-254-115.compute-1.amazonaws.com:8020/sample_assignment_api_1/`
  - Component 3: `http://ec2-3-83-254-115.compute-1.amazonaws.com:8020/sample_assignment_api_3/`
  - Component 4: `http://ec2-3-83-254-115.compute-1.amazonaws.com:8020/sample_assignment_api_4/`
  - Component 5: `http://ec2-3-83-254-115.compute-1.amazonaws.com:8020/sample_assignment_api_5/`

## Features

- **Component 1:** Fetches data from the API.
- **Component 2:** Displays data from the SQL database.
- **Component 3:** Fetches data from the API.
- **Component 4:** Displays data from both the SQL database and the API.
- **Component 5:** Fetches data from the API.
- **Component 6:** Displays data from the SQL database.
- **Login Page:** Custom-designed login page for authentication.

## Execution and Code Quality

- The application is designed for speed and quality, with a focus on completing the assignment requirements efficiently.
- Code quality is maintained with proper comments, modular structure, and adherence to best practices.

## Aesthetics

- The application provides a smooth user experience with well-implemented hover effects, tooltips, and responsive design.
- Tailwind CSS ensures a clean and consistent UI, enhancing the overall look and feel of the application.
