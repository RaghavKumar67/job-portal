import { createSlice } from "@reduxjs/toolkit";



const initialState =  [
    {
      id: 1,
      title: "Frontend Developer",
      company: "Google",
      location: "Remote",
    },
    {
      id: 2,
      title: "Backend Developer",
      company: "Amazon",
      location: "Bangalore",
    },
    {
      id: 3,
      title: "Full Stack Developer",
      company: "Microsoft",
      location: "Hyderabad",
    },
    {
      id: 4,
      title: "UI Developer",
      company: "Netflix",
      location: "Chennai",
    },
    {
      id: 5,
      title: "React Developer",
      company: "Meta",
      location: "Remote",
    },
  ];


const jobsSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    // we will add actions later
  },
});

export default jobsSlice.reducer;