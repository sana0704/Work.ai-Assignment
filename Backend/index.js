import express from "express";
import cors from "cors";
import multer from "multer";

const app = express();
app.use(cors());
app.use(express.json());


const upload = multer({ dest: "uploads/" });

// sample data
let candidates = [

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


app.get("/api/candidates", (req, res) => {
  res.json(candidates);
});

app.post("/api/candidates", upload.single("resume"), (req, res) => {
  const { name, email, phone, jobTitle } = req.body;
  const resume = req.file ? req.file.filename : null;

  if (!name || !email || !phone || !jobTitle) {
    return res.status(400).json({ message: "All fields except resume are required." });
  }


  const newCandidate = {
    id: candidates.length + 1,
    name,
    email,
    phone,
    jobTitle,
    resume,
    status: "Pending",
  };

  candidates.push(newCandidate);
  console.log("New Candidate Added:", newCandidate);
  res.status(201).json({ message: "Candidate added successfully!", candidate: newCandidate });
});


const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


