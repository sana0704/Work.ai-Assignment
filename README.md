a. Features Implemented
   Frontend (React.js)

Built using React.js with React Router DOM for navigation.
React Hook Form used for easy and clean form handling.
Three main components:
Candidate Table: Displays all candidates with their status.
Add Referral: Form to add new candidate details and upload a resume.
Create Profile: Takes user details 
Responsive UI styled using CSS3, including buttons, forms, and navigation bar.
Dynamic updates and navigation between pages without refresh.

b. Backend
   (Node.js + Express)

Custom Express.js API built to handle CRUD-like operations for candidate data.
CORS enabled for smooth frontend-backend communication.
Data stored temporarily in mock JSON or in-memory arrays (no database yet).
API endpoints to fetch, add, and update candidate data.
Used fake data generation to simulate real-world responses for development testing.

b. Steps to Run the Project Locally
1️. Clone the repository
https://github.com/sana0704/Work.ai-Assignment.git

2️ Run the backend server
cd Backened
npm install express 
npm install cors
npm start
The backend will start on http://localhost:5000

3️ Run the frontend
cd Frontend
npx install create react-app my-app
cd ../my-app
npm start
The frontend will start on http://localhost:3000

4️ Open your browser
Visit: http://localhost:3000
You’ll be able to view candidate data add referrals and create a profile.

Assumptions

The backend runs locally on port 5000 and the frontend on port 3000.
Resume upload feature currently accepts PDF files only.
Data persistence is temporary, meant for demonstration.
Each form field (email, phone, job title, etc.) is assumed to be correctly filled.

Limitations

 No real database connection yet (data stored in-memory or JSON file).
 No authentication or role-based access control (any user can add or update).
 Uploaded resume files are not stored permanently.
