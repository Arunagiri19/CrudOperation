
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EmployeeGrid from "./CrudOPeration/EmployeeGrid";
import CreateUpdateEmployee from "./CrudOPeration/createUpdateEmployee";
import ViewEmployee from "./CrudOPeration/ViewEmployee";

function App() {
 

  return (
    <>
   <BrowserRouter>
   
        <Routes>
          <Route path="/" element={<EmployeeGrid />} />
          <Route path="/create" element={<CreateUpdateEmployee />} />
          <Route path="/update" element={<CreateUpdateEmployee />} />
          <Route path="/view" element={<ViewEmployee />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
