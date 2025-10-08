
// import express from "express";
// import cors from "cors"
// import users from "./user.js";


// const app = express()

// app.use(cors())
// app.get("/",(req,res)=>{
//     res.send(" express server is working")
// })

// app.get("/api/user",(req,res)=>{
//     res.send(users)
// })

// const port = process.env.PORT || 3000
// app.listen(port,()=>{
//     console.log(`server at http://localhost:${port}`)
// })



// ES Module imports
import express from "express";
import cors from "cors";

const app = express();
app.use(cors()); // allow React frontend to fetch

// Fake candidate data
const candidates = [
  { id: 1, name: "Aarav Mehta", jobTitle: "Frontend Developer", status: "Pending" },
  { id: 2, name: "Diya Sharma", jobTitle: "Backend Engineer", status: "Reviewed" },
  { id: 3, name: "Rohan Gupta", jobTitle: "Full Stack Developer", status: "Hired" },
  { id: 4, name: "Sneha Iyer", jobTitle: "UI/UX Designer", status: "Pending" },
  { id: 5, name: "Karan Patel", jobTitle: "Data Analyst", status: "Reviewed" },
  { id: 6, name: "Ishita Nair", jobTitle: "Project Coordinator", status: "Pending" },
  { id: 7, name: "Vikram Rao", jobTitle: "DevOps Engineer", status: "Hired" },
  { id: 8, name: "Priya Das", jobTitle: "QA Tester", status: "Reviewed" },
  { id: 9, name: "Aditya Singh", jobTitle: "Software Engineer", status: "Pending" },
  { id: 10, name: "Neha Joshi", jobTitle: "HR Associate", status: "Hired" }
];

// API endpoint
app.get("/api/candidates", (req, res) => {
  res.json(candidates);
});

// Start server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

