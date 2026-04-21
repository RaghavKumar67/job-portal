import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Dashboard from './Dashboard';
import JobDetails from './JobDetails';






function App() {

    return(



    <BrowserRouter>
    
    <nav>
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
    </nav>

    <Routes>

<Route path="/" element={<Home/>}/>
<Route path="/dashboard" element={<Dashboard/>}/>
<Route path="/jobs/:id" element={<JobDetails/>}/>
    </Routes>
    

    </BrowserRouter>


);
 
}

export default App;
