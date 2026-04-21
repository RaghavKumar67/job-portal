import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Home() {


  const jobs = useSelector((state)=>state.jobs);


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