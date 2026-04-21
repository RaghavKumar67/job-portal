import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function JobDetails() {

  const params= useParams();

 
  const jobs = useSelector((state)=>state.jobs);

  const id  = params.id;



  const job = jobs.find(job=>job.id === Number(id));
  if (!job) {
  return <h2>Job not found</h2>;
}

  return (

    
    <>
    
    <h2>{`Job id : ${id}`}</h2>

  
    <h3>{job.title}</h3>
<h4>{job.company}</h4>
<p>{job.location}</p>

    </>
  );
}

export default JobDetails;