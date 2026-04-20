import { useParams } from "react-router-dom";


function JobDetails() {

  const params= useParams();


  const id  = params.id;


  return (

    <>
    
    <h2>{`Job id : ${id}`}</h2>

    </>
  );
}

export default JobDetails;