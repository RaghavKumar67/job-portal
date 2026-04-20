import { Link } from "react-router-dom";


function Home() {


const jobs = [
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

  return (

    <>
    
    {jobs.map(job=>(

      <div key={job.id}>

      <h4>{job.title}</h4>
      <h5>{job.company}</h5>
      <p> {job.location}</p>  
    <Link to={`/jobs/${job.id}`}>View Details</Link>
      </div>

    ))}
    
    </>
  );
}

export default Home;