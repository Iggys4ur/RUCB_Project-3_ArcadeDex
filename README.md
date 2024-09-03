# ArcadeDex

branch: react-pages

## *"Like LinkTree but for eSports"*
### *Project 3 | Group 3 | RU Coding Bootcamp [06/2024]*
### *- written by: Eli (Iggys4ur) and Jaylen (Frxctxl)*

## What We Learned From This Project

ArcadeDex involved building a single-page application using the MERN stack (MongoDB, Express.js, React, and Node.js) to create a platform that acts as a digital Rolodex for eSports players and enthusiasts. This project provided hands-on experience with full-stack development, integrating user authentication, and managing data interactions with GraphQL. It also emphasized the importance of responsive design and user experience, tailoring the interface for gaming communities.

## Project Overview

ArcadeDex is an innovative platform that brings the concept of a Rolodex to the digital age, tailored specifically for the gaming community. Users can showcase their gaming profiles, primarily focused on Steam, and connect with others in the eSports arena. The platform offers both public and private pages, with features for profile management and gaming account integration.

## Details

### Project Requirements

- **Frontend**: Built using React to create a dynamic and interactive user interface.
- **Backend**: Implemented with Node.js and Express.js, using GraphQL for handling data queries and mutations.
- **Database**: MongoDB with Mongoose ODM for robust data management.
- **Authentication**: User authentication implemented using JWT to ensure secure access.
- **Deployment**: Deployed on Render for scalable and reliable hosting.
- **UI/UX**: Polished, responsive, and interactive design to cater to eSports users.
- **Security**: Protection of sensitive API key information on the server side.

### Features

- **Public User Profile Page**: Display Steam accolades and other gaming achievements.
- **Login and Registration Pages**: Easy onboarding for new users and secure access for existing users.
- **Private User Account Settings**: Manage username, email, password, gamer tags, and account deletion.
- **System/Platform Settings**: Link or unlink gaming accounts, such as Steam, for an integrated experience.

---
<details>
  <summary>Agile Project Management Considerations</summary>

### User Story

    AS an eSports enthusiast,
    I WANT a centralized platform to showcase my gaming achievements and connect with other gamers,
    SO THAT I can easily manage my online gaming presence and network within the community.

### Acceptance Criteria

1. **Given** a new user,
   - **When** they navigate to the registration page,
   - **Then** they can create a new account by providing their email, username, and password.

2. **Given** a registered user,
   - **When** they log in,
   - **Then** they are directed to their private dashboard where they can manage their profile.

3. **Given** a public profile page,
   - **When** a visitor views the page,
   - **Then** they can see the user's Steam accolades and other linked profiles.

4. **Given** the account settings page,
   - **When** a user makes changes to their username, email, or password,
   - **Then** those changes are saved and updated in the system.

</details>

## Diagrams

### Wireframes

Below are the wireframes used for the primary pages of ArcadeDex:

<details>
  <summary>Wireframes</summary>

1. **Public User Profile Page Wireframe**: ![Public User Profile Page Wireframe](./assets/wireframes/public-profile-wireframe.png)  
   *Displays user's Steam accolades and gaming achievements.*

2. **Login Page Wireframe**: ![Login Page Wireframe](./assets/wireframes/login-wireframe.png)  
   *Simple and user-friendly login interface.*

3. **Registration Page Wireframe**: ![Registration Page Wireframe](./assets/wireframes/registration-wireframe.png)  
   *Form for new users to register, including email and password inputs.*

4. **Private User Account Settings Page Wireframe**: ![Account Settings Page Wireframe](./assets/wireframes/account-settings-wireframe.png)  
   *Allows users to update their username, email, password, and manage gamer tags.*

5. **Private User System/Platform Settings Page Wireframe**: ![System Settings Page Wireframe](./assets/wireframes/system-settings-wireframe.png)  
   *Options to link or unlink gaming platforms like Steam.*

6. **Forgot Password Page Wireframe**: ![Forgot Password Page Wireframe](./assets/wireframes/forgot-password-wireframe.png)  
   *Allows users to reset their password if they forget it.*

7. **Error Page Wireframe**: ![Error Page Wireframe](./assets/wireframes/error-page-wireframe.png)  
   *A general error page that informs users when something goes wrong, like a 404 or 500 error.*

8. **Achievement Detail Page Wireframe**: ![Achievement Detail Page Wireframe](./assets/wireframes/achievement-detail-page-wireframe.png)  
   *A page that provides more detailed information about a specific achievement, including date earned and criteria met.*

9. **Search Results Page Wireframe**: ![Search Results Page Wireframe](./assets/wireframes/search-results-wireframe.png)  
   *Displays search results when users search for other gamers or specific games.*

10. **Notification Center Wireframe**: ![Notification Center Wireframe](./assets/wireframes/notification-center-wireframe.png)  
   *Shows user notifications, such as when a new friend request is received or an account is successfully linked.*

</details>

### Data Models

The following data models are essential for ArcadeDex:


<details>
  <summary>Data Models</summary>

1. **User Model**: ![User Model](./assets/models/user-model.png)  
   *Includes fields for username, email, password (hashed), gamer tags, and linked accounts.*

2. **Profile Model**: ![Profile Model](./assets/models/profile-model.png)  
   *Contains user profile information such as Steam accolades, bio, profile picture, and other public-facing data.*

3. **Settings Model**: ![Settings Model](./assets/models/settings-model.png)  
   *Manages user preferences, linked platforms, and account-specific settings.*

4. **Achievement Model**: ![Achievement Model](./assets/models/achievement-model.png)  
   *Stores data related to specific gaming achievements and accolades fetched from linked platforms like Steam.*

5. **Session Model**: ![Session Model](./assets/models/session-model.png)  
   *Tracks user sessions for authentication and authorization, using JWT tokens.*

6. **Notification Model**: ![Notification Model](./assets/models/notification-model.png)  
   *Manages notifications related to user activities like friend requests or achievement unlocks.*

7. **Friend Model**: ![Friend Model](./assets/models/friend-model.png)  
   *Manages friend connections and requests between users.*

8. **Game Model**: ![Game Model](./assets/models/game-model.png)  
   *Stores information about different games that users can link or display.*

9. **Session History Model**: ![Session History Model](./assets/models/session-history-model.png)  
   *Logs user session history, which can be useful for analytics and security.*

10. **Audit Log Model**: ![Audit Log Model](./assets/models/audit-log-model.png)  
   *Tracks changes made to user accounts, helpful for monitoring and debugging.*

</details>

### Flow Charts

The following flow charts outline the processes and interactions within ArcadeDex:

<details>
  <summary>Flowcharts</summary>
  
1. **User Registration Flow Chart**: ![User Registration Flow Chart](./assets/flowcharts/user-registration-flowchart.png)  
   *Visual representation of the steps a new user takes to register, from form submission to database entry.*

2. **Login Authentication Flow Chart**: ![Login Authentication Flow Chart](./assets/flowcharts/login-authentication-flowchart.png)  
   *Displays the process of user authentication, including token generation and validation.*

3. **Profile Update Flow Chart**: ![Profile Update Flow Chart](./assets/flowcharts/profile-update-flowchart.png)  
   *Describes how users can update their profile information and how those changes are saved.*

4. **Account Linking Flow Chart**: ![Account Linking Flow Chart](./assets/flowcharts/account-linking-flowchart.png)  
   *Shows the steps involved in linking or unlinking a gaming platform like Steam to the user's ArcadeDex account.*

5. **Achievement Fetching Flow Chart**: ![Achievement Fetching Flow Chart](./assets/flowcharts/achievement-fetching-flowchart.png)  
   *Details the process of fetching and displaying gaming achievements from integrated platforms.*

6. **Password Reset Flow Chart**: ![Password Reset Flow Chart](./assets/flowcharts/password-reset-flowchart.png)  
   *Outlines the process a user goes through to reset their password, including email verification.*

7. **Notification Handling Flow Chart**: ![Notification Handling Flow Chart](./assets/flowcharts/notification-handling-flowchart.png)  
   *Describes how notifications are generated, stored, and displayed to users.*

8. **Friend Request Flow Chart**: ![Friend Request Flow Chart](./assets/flowcharts/friend-request-flowchart.png)  
   *Details the process of sending, receiving, and accepting friend requests.*

9. **Game Linking Flow Chart**: ![Game Linking Flow Chart](./assets/flowcharts/game-linking-flowchart.png)  
   *Explains the process of linking a new game to a user profile.*

10. **Search Functionality Flow Chart**: ![Search Functionality Flow Chart](./assets/flowcharts/search-functionality-flowchart.png)  
   *Shows how users search for other users, games, or achievements, and how results are displayed.*

11. **Data Backup Flow Chart**: ![Data Backup Flow Chart](./assets/flowcharts/data-backup-flowchart.png)  
   *Illustrates the process of backing up user data.*

12. **Security Flow Chart**: ![Security Flow Chart](./assets/flowcharts/security-flowchart.png)  
   *Highlights the security checks during user interactions, such as login attempts and account changes.*

</details>

## Roadmap to MVP

### 1. Project Initialization

- **Repository Setup**: Create a new GitHub repository named `arcadedex`.
- **Directory Structure**: Set up basic folders and files for the client and server.
- **Dependencies**: Install initial dependencies for the backend and frontend.

### 2. Setting Up Backend (Express & Node.js)

- **Backend Structure**: Organize the server with folders for configurations, models, and routes.
- **Basic Server Setup**: Create a basic Express server with middleware for handling JSON and logging.

### 3. Database Integration (MongoDB & Mongoose)

- **User and Profile Models**: Define schemas for storing user and profile information.
- **Database Connection**: Configure Mongoose to connect to MongoDB.

### 4. Frontend Setup (React)

- **React Installation**: Initialize the React app within the `client` directory.
- **Basic Components**: Develop initial reusable components and set up React Router for navigation.

### 5. User Authentication (JWT & React Context)

- **Authentication Routes**: Create routes for registration, login, and profile fetching.
- **State Management**: Use React Context to manage authentication state.

### 6. API Integration (GraphQL)

- **GraphQL Setup**: Implement Apollo Server in the backend and Apollo Client in the frontend.
- **Schemas and Resolvers**: Define types and implement resolvers for user data.

### 7. Minimum Viable Product (MVP)

- **Basic Features**: Complete user registration, login, and profile management.
- **UI/UX**: Develop a basic, responsive design tailored to eSports users.
- **Directory Structure**: Organize the project with clearly defined folders for each feature and component.

### 8. Deployment

- **Deploy on Render**: Set up environment configurations and deploy the app.
- **Testing**: Conduct end-to-end testing to ensure functionality.

### 9. Post-MVP Enhancements

- **New Features**: Add support for additional gaming platforms and social features.
- **Optimization**: Improve performance and security measures.
- **User Feedback**: Gather user feedback to guide future updates and improvements.

## Installation

The GitHub URL is `https://github.com/Iggys4ur/RUCB_Project-3_ArcadeDex/`

To run this project locally, (assuming you have Git installed) input the following code in your terminal:

```bash
git clone https://github.com/Iggys4ur/RUCB_Project-3_ArcadeDex.git <(optional) PATH_TO_DESTINATION_DIRECTORY>
cd ./RUCB_Project-3_ArcadeDex
npm install
npm start
```

## Usage

The live site can be viewed at the following URL:

- [ArcadeDex](https://your-live-site-url.com)

<details>
  <summary>Screenshots and Gifs of ArcadeDex</summary>
  <br>

  ![Login Page Screenshot](./assets/screenshots/login-page.png)
  *Login page showcasing the user-friendly interface for logging into ArcadeDex.*

  ![User Profile Page Screenshot](./assets/screenshots/profile-page.png)  
  *User profile page displaying Steam accolades and gaming achievements.*

  ![Dashboard Screenshot](./assets/screenshots/dashboard.png)  
  *User dashboard where users can manage their account and settings.*

  ![Gif of Linking Steam Account](./assets/gifs/link-steam.gif)  
  *A demonstration of linking a Steam account to ArcadeDex.*

  ![Gif of Editing Profile](./assets/gifs/edit-profile.gif)  
  *How to edit your profile information on ArcadeDex.*
   </br>
</details>

## API Integration

- **Steam API**: Integrated to fetch and display user gaming data, accolades, and achievements. Provides a seamless way for users to link their Steam accounts and showcase their gaming profiles.

## Development Process

- **Sprint Planning**: Divided project development into multiple sprints focusing on different aspects like frontend, backend, and API integration.
- **Standups**: Regular standups to discuss progress, challenges, and next steps.
- **Retrospectives**: Post-sprint retrospectives to reflect on the work done and plan improvements for the next sprint.

## Testing

- **Unit Testing**: Implemented using Jest for testing individual components and functions.
- **Integration Testing**: Used Cypress to test the interaction between different components and the server.
- **User Acceptance Testing**: Conducted with a group of eSports enthusiasts to get feedback on usability and features.

## Post MVP Roadmap

- **Future Features**: 
  - Integration with other gaming platforms (e.g., Xbox Live, PlayStation Network).
  - Enhanced social features like friends lists and messaging.
  - Mobile app development for iOS and Android.
  - Gamification elements such as badges and leaderboards.

## Credits

The following resources and individuals contributed to the development of ArcadeDex:

- **RU Coding Bootcamp Curriculum**: Provided the foundational knowledge and project framework.
- **Steam API**: For providing access to gaming data and accolades.
- **GraphQL Documentation**: For insights on integrating GraphQL with our backend.
- **React Documentation**: Used extensively to build the frontend components.
- **Jest and Cypress Documentation**: For testing our application.
- **MDN Web Docs**: For general web development resources.
- **Readme.md Writing Guide**: For structuring this README file.
- **Team Members**: Each team member played a vital role in the development and deployment of ArcadeDex.

## License

This project is licensed under the MIT License. For more information, read the LICENSE file.
